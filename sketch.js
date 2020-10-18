//Topic 1.1 
//Object orientation revisted
//part one
var flying_saucer;

function setup()
{
    createCanvas(800,600);
    noStroke();

    flying_saucer = new Flying_saucer;
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    
    if(flying_saucer.beam_on == true)
    {
        flying_saucer.beam();
    }

    flying_saucer.draw();
    flying_saucer.hover();
}

function keyPressed()
{
    flying_saucer.beam_on = true;
}

function keyReleased()
{
    flying_saucer.beam_on = false;
}

function Flying_saucer () {
    this.x = 200;
    this.y = 100;
    this.width = 150;
    this.height = 50;  
    this.window_width = 0.75;
    this.window_height = 0.85;
    this.base_height = 0.45;
    this.num_lights = 10;
    this.brightnesses =[];
    this.beam_on = false;

this.hover = function()
{
    this.x += random(-1,1);
    this.y += random(-1,1);
},

this.draw = function()
{
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
    endShape(CLOSE);
    }
}
for(var i = 0; i < this.num_lights; i++){
    this.brightnesses.push((i * 20)%255);
    }
}

