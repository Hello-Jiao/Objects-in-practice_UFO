//Topic 1.1 
//Object orientation revisted
//part one
var flying_saucer;

function setup()
{
    createCanvas(800,600);
    noStroke();



    flying_saucer = {
        x: 400,
        y: 150,
        width: 150,
        height: 50,
        window_width: 0.75,
        window_height: 0.85,
        base_height: 0.45,
        num_lights: 10,
        brightnesses:[],

        hover: function()
        {
            console.log("hover");
            this.x += random(-1,1);
            this.y += random(-1,1);
        },

        beam: function()
        {
            fill(255,255,0,120);

            if(random() > 0.65)
            {
            beginShape();
            vertex(this.x - this.width * 0.25, this.y );
            vertex(this.x + this.width * 0.25, this.y );
            vertex(this.x + this.width * 0.55, height - 100 );
            vertex(this.x - this.width * 0.55, height - 100 );
            endShape(CLOSE);
        }
        }
    }

    for(var i = 0; i < flying_saucer.num_lights; i++){
        flying_saucer.brightnesses.push((i * 20)%255);
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    flying_saucer.beam();
    
    //draw the flying saucer
    fill(175,238,238);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width * flying_saucer.window_width,
        flying_saucer.height * flying_saucer.window_height,
        PI,TWO_PI);
    fill(150);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height/2,
        PI,TWO_PI);
    fill(50);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height * flying_saucer.base_height,
        0,PI);

        flying_saucer.hover();
        
    
     //draw the lights
    var incr = flying_saucer.width/(flying_saucer.num_lights -1);

    for(var i = 0; i < flying_saucer.num_lights; i++){
        
        var x = flying_saucer.x - flying_saucer.width/2 + i * incr;
        fill(flying_saucer.brightnesses[i]);
        ellipse(
            x,
            flying_saucer.y,
            5,
            5
        )
        flying_saucer.brightnesses[i] += 2;
        if(flying_saucer.brightnesses[i] > 255)
        {
            flying_saucer.brightnesses[i] = 100;
        }
    }


}