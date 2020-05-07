/*
var scores=[0,0]
var roundScore=0;
var activePlayer=0;
*/



init();

//document.querySelector('#current-'+ activePlayer).textContent=dice;
//document.querySelector('#current-' + activePlayer).innerHTML='<em>'+dice + '</em>';

/*

document.querySelector('.dice').style.display="none";

//Starting se zero

document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';

document.getElementById('current-1').textContent='0';

*/

document.querySelector('.btn-roll').addEventListener('click',function(){

 if(gameplaying){
    var dice=Math.floor(Math.random()*6) +1;

    //2====display the result

    //document.querySelector('.dice').style.display='block';
//dont do same operation so--
    var diceDOM=document.querySelector('.dice');

    diceDOM.style.display="block";
    diceDOM.src='dice-'+dice +'.png';

//3==  update the round score if the rolled number was not  a 1
  if(dice !==1){
      //add score
      roundScore +=dice; //this is not used

      document.querySelector('#current-' + activePlayer).textContent=roundScore;

      

  }
else{
    //nxt player
     //active player change karna
   /*  activePlayer ===0?activePlayer=1 : activePlayer=0;
     roundScore=0;
     
     

     document.getElementById('current-0').textContent='0';
     document.getElementById('current-1').textContent='0';
     
     document.querySelector('.player-0-portion').classList.toggle('active');
     document.querySelector('.player-1-portion').classList.toggle('active')

     //for dice
      document.querySelector('.dice').style.display='none';
*/
nextPlayer();



}
 }
  
});



/// for hold the value

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gameplaying){scores[activePlayer] +=roundScore;



        //update the UI
        
        document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
        
        //Check if player won the game
        
        if(scores[activePlayer]>=20){
        
            document.querySelector('#name-' + activePlayer).textContent='WINNER';
            //after winning it moves to the next portion 
            document.querySelector('.dice').style.display='none';
        //Dont use the style property in js which can be done in css like below (winner class)
            document.querySelector('.player-'+ activePlayer +'-portion').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-portion').classList.remove('active');
        gameplaying=false;
        
        
        }else{
            nextPlayer();
        }}

//add current to global score

});


function  nextPlayer(){

    activePlayer ===0?activePlayer=1 : activePlayer=0;
    roundScore=0;
    
    

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('.player-0-portion').classList.toggle('active');
    document.querySelector('.player-1-portion').classList.toggle('active')

    //for dice
     document.querySelector('.dice').style.display='none';




}
document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
  gameplaying=true;


    document.querySelector('.dice').style.display="none";

//Starting se zero

document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';

document.getElementById('current-1').textContent='0';

document.getElementById('name-0').textContent='Player-1';
document.getElementById('name-1').textContent='Player-2';


document.querySelector('.player-0-portion').classList.remove('winner');
document.querySelector('.player-1-portion').classList.remove('winner');
document.querySelector('.player-0-portion').classList.remove('active');
document.querySelector('.player-1-portion').classList.remove('active');

document.querySelector('.player-0-portion').classList.add('active');
}

























/*
     in else
  
     document.querySelector('.player-0-portion').classList.remove('active');
     document.querySelector('.player-1-portion').classList.add('active')
this is only move from 0 to 1 when activePlayer=0




document.querySelector('.btn-hold').addEventListener('click',function(){

if(gamePlaying){//add current to global score
scores[activePlayer] +=roundScore;



//update the UI

document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];

//Check if player won the game

if(scores[activePlayer]>=20){

    document.querySelector('#name-' + activePlayer).textContent='WINNER';
    //after winning it moves to the next portion 
    document.querySelector('.dice').style.display='none';
//Dont use the style property in js which can be done in css like below (winner class)
    document.querySelector('.player-'+ activePlayer +'-portion').classList.add('winner');
    document.querySelector('.player-'+ activePlayer +'-portion').classList.remove('active');

gamePlaying=false;

}else{
    nextPlayer();
}


//next player

    //nextPlayer(); use above
 


})
}*/