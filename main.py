import json, requests

call = requests.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b506a06468994fcc9ed9f55451000921')
payload = json.loads(call.text)

print(payload)