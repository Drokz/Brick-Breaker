function LengthUpgrade(x, y) {
    this.x = x;
    this.y = y;
    this.droped = false;
    
    this.drop = function () {
        this.droped = true;
    }
    this.show = function() {
        fill(255);
        rect(this.x, this.y, 20, 20);
    }
}