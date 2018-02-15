function NormalBlock(x,y) {
    this.x = x;
    this.y = y;
    this.toDelete = false;
    
    this.del = function() {
        this.toDelete = true;
    }
    
    this.show = function() {
        fill(255);
        rect(this.x, this.y, 100, 25);
    }
}

function DoubleBlock(x,y,n) {
    
    if (!n)
        n = 4;
    
    this.x = x;
    this.y = y;
    this.hitOnce = false;
    this.toDelete = false;
    this.hits = n;
    
    this.del = function() {
        this.toDelete = true;
    }
    
    this.update = function() {
        if(b.hitsUpD(this) || b.hitsDownD(this)) {
            this.hitOnce = true;
            this.hits = this.hits -1;
            console.log("update ", this.n );
            if (this.hits == 0)
                this.del();
        } 
    }
    
    this.show = function() {
        if (this.hits == 1){
            console.log (1);
        }
        if(this.hits > 0) {
            fill(255 - this.hits * 40, 0, 0);
        }
        
        rect(this.x, this.y, 100, 25);
    }
}

function LengthBlock(x, y) {
    this.x = x;
    this.y = y;
    this.toDelete = false;
    
    this.del = function() {
        this.toDelete = true;
    }
    
    this.show = function() {
        fill(255);
        rect(this.x, this.y, 100, 25);
    }
}