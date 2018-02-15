var bSclX = 20;
var bSclY = 20;
var xBackwards = false;
var yBackwards = false;
var lostBalls = 0;

function Ball() {
    this.x = 50;
    this.y = 50;
    this.xspeed = 0.5;
    this.yspeed = 0.5;
    
    this.update = function() {
         if(xBackwards === false && yBackwards === false) {
             this.x = this.x + this.xspeed * bSclX;
             this.x = constrain(this.x, 0, width - bSclX);
             
             this.y = this.y + this.yspeed * bSclY;
         }
         if(xBackwards === false && yBackwards === true) {
             this.x = this.x + this.xspeed * bSclX;
             this.x = constrain(this.x, 0, width - bSclX);
             
             this.y = this.y - this.yspeed * bSclY;
         }
         if(xBackwards === true && yBackwards === false) {
             this.x = this.x - this.xspeed * bSclX;
             this.x = constrain(this.x, 0, width - bSclX);
             
             this.y = this.y + this.yspeed * bSclY;
         }
         if(xBackwards === true && yBackwards === true) {
             this.x = this.x - this.xspeed * bSclX;
             this.x = constrain(this.x, 0, width - bSclX);
             
             this.y = this.y - this.yspeed * bSclY;
         }
        
        if(this.x >= 1070) {
            xBackwards = true;
        }
        if(this.x <= 0) {
            xBackwards = false;
        }
        if(this.y >= 800 && this.y <= 810 && this.x >= p.x && this.x <= p.x + 100) {
            yBackwards = true;
        }
        if(this.y <= 0) {
            yBackwards = false;
        }
        
        if(this.y === 830) {
            lostBalls ++;
            $("#lostBalls").html(lostBalls);
        }
        if(this.y > 830 && keyIsDown(32)) {
            this.x = 50;
            this.y = 50;
        } 
    }
    
    this.hitsUpN = function(nBlock) {
        if(this.y - 20 === nBlock.y && this.x >=150 && this.x <= 950 && this.x >= nBlock.x && this.x <= nBlock.x + 100) {
            return true;
        } else {
            return false;
        }
    }
    
    this.hitsDownN = function(nBlock) {
        if(this.y + 20 === nBlock.y && this.x >=150 && this.x <= 950 && this.x >= nBlock.x && this.x <= nBlock.x + 100) {
            return true;
        } else {
            return false;
        }
    }
    
    this.hitsUpD = function(dBlock) {
        if(this.y - 15 === dBlock.y && this.x >=150 && this.x <= 950 && this.x >= dBlock.x && this.x <= dBlock.x + 100) {
            return true;
        } else {
            return false;
        }
    }
    
    this.hitsDownD = function(dBlock) {
        if(this.y + 5 === dBlock.y && this.x >=150 && this.x <= 950 && this.x >= dBlock.x && this.x <= dBlock.x + 100) {
            return true;
        } else {
            return false;
        }
    }
    
    this.hitsUpL = function(lBlock) {
        if(this.y - 5 === lBlock.y && this.x >= lBlock.x && this.x <= lBlock.x +100) {
            return true
        } else {
            return false;
        }
    }
    
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, bSclX, bSclY);
    }
}