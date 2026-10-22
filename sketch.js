let myColors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]
let myColors2 = []
function setup() {
  createCanvas(windowWidth, windowHeight);
//   background(220);
  background("black");
}


function draw() {
//   stroke("white") 
//   strokeWeight(2) 
//   fill("aqua")  
//   ellipse(300,200, 200, 100)
//   fill("orange")
//   rect(600,480, 200, 100)
//   text("rectangle", 590,470) 
//   fill(random(255),random(255),random(255))
//   circle(width/2, height/2, 100)
//   fill(random(255), random(255), random(255))
//   circle(mouseX, mouseY, random(10, 50))
//   fill("magenta")
//   triangle(900,600, 250, 100)
//   fill("white")
//   line(480, 900)


// if (mouseIsPressed === true){
//     fill(0) 
// } else{
//     fill(225)
// }
// square(mouseX, mouseY, 50)

// stroke(random(255),random(255),random(255));
// strokeWeight(random(5), random(1), random(3))
// noFill();
// for (let i = 0; i < 10; i++){
//     square(random(0, width), random(0, height), random(30))

// }
// fill(random(255),random(255),random(255))
// square(width/2, height/2, 55, 20)

fill(random(myColors))
for (let i = 0; i < 10; i++){
    rect(random(0, width), random(0, height), random(30))
}

if (mouseIsPressed === true){
    fill(0) 
} else{
    fill(225)
}
noFill()
stroke(random(myColors))
strokeWeight(random(5), random(1), random(3))
square(mouseX, mouseY, 50)
fill("#fb5607")
ellipse(300, 200, 150, 200)
fill("#8338ec")
triangle(200, 250, 80, 300, 360, 250)
text("rectangle", 750, 550)
fill("#ffbe0b")
rect(650, 600, 600, 100)
fill("#3a86ff")
ellipse(675, 650, 400, 100, 6)

}