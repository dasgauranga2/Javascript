
const cvs = document.getElementById('pong');
const ctx = cvs.getContext('2d');

// user object
// this is the player we are going to play as
// we will move the user player using the mouse
const user = {
    x : 0,
    y : cvs.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}
// com object
// this is the computer player
// it will automatically move
const com = {
    x : cvs.width - 10,
    y : cvs.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}
// ball object
const ball = {
    x : cvs.width/2,
    y : cvs.height/2,
    radius : 10,
    velocity_x : 5,
    velocity_y : 5,
    color : "WHITE"
}

// function to draw a rectangle
function draw_rect(x,y,w,h,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

// function to draw a circle
function draw_circle(x,y,r,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}

// function to display text
function draw_text(text,x,y,color) {
    ctx.fillStyle = color;
    ctx.font = "40px fantasy";
    ctx.fillText(text,x,y);
}

// draw_rect(0,0,cvs.width,cvs.height, "BLACK");

// draw_circle(100,100,50,"WHITE");

// draw_text("Something", 300,200,"WHITE");

// draw the different objects on the screen
function render() {
    
    draw_rect(0,0,cvs.width, cvs.height, "BLACK");

    draw_text(user.score,cvs.width/4,cvs.height/5,"WHITE");
    draw_text(com.score,3*cvs.width/4,cvs.height/5,"WHITE");

    draw_rect(user.x,user.y,user.width,user.height,user.color);
    draw_rect(com.x,com.y,com.width,com.height,com.color);

    draw_circle(ball.x,ball.y,ball.radius,ball.color);
}


function move_player(event) {
    let rect = cvs.getBoundingClientRect();

    user.y = event.clientY - rect.top - user.height/2;
}
// user moves when the mouse is moved
// adding an event listener to detect mouse movement and move the user
cvs.addEventListener('mousemove' ,move_player);


// detect collision between user/com and ball
function collision(b,p) {
    b.top = b.y-b.radius;
    b.bottom = b.y+b.radius;
    b.left = b.x-b.radius;
    b.right = b.x+b.radius;

    p.top = p.y;
    p.bottom = p.y+p.height;
    p.left = p.x;
    p.right = p.x+p.width;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
}

// reset the ball properties 
// after ball has hit the left/right boundary
function reset_ball() {
    ball.x = cvs.width/2;
    ball.y = cvs.height/2;

    ball.velocity_x = 5;
}

// update the game
function update() {
    // move the ball
    ball.x = ball.x+ball.velocity_x;
    ball.y = ball.y+ball.velocity_y;

    // move the com player automatically
    com.y = com.y + (ball.y - (com.y + com.height/2))*0.1;

    // detect if ball has hit the top/bottom boundary
    if (ball.y+ball.radius > cvs.height || ball.y-ball.radius < 0) {
        ball.velocity_y = -ball.velocity_y;
    }

    let player = (ball.x < cvs.width/2) ? user : com;
    // detect if player/com has collided with ball
    if (collision(ball,player)) {
        ball.velocity_x = -ball.velocity_x*1.15;
    }

    // detect if ball has hit the left/right boundary
    if (ball.x - ball.radius < 0) {
        com.score++;
        reset_ball();
    }
    else if (ball.x + ball.radius > cvs.width) {
        user.score++;
        reset_ball();
    }
}

function game() {
    // update the properties of all the objects
    update();
    // display all the objects on the screen
    render();
}

// call the 'game' function every 20ms
setInterval(game,20);