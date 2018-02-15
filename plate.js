var pSclX = 100;
var pSclY = 20;

function Plate() {
    this.x = 0;
    this.y = 800;
    this.xspeed = 0.25;
    
    this.update = function() {
        if(keyIsDown(RIGHT_ARROW))
            this.x = this.x + this.xspeed * pSclX;
            this.x = constrain(this.x, 0, width - pSclX);
        if(keyIsDown(LEFT_ARROW))
            this.x = this.x - this.xspeed * pSclX;
            this.x = constrain(this.x, 0, width - pSclX);
    }
    
    this.show = function() {
        fill(255);
        rect(this.x, this.y, pSclX, pSclY);
    }
}