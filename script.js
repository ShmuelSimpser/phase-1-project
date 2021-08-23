

randomQuote.addEventListener('click', getRandomQuote,)

function getRandomQuote() {
 
fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
  .then(response => response.json())
  .then(data => data.map(q => createQuoteElement(q.content)));


 }
 function createQuoteElement(element) {
  
  let para = document.createElement('p')
  para.innerHTML = element.rendered
  
  let container = document.getElementById('quotes')
  container.appendChild(para)
 }

document.getElementById("liker").addEventListener('click',function() {
  alert("liked :)"); 
});


document.getElementById("dislike").addEventListener('click',function() {
  alert("Disliked :("); 
});


   