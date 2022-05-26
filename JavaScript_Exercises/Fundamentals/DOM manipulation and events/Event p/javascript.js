const body = document.body;
const title = document.querySelector(".title");
let bg_color = true;

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

function target_name(e) {
    console.log(e.target);
}

function change_bg_color() {
    if(bg_color === true){
        body.style.background = 'blue';
        title.style.color = 'white';
        bg_color = false;
    } else {
        body.style.background = 'white';
        title.style.color = 'black';
        bg_color = true;
    }
}

btn.addEventListener('click', change_bg_color);