function setup() {
  createCanvas(600, 400);
}
// Variaveis bolinha
var x_bol = 300
var y_bol = 200
var d_bol = 20
var vx_bol = 5
var vy_bol = 2
var r_bol = d_bol / 2

// Variaveis Raquete
var x_raq = 5
var y_raq = 150
var w_raq = 10
var h_raq = 100

function draw() {
  background(0);
  
  mostra_bol()
  move_bol()
  colição_bol()
  
  mostra_raq()
  colisão_raq()
  
  move_raq()
  
}

function mostra_bol() {
  circle(x_bol, y_bol, d_bol)
}

function move_bol() {
  x_bol += vx_bol
  y_bol += vy_bol
}

function colição_bol() {
  if (x_bol + r_bol > width || x_bol - r_bol < 0) {
    vx_bol *= -1
  }
  
  if (y_bol + r_bol > height || y_bol - r_bol < 0) {
    vy_bol *= -1
  }
}

function mostra_raq() {
  rect(x_raq, y_raq, w_raq, h_raq)
}

function colisão_raq() {
  if (x_bol - r_bol <= x_raq + w_raq &&
      y_bol + r_bol < y_raq + h_raq &&
      y_bol - r_bol > y_raq) {
    vx_bol *= -1
  }
}

function move_raq() {
  if (keyIsDown(UP_ARROW) && y_raq >= 0)
    (y_raq -= 10);
  
  if (keyIsDown(DOWN_ARROW) && y_raq + h_raq < height)
    (y_raq += 10)
}