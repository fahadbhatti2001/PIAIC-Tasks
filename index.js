//Task 2
let personName = "Fahad Bhatti"
document.querySelector("#task2").innerHTML = personName

//Task 3
document.querySelector("#task3-1").innerHTML = personName.toUpperCase()
document.querySelector("#task3-2").innerHTML = personName.toLowerCase()
let task3 = personName.toLowerCase().split(' ')
for(let i = 0; i<task3.length; i++){
    task3[i] = task3[i].charAt(0).toUpperCase() + task3[i].slice(1)
}
task3 = task3.join(' ')
document.querySelector("#task3-3").innerHTML = task3

//Task 4
let authorName = "Laddan Jaffri"
let quote = "Me ni batao ga"
document.querySelector("#task4").innerHTML = authorName + " once said " + "\"" + quote + "\""

//Task 5
let famous_person = "Laddan Jaffri"
let message = "Me ni batao ga"
document.querySelector("#task5").innerHTML = famous_person + " once said " + "\"" + message + "\""

//Task 6
var personNameSpace = "            Fahad ";
document.querySelector("#task6-1").innerHTML = personNameSpace
document.querySelector("#task6-2").innerHTML = "\t" + personNameSpace + "\n"
document.querySelector("#task6-3").innerHTML =  personNameSpace + "\t"  + "\n"  + "<br>";

//Task 7
document.querySelector("#task7-1").innerHTML = 1 + 2
document.querySelector("#task7-2").innerHTML = 2 - 1
document.querySelector("#task7-3").innerHTML = 2 * 2
document.querySelector("#task7-4").innerHTML = 4 / 2

//Task 8
console.log(1 + 2);
console.log(2 - 1);
console.log(2 * 2);
console.log(4 / 2);

//Task 9
var favNumber = 7;
var display = ("My Favourite Number is " + favNumber);
document.querySelector("#task9").innerHTML = display;