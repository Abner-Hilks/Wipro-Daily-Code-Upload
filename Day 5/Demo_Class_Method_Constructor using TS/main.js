"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_js_1 = require("./person.js");
// Function to print messages neatly on the web page
function showOutput(message) {
    var outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.innerHTML += message + "<br>";
    }
}
// Create a Person instance
var person1 = new person_js_1.Person("Alice", 30, "Wonderland University");
showOutput("<strong>".concat(person1.greet(), "</strong>"));
showOutput("Person ID: ".concat(person1.showId()));
showOutput("<hr>");
showOutput("Person Counter: ".concat(person_js_1.Person.counter));
// Create a Student instance
var student1 = new person_js_1.Student("Bob", 20, "Builder Institute", ["JavaScript", "TypeScript"]);
showOutput("<strong>".concat(student1.getStudentDetails(), "</strong>"));
student1.addSkill("React");
showOutput("<em>After adding new skill:</em>");
showOutput(student1.getStudentDetails());
showOutput("Student ID: ".concat(student1.showId()));
showOutput("<hr>");
showOutput("Person Counter: ".concat(person_js_1.Person.counter));
