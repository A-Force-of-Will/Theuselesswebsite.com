// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
        world = engine.world;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1920,
        height: 900
    }
});


//tower
var boxA = Bodies.rectangle(400, 400, 100, 95);
var boxB = Bodies.rectangle(400, 300, 100, 95);
var boxC = Bodies.rectangle(400, 200, 100, 95);
var boxD = Bodies.rectangle(400, 100, 100, 95);

//house1
var house1B = Bodies.rectangle(700, 600, 50, 50);
var house1C = Bodies.trapezoid(700, 550, 60, 50, 1);

//house 2
var house2B = Bodies.rectangle(800, 600, 50, 50);
var house2C = Bodies.trapezoid(800, 550, 60, 50, 1);

//house 3
var house3B = Bodies.rectangle(900, 600, 50, 50);
var house3C = Bodies.trapezoid(900, 550, 60, 50, 1);

//house 4
var house4B = Bodies.rectangle(1000, 600, 50, 50);
var house4C = Bodies.trapezoid(1000, 550, 60, 50, 1);

//house 5
var house5B = Bodies.rectangle(1100, 600, 50, 50);
var house5C = Bodies.trapezoid(1100, 550, 60, 50, 1);

//house 6
var house6B = Bodies.rectangle(1200, 600, 50, 50);
var house6C = Bodies.trapezoid(1200, 550, 60, 50, 1);

//hill
var hill = Bodies.trapezoid(1600, 300, 600, 200, .7);

//mansion
var mansionA = Bodies.rectangle(1600, 200, 50, 50);
var mansionB = Bodies.rectangle(1650, 200, 50, 50);
var mansionC = Bodies.rectangle(1550, 200, 50, 50);
//floor 2
var mansionD = Bodies.rectangle(1600, 150, 50, 50);
var mansionE = Bodies.rectangle(1650, 150, 50, 50);
var mansionF = Bodies.rectangle(1550, 150, 50, 50);
//floor 3
var mansionG = Bodies.rectangle(1600, 100, 50, 50);
var mansionH = Bodies.rectangle(1650, 100, 50, 50);
var mansionI = Bodies.rectangle(1550, 100, 50, 50);

//roof
var mansionRoof = Bodies.trapezoid(1600, 50, 200, 50, .6);

//ground
var ground = Bodies.rectangle(960, 800, 1920, 60, { isStatic: true });
var quakePlane = Bodies.rectangle(960, 770, 1920, 10);

//boundaries
var wall1 = Bodies.rectangle(-10, 540, 20, 1080, {isStatic: true}),
    wall2 = Bodies.rectangle(1930, 540, 20, 1080, {isStatic: true});


// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, boxD, house1B, house1C, house2B, house2C, house3B, house3C, house4B, house4C, house5B, house5C, house6B, house6C, hill, mansionA, mansionB, mansionC, mansionD, mansionE, mansionF, mansionG, mansionH, mansionI, mansionRoof, ground, quakePlane, wall1, wall2]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

window.onclick = function()
{
    Matter.Body.applyForce(this.quakePlane, {x: this.quakePlane.position.x, y: this.quakePlane.position.y }, {x: 0, y: 0.8});

    // this.console.log(array.length);
    // this.console.log(array);
    
    // for (var i = 0; i < array.length; i++) {
    //     const element = array[i];
        
    //     this.console.log("Register");
    // }
    
}