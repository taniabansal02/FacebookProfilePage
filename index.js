var name = "Tania";
console.log(name);
var num =10;
console.assert(num<10, "Num should be greater than 10");
var num1 = 20;
console.assert(num1 >=20, "Num1 should be greater than or equal to 20");
console.clear();
console.log("Hi");
for (let i = 0; i < 5; i++) {
    console.count("Count Number");
    console.log(i);
  }

  let num2 = 10, num3 = 0;
if (num3 !== 0) {
  console.log(num1 / num2);
}
else {
  console.error("divided by 0");
}

let n = 99999;

if (n > 10000) {
  console.warn("Number is too large");
}