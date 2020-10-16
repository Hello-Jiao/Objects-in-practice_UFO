//Topic 1.1 
//Object orientation revisted
//part one

function setup()
{
    createCanvas(800,600);
    noStroke();



    flying_saucer = {
        x: 400,
        y: 150,
        width: 150,
        height: 50,
        num_lights: 10,
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    fill(175,238,238);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width/2,
        flying_saucer.height * 2,
        PI,TWO_PI);
    fill(150);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height,
        PI,TWO_PI);
    fill(50);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height/2,
        0,PI);
    

    flying_saucer.x += random(-2,2);
    flying_saucer.x += random(-1,1);

    var incr = flying_saucer.width/(flying_saucer.num_lights -1);

    for(var i = 0; i < flying_saucer.num_lights; i++){
        fill(255);
        ellipse(flying_saucer.x - flying_saucer.width/2 + incr * i, flying_saucer.y, 5);
    }
}