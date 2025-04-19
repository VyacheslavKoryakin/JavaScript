class Person {

    constructor(name, age, gender) {
        if (typeof name == "string" && name!=null) {
            this.name = name
        } else {
            this.exception("name")
        }
        if (typeof age == "number" && age >= 0) {
            this.age = age
        } else {
            this.exception("age")
        }
        if (gender == "male" || gender == "female") {
            this.gender = gender
        } else {
            this.exception("gender")
        }
    }
    exception(params) {
        console.error(`Не правильно введен параметр "${params}"`);

    }
    intoduce() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`)
    }

    isAdult() {
        if (this.age >= 18) {
            return true
        } else {
            return false
        }
    }
}

let person1 = new Person("John", 18, "male")
person1.intoduce();
console.log(person1.isAdult())

class Student extends Person {
    constructor(name, age, gender, major,gpa) {
        super(name, age, gender),
            this.major = major
            if (typeof gpa == "number" && gpa >= 0 && gpa < 5) {
            this.gpa = gpa
        } else {
            this.exception("gpa")
        }
    }

    study() {
        console.log(`${this.name} учиться на специальности ${this.major} `);

    }

    improveGPA(points) {

        if (this.gpa + points > 4) {
            this.gpa = 4
        } else {
            this.gpa = this.gpa + points
        }
        console.log(this.gpa)

    }

    intoduce() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.Я учюсь на специальности ${this.major}, мой средний бал ${this.gpa} `)
    }
}


person1 = new Student(person1.name, person1.age, person1.gender, "Физик", 4)
person1.intoduce();
person1.study();
let student = new Student("Will", 22, "male", "электрик", 3)
student.intoduce();
student.improveGPA(3);
student.intoduce()
student.study();