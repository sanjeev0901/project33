const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var bg;
var engine,world;

function preload(){
  bg=loadImage("snow1.jpg");
}

function setup() {
  var canvas=createCanvas(1000,1000);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(bg);
  //engine.update(engine);  
  drawSprites();
}