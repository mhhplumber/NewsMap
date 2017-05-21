var author;

var title;

var description;

var url;

var urlToImage;

var publishedAt;

function article(article) {
	let temp = JSON.parse(article)
	this.author = temp.author;
	this.title = temp.title;
	this.description = temp.description;
	this.url = temp.url;
	this.urlToImage = temp.urlToImage;
	this.publishedAt = temp.publishedAt;
}

function setImage(elementID) {
	document.getElementByID(elementID).src = this.urlToImage;
}

function setTitle(elementID) {
	document.getElementByID(elementID).innerHTML = this.title;
}

function setDescription(elementID) {
	document.getElementByID(elementID).innerHTML = this.description;
}

function setURL(elementID) {
	document.getElementByID(elementID).src = this.url;
}

function setPublishedDate(elementID) {
	document.getElementByID(elementID).title = this.publishedAt;
}