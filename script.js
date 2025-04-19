const employees = {
    factoryName: "VAZ",
    employeeList: [],
    positionList: [],
    employee: [],
    addEmployee: function (fullName, sex, age, position, salary) {
        if (position != "директор") {
            this.employee.push({
                fullName,
                sex,
                age,
                position,
                salary
            })
        } else {
            this.employee.unshift({
                fullName,
                sex,
                age,
                position,
                salary
            })
        }

    },
    getEmployee: function () {

        for (let index = 0; index < this.employee.length; index++) {
            const element = this.employee[index];
            console.log(`Ф.И.О. ${element.fullName}, возраст ${element.age}, пол ${element.sex}, должность ${element.position}, зарплата ${element.salary}`)
        }

    },
    changeEmploeyee: function (param1, param2) {
        let newValue = prompt(`введите новое значение ${param2} для сотрудника ${this.employee[param1].fullName}`)

        switch (param2) {
            case 'fullName': this.employee[param1].fullName = newValue;

                break
            case 'sex': this.employee[param1].sex = newValue;

                break
            case 'age': this.employee[param1].age = +newValue;

                break
            case 'position': this.employee[param1].position = newValue;

                break
            case 'salary': this.employee[param1].salary = +newValue;

                break

            default: alert("выбрана неверная ячейка")
                break
        }
        this.employee[param1].age = newValue;
        console.log(this.employee)

    },

    removeEmployee: function (params) {
        if (params <= this.employee.length - 1) {
            delete this.employee[params]
            console.log(this.employee)
        } else {
            console.log("Сотрудника с таким номером не существует")
        }
    },

    getEmployeeList: function () {
        for (let index = 0; index < this.employee.length; index++) {
            const element = this.employee[index];
            console.log(`${element.fullName}`)
        }

    },
    getAllPosition: function () {

        for (let index = 0; index < this.employee.length; index++) {
            if (this.employee[index] != null) {
                const element = this.employee[index];
                this.positionList.push(element.position)
            }
        }
        console.log(this.positionList)
    }
}

employees.addEmployee("Петров Петр Петрович", "муж", 25, "слесарь", 95000)
employees.addEmployee("Иванов Иван Иванович", "муж", 43, "электромонтер", 100000)
employees.addEmployee("Сидорова Юлия Петровна", "жен", 25, "бухгалтер", 95000)
employees.addEmployee("Игорев Игорь Игоревич", "муж", 55, "директор", 495000)
employees.getEmployee()
employees.getEmployeeList();
employees.removeEmployee(1);
employees.getAllPosition();
employees.changeEmploeyee(2, "position");