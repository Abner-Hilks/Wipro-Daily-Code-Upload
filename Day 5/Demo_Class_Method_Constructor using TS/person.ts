export class Person {
  public name: string;
  protected age: number;
  readonly institute: string;
  private id: number;
  static counter: number = 0;

  constructor(name: string, age: number, institute: string) {
    this.name = name;
    this.age = age;
    this.institute = institute;
    this.id = ++Person.counter;
  }

  public greet(): string {
    return `Hello, my name is ${this.name}, and I study at ${this.institute}.`;
  }

  public showId(): number {
    return this.id;
  }
}

export class Student extends Person {
  private skills: string[];

  constructor(name: string, age: number, institute: string, skills: string[]) {
    super(name, age, institute);
    this.skills = skills;
  }

  // Overridden greet (does NOT include skills)
  public greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}.`;
  }

  // Only adds skills once
  public getStudentDetails(): string {
    return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
  }

  public addSkill(skill: string): void {
    this.skills.push(skill);
  }

  public display(): string {
    return `My age is ${this.age} years and my skills are: ${this.skills.join(", ")}.`;
  }
}
