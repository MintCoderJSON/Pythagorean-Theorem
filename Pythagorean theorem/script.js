
let a;
let b;
let c;


a = window.prompt("Cathetus A");
a = Number(a);

b = window.prompt("Cathetus B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c= Math.sqrt(c);

console.log("Hypotenuse:", c);