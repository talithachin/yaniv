document.getElementById('startButton').addEventListener('click',loadCards);

//Define 
//drawdeck, full deck, discard deck, 
class cardValue{
    constructor(id, type,suit,number){
        this.id=id;
        this.type=type;
        this.suit=suit;
        this.number=number;
    }

}



//1 Card- 3 properties: number, suit, points. 
//2 Deck - who holds to which cards at a time. nested for loop to generate a deck of cards.  



// Async function 
// async function loadCards(){
//     const response = await fetch ('cards.json');
//     const cards = await response.json();
//     console.log(cards);
//     Array.prototype.shuffle =function (){
//         var i= this.length, j, temp;
//         while (--i>0){
//             //find a random number from 1 to 54. math.random gives you a random decimal from 0 to 1 * (number of cards)
//             j = Math.floor(Math.random()*(i+1));
//             // put the random card in temporary store
//             temp = [j];
//             //swop the place of the random card with the last number.
//             cards[j]= cards[i];
//             //put value of the random card in the place of the last number
//             cards[i]= temp;

//         }
//         return this;
//     }
//     const shuffledCards = cards.shuffle();
//     return shuffledCards;

// }
// loadCards().then(playingCards=>console.log(playingCards)
//     );

//var json = require('./data.json'); 

// function loadCards (e){
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET','cards.json',true);
//     xhr.onload = function(){
      
//         if (this.status === 200){
//             const cards= JSON.parse(this.responseText);
//             const randCard = cards[Math.floor(Math.random()*cards.length)];
//             Array.prototype.shuffle =function (){
//                 if (this.shuffled) {
//                     return this
//                 }
//                 var i= this.length, j, temp;
//                 while (--i>0){
//                     //find a random number from 1 to 54. math.random gives you a random decimal from 0 to 1 * (number of cards)
//                     j = Math.floor(Math.random()*(i+1));
//                     // put the random card in temporary store
//                     temp = cards[j];
//                     //swop the place of the random card with the last number.
//                     cards[j]= cards[i];
//                     //put value of the random card in the place of the last number
//                     cards[i]= temp;

//                 }
//                 this.shuffled = true
                
//                 return this;
//             }
//             var shuffledCards = cards.shuffle();
//             // var sumArray = function(arr){
//             //     return arr.reduce(function(a,b){
//             //         return a+b
//             //     }, 0)
//             // }
           
//             let output1 = '';
//             let output2 = '';
//             let output3= '';
//             let drawDeck = '';

//             // let sum = parseInt("0");
//             let numberArray = [];
//             for (let y=0; y<5; y++){
//                 const cardY= new cardValue(shuffledCards[y].id,shuffledCards[y].type,shuffledCards[y]
//                     .suit,shuffledCards[y].number);
//                 output1 +=
//                 `<div class= "card bg-light mb3 players" id = "player1Cards${shuffledCards[y].id}"; 
//                  "">
//                 <div class = "card-body">
//                 <p>${cardY.type} ${cardY.suit}</p>
//                 </div></div>
//                 `
                 
//                 document.getElementById('player1').innerHTML= output1;

//                 numberArray.push(cardY.number++);
//                 const add = (a, b) => a + b
//                 const sumArray = numberArray.reduce(add);
//             }

//             for (let y = 0; y < 5; y++) {
//                 document.getElementById(`player1Cards${shuffledCards[y].id}`).addEventListener('click', discardCard1);
//                 function discardCard1(e){
//                     var discardPile1 = document.getElementById('discardPile');
//                     discardPile1.appendChild(e.currentTarget);
//                     e.currentTarget.style.position="absolute"; 
//                     // var createDiscardCard1 = document.createElement('div');
//                     // var createText1 = document.createTextNode(`${shuffledCards[y].type} ${shuffledCards[y].suit}`);
//                     // createDiscardCard1.appendChild(createText1);
//                     // discardPile.appendChild(createDiscardCard1);
//                     // e.currentTarget.remove();
//                 }
//             }     
            
