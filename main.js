const imAString = 'hi';
const age = 99;
if (age >= 21){
console.log('come in')

}
else {
    console.log('leave')
}



console.log('hello');


const favoriteColor = prompt('favorite color?');
const favoriteAnimal = prompt('favorite animal');

if(favoriteAnimal === 'bear' && favoriteColor === 'blue'){
console.log('welcome to the club');
}else if (favoriteAnimal === 'cat' || favoriteColor === 'red'){
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';
console.log('pie length: ',pie.length)
console.log('#3: ', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat')); //-1
console.log('indexof pea', pie.indexOf('pea')); //0

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g,"ain't");
console.log('newQuote',newQuote);

