// const number = prompt("enter the number")
// alert(number * number )

// const number = +prompt("enter the number");

// if (number < 0) {
//   alert("very cold");
// } else if (number >= 0 && number <= 10) {
//     alert("cold");
// } else if (number >10 && number <=20) {
//     alert("sunny")
// } else if (number >20 && number <=30) {
//     alert("warm")
// } else if (number>30 && number<=40) {
//     alert("hot")
// } else if (number>40){
//     alert ("very hot")
// } else {
//     alert('incorrect temperature')
// }

const age = prompt("enter your age");
switch (true) {
  case age > 0 && age <= 2:
    alert("infant");
    break;
  case age > 2 && age <= 10:
    alert("child");
    break;
  case age > 10 && age <= 20:
    alert("teenager");
    break;
  case age > 20 && age <= 30:
    alert("young");
    break;
    default:
        alert('incorrect age')
}
