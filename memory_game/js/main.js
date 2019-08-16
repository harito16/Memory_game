console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];



  function checkForMatch() {
  	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
    cardsInPlay.push(cards[cardID])

 checkForMatch();
}

flipCard(0);
flipCard(2);

	if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[2]) {
    	alert('You found a math');
    } else {
    	alert ('Sorry, try again');
      
 }
    };
