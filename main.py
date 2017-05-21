import json, requests, nltk
from textblob import TextBlob

"""
'breitbart-news',
'buzzfeed',
'entertainment-weekly',
'espn',
'espn-cric-info',
'fox-sports',
'ign',
'talksport',
'the-sport-bible',
'football-italia',
'bbc-sport',
'nfl-news',
'polygon',
'wirtschafts-woche'
"""

sources= ['abc-news-au',
          'al-jazeera-english',
          'ars-technica',
          'associated-press',
          'bbc-news',
          'bild',
          'bloomberg',
          'business-insider',
          'business-insider-uk',
          'cnbc',
          'cnn',
          'daily-mail',
          'der-tagesspiegel',
          'die-zeit',
          'engadget',
          'financial-times',
          'focus',
          'fortune',
          'four-four-two',
          'google-news',
          'gruenderszene',
          'hacker-news',
          'handelsblatt',
          'independent',
          'mashable',
          'metro',
          'mirror',
          'mtv-news',
          'mtv-news-uk',
          'national-geographic',
          'new-scientist',
          'newsweek',
          'new-york-magazine',
          'recode',
          'reddit-r-all',
          'reuters',
          'spiegel-online',
          't3n',
          'techcrunch',
          'techradar',
          'the-economist',
          'the-guardian-au',
          'the-guardian-uk',
          'the-hindu',
          'the-huffington-post',
          'the-lad-bible',
          'the-new-york-times',
          'the-next-web',
          'the-telegraph',
          'the-times-of-india',
          'the-verge',
          'the-wall-street-journal',
          'the-washington-post',
          'time',
          'usa-today',
          'wired-de', ]

# for api in sources:
#     # print('https://newsapi.org/v1/articles?source=' + api + '&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921')
#     call = requests.get('https://newsapi.org/v1/articles?source=' + api + '&sortBy=top&apiKey=b506a06468994fcc9ed9f55451000921')
#     payload = json.loads(call.text)
#     # print(payload)
#     if payload['status'] != 'error':
#         print(payload['source'])
#         for a in payload['articles']:
#             print('\t' + a['title'])

# Imports the Google Cloud client library
from google.cloud import language

# Instantiates a client
language_client = language.Client()

# The text to analyze

call = requests.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=b506a06468994fcc9ed9f55451000921')
payload = json.loads(call.text)
    # print(payload)
if payload['status'] != 'error':
    print(payload['source'])
    for a in payload['articles']:
        # print('\t' + a['title'])

        text = a['title'] #'Jet collides with truck at LAX'
        document = language_client.document_from_text(text)

        # Detects the sentiment of the text
        sentiment = document.analyze_sentiment().sentiment

        # print(document.analyze_sentiment())
        print('Text: {}'.format(text))
        # print('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))


        entities = document.analyze_entities().entities

        for a in entities:
            print('\t', a.name, a.entity_type)
# print(entities[0].__dict__)
