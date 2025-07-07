console.log("Even Numbers")


function filter(){
const input = document.getElementById("input").value;
const numbers = input.split(',').map(Number)
const even = numbers.filter(num => num % 2 === 0);
console.log(even)
document.getElementById("output").innerText=`Even number : ${even}`
}