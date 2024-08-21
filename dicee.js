var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber1ImageSource = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomNumber1ImageSource); 


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomNumber2ImageSource = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomNumber2ImageSource);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
