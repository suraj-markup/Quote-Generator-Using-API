
const person= document.querySelector('.person');
const quotes= document.querySelector('.text');
const btn= document.querySelector('.btn');

function randomQuote(e) {
    
    
    
    fetch('https://api.quotable.io/random')
    .then( (response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        quotes.innerHTML = ` " ${data.content}"`;
        person.innerHTML = ` ~ ${data.author}`;
    })
    .catch(function (err) {
       console.log(err);
    });
    console.log('random quote') ;
}

 
btn.addEventListener('click', () =>{ randomQuote();});