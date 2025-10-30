export class Person {
    constructor(name, age, institute) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    // ✅ Add this method
    greet() {
        return `Hello, my name is ${this.name}, and I study at ${this.institute}.`;
    }
    // ✅ Add this getter if not added already
    showId() {
        return this.id;
    }
}
Person.counter = 0;
//  Child class Student extending Person
export class Student extends Person {
    // Constructor for Student class which calls the parent constructor using super keyword
    constructor(name, age, institute, skills) {
        super(name, age, institute); // calling parent class constructor
        this.skills = skills;
    }
    // Method to get student details including skills and greeting from parent class
    getStudentDetails() {
        return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
    }
    // Method to add a new skill to the student's skill set
    addSkill(skill) {
        this.skills.push(skill); // pushing new skill to skills array
    }
    // A method to display protected age from parent class along with skills
    display() {
        console.log(`My age is ${this.showId()} years and my skills are: ${this.skills.join(", ")}.`);
    }
    // Overriding greet method from parent class
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}.
I have the following skills: ${this.skills.join(", ")}.`;
    }
} // Closing the Student class
//  Example usage:
const student = new Student("Arpit", 22, "VIT College", ["Java", "TypeScript"]);
student.addSkill("Spring Boot");
console.log(student.getStudentDetails());
student.display();
