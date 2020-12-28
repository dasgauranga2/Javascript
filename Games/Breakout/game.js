
const cvs = document.getElementById('breakout');
const ctx = cvs.getContext('2d');

cvs.style.border = "1px solid black";

const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;
const RADIUS = 8;
let LIFE = 3;
let SCORE = 0;

// background image
const BG_IMG = new Image();
BG_IMG.src = "img/bg.jpg"

let left_arrow = false;
let right_arrow = false;
// object representing the paddle
const paddle = {
    x : cvs.width/2 - PADDLE_WIDTH/2,
    y : cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
    width : PADDLE_WIDTH,
    height : PADDLE_HEIGHT,
    dx : 5
};
// object representing the ball
const ball = {
    x : cvs.width/2,
    y : paddle.y - RADIUS,
    radius : RADIUS,
    speed : 4,
    dx : 3,
    dy : -3
};
// object representing each brick
const brick = {
    row : 3,
    column : 5,
    width : 55,
    height : 20,
    offset_left : 20,
    offset_top : 20,
    margin_top : 40,
    fill_color : "black"
};

// detect left/right arrow key press
// when key is pressed down start changing the ball's position
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        console.log("HELLO");
        left_arrow = true;
    }
    else if (event.code == "ArrowRight") {
        right_arrow = true;
    }
});
// detect left/right arrow key press
// when key is no longer pressed down stop changing the ball's position
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowLeft") {
        left_arrow = false;
    }
    else if (event.code == "ArrowRight") {
        right_arrow = false;
    }
});

// move paddle 
function move_paddle() {
    if (right_arrow && paddle.x+paddle.width < cvs.width) {
        paddle.x = paddle.x+paddle.dx;
    }
    else if (left_arrow && paddle.x > 0) {
        paddle.x = paddle.x-paddle.dx;
    }
}
// draw tha paddle
function draw_paddle() {
    ctx.fillStyle = "red";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}
// draw the ball
function draw_ball() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function move_ball() {
    ball.x = ball.x+ball.dx;
    ball.y = ball.y+ball.dy;
}
// detect collision between ball and wall
function ball_wall_collide() {
    if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
    // if ball collides with the bottom wall boundary reset the ball
    if (ball.y + ball.radius > cvs.height) {
        LIFE--;
        reset_ball();
    }
}
// detect collision between ball and paddle
function ball_paddle_collide() {
    if (ball.x < paddle.x+paddle.width && ball.x > paddle.x && ball.y < paddle.y+paddle.height && ball.y > paddle.y) {
        
        let collide_point = ball.x - (paddle.x + paddle.width/2);
        collide_point = collide_point/(paddle.width/2);

        let angle = collide_point * Math.PI/3;
        
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = -ball.speed * Math.cos(angle);
    }
}
// reset the ball's position
function reset_ball() {
    ball.x = cvs.width/2;
    ball.y = paddle.y - RADIUS;
    ball.dx = 3;
    ball.dy = -3;
}

// array holding the brick properties
let bricks = [];
// create the bricks
function create_bricks() {
    for (let r=0; r<brick.row; r++) {
        bricks[r] = [];
        for (let c=0; c<brick.column; c++) {
            bricks[r][c] = {
                x : c*(brick.offset_left+brick.width) + brick.offset_left,
                y : r*(brick.offset_top+brick.height) + brick.offset_top + brick.margin_top,
                status : true
            }
        }
    }
}
create_bricks();

// draw the bricks
function draw_bricks() {
    for (let r=0; r<brick.row; r++) {
        for (let c=0; c<brick.column; c++) {
            let b = bricks[r][c];
            if (b.status) {
                ctx.fillStyle = brick.fill_color;
                ctx.fillRect(b.x,b.y,brick.width,brick.height);
            }
        }
    }
}
// detect collision betwenn ball and brick
function ball_brick_collide() {
    for (let r=0; r<brick.row; r++) {
        for (let c=0; c<brick.column; c++) {
            let b = bricks[r][c];
            if (b.status) {
                if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height) {
                    ball.dy = -ball.dy;
                    b.status = false;
                    SCORE++;
                }
            }
        }
    }
}
// show the score
function show_score(x,y) {
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText(SCORE,x,y);
}
// draw all the objects
function draw() {
    draw_paddle();
    draw_ball();
    draw_bricks();
    show_score(35,25);
}
// update all object properties
function update() {
    move_paddle();
    move_ball();
    ball_wall_collide();
    ball_paddle_collide();
    ball_brick_collide();
}
// run the game loop
function loop() {
    ctx.drawImage(BG_IMG,0,0);
    draw();
    update();
    requestAnimationFrame(loop);
}

loop();
