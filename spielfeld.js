var p;
var b;
var nBlock = [];
var dBlock = [];
var lBlock = [];
var lUpgrade = [];
var fullRows = 0;

function setup() {
    createCanvas(1100, 900);
    
    p = new Plate();
    b = new Ball();
    
    for(var i = 0; i < 2; i++) {
        lBlock[i] = new LengthBlock(i*300+350, 125);
    }
    
    for(var i = 0; i < 16; i++) {
        nBlock[i] = new NormalBlock(i*100-650, 50);
    }
    
    for(var i = 0; i < 8; i++) {
        dBlock[i] = new DoubleBlock(i*100+150, 75,2);   
    }
    
    for(var i = 0; i < 8; i++) {
        nBlock[i] = new NormalBlock(i*100+150, 100);
    }
    
    for(var i = 0; i < 2; i++) {
        lUpgrade[i] = new LengthUpgrade(i*300+390, 125);
    }
}


function draw() {
    background(51);
    
    p.show();
    p.update();
    
    b.show();
    b.update();
    
    
    for(var i = 0; i < nBlock.length; i++) {
        nBlock[i].show();
    }
    
    for(var i = 0; i < nBlock.length; i++) {
        if(b.hitsDownN(nBlock[i]) && yBackwards === false) {
            yBackwards = true;
            nBlock[i].del();
            console.log("setTrueNblock");
        }
        if(b.hitsUpN(nBlock[i]) && yBackwards === true) {
            yBackwards = false;
            nBlock[i].del();
            console.log("setFalseNblock");
        }
        if(nBlock[i].toDelete) {
            nBlock.splice(i, 1);
        }
    }
    
    
    
    for(var i = 0; i < dBlock.length; i++) {
        dBlock[i].show();
    }
    
    for(var i = 0; i < dBlock.length; i++) {
        if(b.hitsDownD(dBlock[i]) && yBackwards === false) {
            yBackwards = true;
            dBlock[i].update();
        }
        if(dBlock[i].hits === 0 && b.hitsDownD(dBlock[i]) && yBackwards === false) {
                yBackwards = true;
                dBlock[i].del();
        }
        if(b.hitsUpD(dBlock[i]) && yBackwards === true) {
            yBackwards = false;
            dBlock[i].update();
            console.log("setFalseDblock");
        }
        if(dBlock[i].hits === 0 && b.hitsUpD(dBlock[i]) && yBackwards === true) {
                dBlock[i].del();
                yBackwards = false;
                console.log("setFalseDblock");
        }
        if(dBlock[i].toDelete) {
            dBlock.splice(i, 1);
            console.log(dBlock[i]);
        }
    }
    
    for(var i = 0; i < lBlock.length; i++) {
        lBlock[i].show();
    }
    
    for(var i = 0; i < lBlock.length; i++) {
        if(b.hitsUpL(lBlock[i]) && yBackwards === true) {
            yBackwards = false;
            lBlock[i].del();
        }
        if(lBlock[i].toDelete) {
            lBlock.splice(i, 1);
            for(var i = 0; i < lUpgrade.length; i++) {
                if(lBlock[i] === lUpgrade[i]) {
                    lUpgrade[i].show();
                }
            }
        }
    }

    line(150, 50, 950, 50);
    line(150, 50, 150, 400);
    line(150, 400, 950, 400);
    line(950, 50, 950, 400);
}