import { Person, Student } from "./person.js";
// Function to print on web page instead of console
function showOutput(message) {
    const outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.textContent += message + "\n";
    }
}
const person1 = new Person("Alice", 30, "Wonderland University");
showOutput(person1.greet());
showOutput(`Person ID: ${person1.showId()}`);
showOutput("---------------------------");
showOutput(`Person Counter: ${Person.counter}`);
const student1 = new Student("Bob", 20, "Builder Institute", ["JavaScript", "TypeScript"]);
showOutput(student1.getStudentDetails());
student1.addSkill("React");
showOutput("After adding new skill:");
showOutput(student1.getStudentDetails());
showOutput(`Student ID: ${student1.showId()}`);
showOutput("---------------------------");
showOutput(`Person Counter after creating Student: ${Person.counter}`);
