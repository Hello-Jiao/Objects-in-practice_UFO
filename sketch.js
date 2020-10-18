//Topic 1.1 
//Object orientation revisted
//part one
var flying_saucer;
var flying_saucers;

function setup()
{
    createCanvas(800,600);
    noStroke();

    
    flying_saucers = [];

    for(var i = 0; i < 5; i++)
    {
        flying_saucers.push(new Flying_saucer(100 + i * 150,100));
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    for ( var i = 0; i < flying_saucers.length; i++)
    {
        flying_saucers[i].draw();
        flying_saucers[i].hover();
    }
}

// function keyPressed()
// {
//     flying_saucer.beam_on = true;
// }

// function keyReleased()
// {
//     flying_saucer.beam_on = false;
// }

function Flying_saucer (x,y) {
    this.x = x;
    this.y = y;
    this.width = random(150,250);
    this.height = random(75,125);  
    this.window_width = random(0.5, 0.85);
    this.window_height = random(0.75, 1);
    this.base_height = random(0.25, 0.5);
    this.num_lights = round(random(10,20));
    this.brightnesses =[];
    this.beam_on = false;

this.hover = function()
{
    this.x += random(-1,1);
    this.y += random(-1,1);

    if(this.beamOn && random() > 0.996)
    {
        this.beamOn = false;
    }
    else if(!this.beamOn && random() > 0.99)
    {
        this.beamOn = true;
    }
},

this.beam = function()
{



    fill(255,255,0,120);

    if(random() > 0.2)
    {
    beginShape();
    vertex(this.x - this.width * 0.25, this.y );
    vertex(this.x + this.width * 0.25, this.y );
    vertex(this.x + this.width * 0.55, height - 100 );
    vertex(this.x - this.width * 0.55, height - 100 );
    endShape();
    }
},

this.draw = function()
{

    if(this.beamOn)
    {
        this.beam();
    }

    //draw the flying saucer
    fill(175,238,238);
    arc(
        this.x,
        this.y,
        this.width * this.window_width,
        this.height * this.window_height,
        PI,TWO_PI);
    fill(150);
    arc(
        this.x,
        this.y,
        this.width,
        this.height/2,
        PI,TWO_PI);
    fill(50);
    arc(
        this.x,
        this.y,
        this.width,
        this.height * this.base_height,
        0,PI);
        
    
     //draw the lights
    var incr = this.width/(this.num_lights -1);

    for(var i = 0; i < this.num_lights; i++){
        
        var x = this.x - this.width/2 + i * incr;
        fill(this.brightnesses[i]);
        ellipse(
            x,
            this.y,
            5,
            5
        )
        this.brightnesses[i] += 2;
        if(this.brightnesses[i] > 255)
        {
            this.brightnesses[i] = 100;
        }
    }
}


for(var i = 0; i < this.num_lights; i++){
    this.brightnesses.push((i * 20)%255);
    }
}

