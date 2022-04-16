console.log(23+97);
let a = 3, b = 5, c = 10, d = 13, e = 2, f =4;
g = a+b+c+d+e+f;

console.log(g);

console.log((4+6+9)/77);

a = 10;
console.log(a);
9 * a;
let h = 7 * a;
console.log(h);

max = 57;
actual = max -13;
percentage = actual/max

let message;
message = 'Hello!';

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);

alert(message); // shows the variable content

function random(number) {
    return Math.floor(Math.random()*number);
  }

function draw(size_width, size_height) {
    ctx.clearRect(0,0,size_width,size_height);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(size_width), random(size_height), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
draw (400, 200);