//                shuffledCards.splice(0,5);
               
//                 for (let y=0; y<5; y++){
                    
//                 const cardX= new cardValue(shuffledCards[y].id,shuffledCards[y].type,shuffledCards[y]
//                     .suit,shuffledCards[y].number);
//                 output2 +=
//                 `<div class= "card bg-light mb3 players" id= "player2Cards${shuffledCards[y].id}">
//                 <div class = "card-body">
//                 <p>${cardX.type} ${cardX.suit}</p>
//                 </div>
//                 </div>`
//                 document.getElementById('player2').innerHTML= output2;
                    
//                 }
                
//                 for (let y = 0; y < 5; y++) {
//                     var currentItem2= document.getElementById(`player2Cards${shuffledCards[y].id}`);
//                     currentItem2.addEventListener('click', discardCard2);
//                     function discardCard2(e){
//                         var discardPile2 = document.getElementById('discardPile');
//                         discardPile2.appendChild(e.currentTarget);
//                         e.currentTarget.style.position="absolute";
//                         e.currentTarget.style.margin="0% 0% 0% 0%";
//                         }
//                 }     

//                 shuffledCards.splice(0,5);
               
//                 for (let y=0; y<5; y++){
//                     const cardZ= new cardValue(shuffledCards[y].id,shuffledCards[y].type,shuffledCards[y]
//                         .suit,shuffledCards[y].number);
//                     output3 +=
//                     `<div class= "card bg-light mb3 players" id = "player3Cards${shuffledCards[y].id}">
//                     <div class = "card-body">
//                     <p>${cardZ.type} ${cardZ.suit}</p>
//                     </div>
//                     </div>`
//                 document.getElementById('player3').innerHTML = output3;
//                 }
//                 for (let y = 0; y < 5; y++) {
//                     var currentItem3= document.getElementById(`player3Cards${shuffledCards[y].id}`);
//                     currentItem3.addEventListener('click', discardCard3);
//                     function discardCard3(e){
//                         var discardPile3 = document.getElementById('discardPile');
//                         discardPile3.appendChild(e.currentTarget);
//                         e.currentTarget.style.position="absolute";
//                         e.currentTarget.style.margin="0% 0% 0% 0%";
//                         }
//                 }     

             
//                 shuffledCards.splice(0,5);
//                    console.log(shuffledCards, "hello");
        
//         document.getElementById('drawPile').addEventListener('click',initDeck);
        
//         function initDeck(){
//         drawDeck+=`
//         <p>${shuffledCards[x].type} ${shuffledCards[x].suit}</p>`
//         document.getElementById('drawPile').innerHTML= drawDeck
//         shuffledCards.splice(0,1);
//         console.log('initdeck')
//     }


      
 

// }
// }
// xhr.send();
// }
 

// const card1= new cardValue(shuffledCards[0].id,shuffledCards[0].type,shuffledCards[0]
                //     .suit,shuffledCards[0].number);
                // const card2= new cardValue(shuffledCards[1].id,shuffledCards[1].type,shuffledCards[1].suit,shuffledCards[1].number);
                // const card3= new cardValue(shuffledCards[2].id,shuffledCards[2].type,shuffledCards[2].suit,shuffledCards[2].number);
                // const card4= new cardValue(shuffledCards[3].id,shuffledCards[3].type,shuffledCards[3].suit,shuffledCards[3].number);
                
                // const arrayScores = [card1, card2, card3, card4];
                // console.log(arrayScores);


                // arrayScores[0]=shuffledCards[0].number;
                // arrayScores[1]=shuffledCards[1].number;
                // arrayScores[2]=shuffledCards[2].number;
                // arrayScores[3]=shuffledCards[3].number;
                // arrayScores[4]=shuffledCards[4].number;
                // console.log(arrayScores);
                // sum = sum+parseInt(cardY.number);