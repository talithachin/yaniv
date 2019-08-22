document.getElementById('startButton').addEventListener('click',loadCards);

class cardValue{
    constructor(id, type,suit,number){
        this.id=id;
        this.type=type;
        this.suit=suit;
        this.number=number;
    }

}


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

function loadCards (e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','cards.json',true);
    xhr.onload = function(){
      
        if (this.status === 200){
            const cards= JSON.parse(this.responseText);
            const randCard = cards[Math.floor(Math.random()*cards.length)];
            Array.prototype.shuffle =function (){
            var i= this.length, j, temp;
            while (--i>0){
                //find a random number from 1 to 54. math.random gives you a random decimal from 0 to 1 * (number of cards)
                j = Math.floor(Math.random()*(i+1));
                // put the random card in temporary store
                temp = cards[j];
                //swop the place of the random card with the last number.
                cards[j]= cards[i];
                //put value of the random card in the place of the last number
                cards[i]= temp;

            }
            return this;
        }
            var shuffledCards = cards.shuffle();
            // var sumArray = function(arr){
            //     return arr.reduce(function(a,b){
            //         return a+b
            //     }, 0);
            // }
      
            let output = '';
            // let sum = parseInt("0");
            let numberArray = [];
            var arr = [];
            for (let y=0; y<5; y++){

                const cardY= new cardValue(shuffledCards[y].id,shuffledCards[y].type,shuffledCards[y]
                    .suit,shuffledCards[y].number);
                // const card1= new cardValue(shuffledCards[0].id,shuffledCards[0].type,shuffledCards[0]
                //     .suit,shuffledCards[0].number);
                // const card2= new cardValue(shuffledCards[1].id,shuffledCards[1].type,shuffledCards[1].suit,shuffledCards[1].number);
                // const card3= new cardValue(shuffledCards[2].id,shuffledCards[2].type,shuffledCards[2].suit,shuffledCards[2].number);
                // const card4= new cardValue(shuffledCards[3].id,shuffledCards[3].type,shuffledCards[3].suit,shuffledCards[3].number);
                
                // const arrayScores = [card1, card2, card3, card4];
                // console.log(arrayScores);
                output +=
                `<div class= "card bg-light mb3 players" style = "position:absolute;      margin-left:40%; margin-top:45%"">
                <div class = "card-body">
                <p>${cardY.type} ${cardY.suit}</p>
               
                </div>`
          
                // arrayScores[0]=shuffledCards[0].number;
                // arrayScores[1]=shuffledCards[1].number;
                // arrayScores[2]=shuffledCards[2].number;
                // arrayScores[3]=shuffledCards[3].number;
                // arrayScores[4]=shuffledCards[4].number;
                // console.log(arrayScores);
                // sum = sum+parseInt(cardY.number);
                // console.log(sum)
                numberArray.push(cardY.number++);
                const add = (a, b) => a + b
                const sumArray = numberArray.reduce(add);
                console.log(sumArray);
                // arr.push(cardY.id++);
                // console.log(arr);

                //ARRAY METHOD OR SUM METHOD? 

            }
            // console.log(sumArray(arrayScores))
            
           
                        
        document.getElementById('bottomRow').innerHTML= output;
      
 
}
    
}
xhr.send();
}
