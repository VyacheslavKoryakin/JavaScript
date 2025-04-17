//1
let num1 = prompt("Enter num1");
let num2 = prompt("Enter num2");
function minNumb(a, b) {
    return (a < b) ? a : b
}
alert(minNumb(num1, num2));



//2
let squre = (number) => alert(number ** 2);
squre(10);


//3

let num3 = +prompt("Enter num3");
let num4 = +prompt("Enter num4");
let operaton = prompt(" enter + or - or/ or *")

function calculation(a, b, c) {
    let result;
    switch (c) {
        case "+":
            result = a + b
            break;
        case "-":
            result = a - b
            break;
        case "*":
            result = a * b
            break;
        case "/":
            result = a / b
            break;
        default:
            break;
    }
    return result
}

alert(calculation(num3, num4, operaton));


//4
function checkNum(a) {
    let array = [2, 3, 4, 5, 6, 7, 8, 9]
    let element = 0;
    for (let index = 0; index < array.length; index++) {
        if (a != array[index] && a % array[index] == 0) {
            element += 1;
        } else {
            continue
        }

    }
    return (element == 0) ? "это простое число" : " это составное число"
}

alert(checkNum(53));



// //5
let num5 = prompt("enter number")
let result;
function multi(a) {
    let array = [2, 3, 4, 5, 6, 7, 8, 9,]
    for (let index = 0; index < array.length; index++) {
        result = a * array[index]
        console.log(`${a} * ${array[index]} =${result}`)
    }
}
multi(num5);

//доп

//1
let minRange = +prompt("введите нижний дипозон числа")
let maxRange = +prompt("введите верхний дипозон числа")
let bool = true;
let evenArray = [];
let oddArray = [];
function getNumber(a, b) {
    if (a >= b) {
        alert("вы ввели некорректный дипозон")
    } else {
        for (let i = a; i <= b; i++) {
            if (i % 2 == 0) {
                evenArray.push(i);
            } else {
                oddArray.push(i);
            }
        }
        bool ? alert(evenArray) : alert(oddArray);
    }
}

getNumber(minRange, maxRange);

//2
let day = new Date().getDate()
let month = new Date().getMonth() + 1
let year = new Date().getFullYear()
let result3;

function leapYear(params) {
    return ((params % 4 == 0) && (params % 100 != 0)) || (params % 400 == 0);
}

let isLeapYear = leapYear(year);

function newDate(d, m, y) {
    let day = d;
    let month = m;
    let year = y;
    if (m % 2 == 0) {
        if (d == 30 || !isLeapYear && d == 28 && m == 2) {
            day = 1;
            month = m + 1;
        } else {
            day = d + 1;
            month = m;
            year = y;
        }
    } else if (d == 31) {
        day = 1;
        month = m + 1;
    } else {
        day = d + 1;
        month = m;
        year = y;
    }

    console.log(day + "." + month + "." + year)
}

newDate(day, month, year);


