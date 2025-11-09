import { Person, Student } from "./person.js";
// Function to print messages neatly on the web page
function showOutput(message) {
    const outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.innerHTML += message + "<br>";
    }
}
// Create a Person instance
const person1 = new Person("Alice", 30, "Wonderland University");
showOutput(`<strong>${person1.greet()}</strong>`);
showOutput(`Person ID: ${person1.showId()}`);
showOutput("<hr>");
showOutput(`Person Counter: ${Person.counter}`);
// Create a Student instance
const student1 = new Student("Bob", 20, "Builder Institute", ["JavaScript", "TypeScript"]);
showOutput(`<strong>${student1.getStudentDetails()}</strong>`);
student1.addSkill("React");
showOutput("<em>After adding new skill:</em>");
showOutput(student1.getStudentDetails());
showOutput(`Student ID: ${student1.showId()}`);
showOutput("<hr>");
showOutput(`Person Counter: ${Person.counter}`);
