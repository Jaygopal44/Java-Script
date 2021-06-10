var ages = [1,2,3,4,11,15];
// var ages = [12,13,14,15];

document.write(ages + "<br><br>");

var b = ages.find(checkAdult);
// var b = ages.findIndex(checkAdult);
document.write(b + "<br><br>");

function checkAdult(age) {
     return age >=10;
}