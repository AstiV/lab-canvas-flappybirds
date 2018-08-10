function Faby(width, height) {
    this.width = width;
    this.height = height;
    // this.speedX = speedX;
    // this.speedY = speedY;
    // this.gravity = gravity;
    // this.gravitySpeed = gravitySpeed;
}

Faby.prototype.draw = function() {
    // Set Faby image
    ctx.save();
    var img = new Image(); // Create new img element
    img.src = "./images/flappy.png"; // Set source path
    ctx.restore();
};

Faby.prototype.update = function() {
    // TODO
};

Faby.prototype.newPos = function() {
    // TODO
};
