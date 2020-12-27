
const status = document.querySelector('.status');
const reset = document.querySelector('.reset');
const cells = document.querySelectorAll('.game-cell');

let game_is_live = true;
let x_is_next = true;
let winner = null;

const handle_win = function(letter) {
    game_is_live = false;
    winner = letter;

    status.innerHTML = `${winner} has won`;
}

const check_game_status = function() {
    const top_left = cells[0].classList[2];
    const top_middle = cells[1].classList[2];
    const top_right = cells[2].classList[2];
    const middle_left = cells[3].classList[2];
    const middle_middle = cells[4].classList[2];
    const middle_right = cells[5].classList[2];
    const bottom_left = cells[6].classList[2];
    const bottom_middle = cells[7].classList[2];
    const bottom_right = cells[8].classList[2];

    if (top_left && top_left===top_middle && top_left===top_right) {
        handle_win(top_left);
    }
    else if (middle_left && middle_left===middle_middle && middle_left===middle_right) {
        handle_win(middle_left);
    }
    else if (bottom_left && bottom_left===bottom_middle && bottom_left===bottom_right) {
        handle_win(bottom_left);
    }
    else if (top_left && top_left===middle_left && top_left===bottom_left) {
        handle_win(top_left);
    }
    else if (top_middle && top_middle===middle_middle && top_middle===bottom_middle) {
        handle_win(top_middle);
    }
    else if (top_right && top_right===middle_right && top_right===bottom_right) {
        handle_win(top_right);
    }
    else if (top_left && top_left===middle_middle && top_left===bottom_right) {
        handle_win(top_left);
    }
    else if (top_right && top_right===middle_middle && top_right===bottom_left) {
        handle_win(top_right);
    }
    else if (top_left && top_middle && top_right && middle_left && middle_middle && middle_right && bottom_left && bottom_middle && bottom_right) {
        game_is_live = false;
        status.innerHTML = `Game is tied`;
    }
    else {
        x_is_next = !x_is_next;
        if (x_is_next) {
            status.innerHTML = `X is next`;
        }
        else {
            status.innerHTML = `O Is next`;
        }
    }
};

const handle_reset = function(e) {
    x_is_next = true;
    status.innerHTML = `X is next`;
    for (const cell of cells) {
        cell.classList.remove('x');
        cell.classList.remove('o');
    };
    winner = null;
};

const handle_cell_click = function(e) {
    const class_list = e.target.classList;

    if (class_list[2] === 'x' || class_list[2] === 'o') {
        return;
    }
    
    if (x_is_next) {
        class_list.add('x');
        check_game_status();
    }
    else {
        class_list.add('o');
        check_game_status();
    }
};

reset.addEventListener('click', handle_reset);

for(const cell of cells) {
    cell.addEventListener('click', handle_cell_click);
};