const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";



const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint
    };

console.log('index of orphans: ',sonnet.indexOf('orphans'));
console.log('length of sonnet: ', sonnet.length);
let newSonnet = sonnet.replace('winter','yuletide');
newSonnet = newSonnet.replace(/ the /g, " a large ");
console.log(newSonnet);

const sonnetDiv = document.getElementById('sonnet');
printToDom(newSonnet,'sonnet');
sonnetDiv.innerHTML = `<h3>${newSonnet}</h3>`