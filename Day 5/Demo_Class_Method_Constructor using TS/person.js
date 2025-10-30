"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, institute) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, ", and I study at ").concat(this.institute, ".");
    };
    Person.prototype.showId = function () {
        return this.id;
    };
    Person.counter = 0;
    return Person;
}());
exports.Person = Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, institute, skills) {
        var _this = _super.call(this, name, age, institute) || this;
        _this.skills = skills;
        return _this;
    }
    // Overridden greet (does NOT include skills)
    Student.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old and I study at ").concat(this.institute, ".");
    };
    // Only adds skills once
    Student.prototype.getStudentDetails = function () {
        return "".concat(this.greet(), " I have the following skills: ").concat(this.skills.join(", "), ".");
    };
    Student.prototype.addSkill = function (skill) {
        this.skills.push(skill);
    };
    Student.prototype.display = function () {
        return "My age is ".concat(this.age, " years and my skills are: ").concat(this.skills.join(", "), ".");
    };
    return Student;
}(Person));
exports.Student = Student;
