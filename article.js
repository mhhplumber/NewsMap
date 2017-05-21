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

setImage : function (elementID) {
	document.getElementByID(elementID).src = this.urlToImage;
}

setTitle : function (elementID) {
	document.getElementByID(elementID).innerHTML = this.title;
}

setDescription : function (elementID) {
	document.getElementByID(elementID).innerHTML = this.description;
}

setURL : function (elementID) {
	document.getElementByID(elementID).src = this.url;
}

setPublishedDate : function (elementID) {
	document.getElementByID(elementID).title = this.publishedAt;
}