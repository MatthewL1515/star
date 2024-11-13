let bg
let starFill

function setup() {
  createCanvas(400, 400)
  changeBGColor()
  starFill = randomColor() 
  fill(starFill)
  noStroke() 
}

function draw() {
  background(bg) 
  // Task 2: create an object, and an accompanying function, that allows for 
  //   "breathing a variable" (having it fluctuate within a given range by
  //   a given step). 
  // Alternate Task 2: implement breathing of the inner and outer radii
  //   through the use of trigonometric functions (like sin or cos). Remember 
  //   that these functions, by default, are in radians [0,TWO_PI]
  drawStar()
}

// Task 1: parameterize this function for inner and outer radii and number of sides
function drawStar( mx = width/2, my = height/2 ) {
  let numberOfSides = 7
  let numberOfPoints = numberOfSides * 2
  let ir = 50
  let or = 100
  let theta = 0
  let dt = TWO_PI/numberOfPoints

  beginShape()
  for( let i = 0; i < numberOfPoints; i++ ) {
    if( i % 2 === 0 ) {
      vertex( mx + ir*cos(theta + dt * i), my + ir*sin(theta + dt * i ) )
    } else {
      vertex( mx + or*cos(theta + dt * i), my + or*sin(theta + dt * i ) )
    }
  } 
  endShape()
}

function randomColor(avenues=true) {
  if( avenues ) {
    return color(randomAvenuesColor())
  } else {
    return color(random(255),random(255),random(255))
  }

}

function changeBGColor(avenues=true) {
  bg = randomColor(avenues)
}

function keyPressed() {
  if( key === 'b' ) {
    changeBGColor()
  }
}

// Hex Codes for the Official Avenues Colors 
const colors = { // const instead of let
  white: "#ffffff",
  black: "#000000",
  ash: "#B7B09C", 
  ochre: "#D3AE6F",
  indigo: "#3D68B2",
  moss: "#267355",
  pristineBlue: "#44C3D4",
  violet: "#9796C9",
  nimbus: "#CAC3BC",
  pistachio: "#C5D982",
  olive: "#8A916A",
  terracotta: "#C17E60",
  gold: "#F5CD64",
  clay: "#C3411E",
  grass: "#0D9A48",
  navy: "#273879"
}

function randomAvenuesColor() {
  return random(Object.values(colors))
}