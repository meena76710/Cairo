
var n = Math.floor(Math.random() * 6) +1;

var path = "images/dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src", path);

var n2 = Math.floor(Math.random()*6)+1;
var path = "images/dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src", path);

if (n1<n2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (n2<n1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "DRAW"
}