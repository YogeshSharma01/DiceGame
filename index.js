setInterval(myTime, 3000);
let num = 0;
function myTime(){
    var die = document.getElementById('dice');
    var d = Math.floor(Math.random() * 6) + 1;
    die.innerHTML = d;
    return d;
}
function myFunction(el){
    var message=  document.getElementById('show');
    var selectedVar = document.getElementById('match');
    var Cur = document.getElementById('score');
   
var T = myTime();
  var C = el.value;
  if(C == T){
    message.innerHTML="Your Guess was right!";
    Cur.innerHTML= ++num;
  }else{
    message.innerHTML="Your Guess was wrong!";
  }
  selectedVar.innerHTML=C;
 }

var count = document.getElementById('display');

setInterval(dis1,3000);

function dis1(){
    var display1 = document.getElementById('display1');
    display1.style.display="none";
    var display2 = document.getElementById('display2');
    display2.style.display="block";
}

var counter = 6;
setInterval(function(){
    counter--;
    
    if(counter >= 0){
        id = document.getElementById('N');
        id.innerHTML = counter;
    }
    if(counter === 0){
        counter = 3;
    id.innerHTML = counter;
        
    }
    
},1000);




