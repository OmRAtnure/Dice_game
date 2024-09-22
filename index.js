
var n1 = Math.random();
var face1 = Math.floor(n1 * 6) + 1;
var n2 = Math.random();
var face2 = Math.floor(n2 * 6) + 1;

if (face1 == 1) {
    document.querySelector(".img1").setAttribute("src", "./images/one.png");
}

else if (face1 == 2) {
    document.querySelector(".img1").setAttribute("src", "./images/two.png");
}

else if (face1 == 3) {
    document.querySelector(".img1").setAttribute("src", "./images/three.png");
}

else if (face1 == 4) {
    document.querySelector(".img1").setAttribute("src", "./images/four.png");
}

else if (face1 == 5) {
    document.querySelector(".img1").setAttribute("src", "./images/five.png");
}

else {
    document.querySelector(".img1").setAttribute("src", "./images/six.png");
}

if (face2 == 1) {
    document.querySelector(".img2").setAttribute("src", "./images/one.png");
}

else if (face2 == 2) {
    document.querySelector(".img2").setAttribute("src", "./images/two.png");
}

else if (face2 == 3) {
    document.querySelector(".img2").setAttribute("src", "./images/three.png");
}

else if (face2 == 4) {
    document.querySelector(".img2").setAttribute("src", "./images/four.png");
}

else if (face2 == 5) {
    document.querySelector(".img2").setAttribute("src", "./images/five.png");
}

else  {
    document.querySelector(".img2").setAttribute("src", "./images/six.png");
}

if(face1>face2){
    document.querySelector("h2").innerHTML="Player1 wins"
}
else if(face1<face2){
    document.querySelector("h2").innerHTML = "Player2 wins"
}
else{
    document.querySelector("h2").innerHTML = "Tie"
}