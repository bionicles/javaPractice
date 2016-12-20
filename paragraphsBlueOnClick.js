// paragraphsBlueOnClick.js
// turns a <p> tagged element blue when you click on it!

var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i=0; i< paragraphs.length; i++){
	console.log(paragraphs[i].addEventListener);
	paragraphs[i].addEventListener('click', function(){
		this.style.background='blue';
    });
}