var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {}

    var faby = new Faby(100, 200);
    faby.draw();

    // parameters (width, height, speedX, speedY, gravity, gravitySpeed)

    //-------------------------------------------------------
    // animated background image
    //-------------------------------------------------------

    // Set background image
    var img = new Image(); // Create new img element
    img.src = "./images/bg.png"; // Set source path
    ctx.drawImage(img, 0, 0, 700, 500);

    // animate background image by infinite loop
    // https://codepen.io/ironhack/pen/ZvmmGP?editors=0010#0
    var backgroundImage = {
        img: img,
        x: 0,
        speed: -1,

        move: function() {
            this.x += this.speed;
            this.x %= canvas.width;
        },

        draw: function() {
            ctx.drawImage(this.img, this.x, 0);
            if (this.speed < 0) {
                ctx.drawImage(this.img, this.x + canvas.width, 0);
            } else {
                ctx.drawImage(this.img, this.x - this.img.width, 0);
            }
        }
    };

    function updateCanvas() {
        backgroundImage.move();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        backgroundImage.draw();

        requestAnimationFrame(updateCanvas);
    }

    // start calling updateCanvas once the image is loaded
    img.onload = updateCanvas;
};
