console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];



  function checkForMatch() {
  	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID].rank);
    cardsInPlay.push(cards[cardID].rank);
    console.log(cards.cardImage);
    console.log(cards.suit);

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
