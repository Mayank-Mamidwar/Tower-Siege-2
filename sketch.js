const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine, userWorld;

var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block23, block24, block25, block26;
var polygon;
var slingShot;
var polygon_Img;

function preload() {
    polygon_Img = loadImage("polygon.png");

}

function setup() {
    var canvas = createCanvas(1200, 730);

    userEngine = Engine.create();
    userWorld = userEngine.world;

    //polygon holder of the sling
    polygon = Bodies.circle(50, 400, 20);
    fill("yellow");
    World.add(userWorld, polygon)



    slingShot = new SlingShot(this.polygon, { x: 200, y: 400 });



    //level 1
    stand1 = new Ground(600, 550, 250, 15);

    block1 = new Box(530, 435, 30, 40);
    block2 = new Box(560, 435, 30, 40);
    block3 = new Box(590, 435, 30, 40);
    block4 = new Box(620, 435, 30, 40);
    block5 = new Box(650, 435, 30, 40);

    block6 = new Box(560, 395, 30, 40);
    block7 = new Box(590, 395, 30, 40);
    block8 = new Box(620, 395, 30, 40);

    block9 = new Box(590, 355, 30, 40);


    //level 2
    stand2 = new Ground(950, 335, 350, 15);

    block10 = new Box(860, 235, 30, 40);
    block11 = new Box(890, 235, 30, 40);
    block12 = new Box(920, 235, 30, 40);
    block13 = new Box(950, 235, 30, 40);
    block14 = new Box(980, 235, 30, 40);
    block15 = new Box(1010, 235, 30, 40);
    block16 = new Box(1040, 235, 30, 40);

    block17 = new Box(890, 195, 30, 40);
    block18 = new Box(920, 195, 30, 40);
    block19 = new Box(950, 195, 30, 40);
    block20 = new Box(980, 195, 30, 40);
    block21 = new Box(1010, 195, 30, 40);

    block22 = new Box(920, 155, 30, 40);
    block23 = new Box(950, 155, 30, 40);
    block24 = new Box(980, 155, 30, 40);

    block25 = new Box(950, 115, 30, 40);







}


function draw() {
    background(225);
    Engine.update(userEngine);

    imageMode(CENTER);
    
    image(polygon_Img, polygon.position.x, polygon.position.y, 50, 50);



    slingShot.display();

    //level 1 display
    stand1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();


    //level 2 display
    stand2.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();
}


//function triggered when a mouse is clicked and dragged
function mouseDragged() {
    if (slingShot.sling.bodyA == polygon) {
        Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
    }
}

//function triggered when a clicked mouse is released
function mouseReleased() {
    //function call to detach(release) a body from constraint (this.sling.bodyA)
    slingShot.fly();
}

//function triggered when a key on keyboard is pressed
function keyPressed() {
    if (keyCode == 32) {
        //function call to attach a body to constraint (this.sling.bodyA)
        slingShot.attach(polygon);
    }
}

