var copy = "&copy;";
var author = " nixton.dev ";

function getCopy(year){
  
document.write(copy);
document.write(author);
document.write(year, ' - ');
document.write(new Date().getFullYear());
  
}

function getLast() {

const birthday = 1997;
const currentYear = new Date().getFullYear();
const age = currentYear - birthday;
const lifeEnd = 100;
const yearsLeft = lifeEnd - age;

document.getElementById("end").textContent = "" + yearsLeft;
}

getLast();

function getAge(birthDate) {

const today = new Date();
const birth = new Date(birthDate);
let age = today.getFullYear() - birth.getFullYear();

if (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())) {
age--;
}

return age;

}

window.onload = () => document.getElementById("start").textContent = "" + getAge("1997-02-13");
