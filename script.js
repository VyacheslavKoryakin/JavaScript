
let num1 = prompt("введите первое число");
let num2 = prompt("введите второе число");
let operation = prompt("ведите операцию + или - или / или *");
let result;
if (typeof (+num1) == "number" && typeof (+num2) == "number") {
    switch (operation) {
        case '+': result = (+num1) + (+num2)
            break;
        case '-': result = (+num1) - (+num2)
            break;
        case '*': result = (+num1) * (+num2)
            break;
        case '/': if (+num2 != 0) {
            result = (+num1) / (+num2)
        } else {
            result = "Ошибка! на ноль делить нельзя"
        }
            break;
        default:
            break;
    }
}else{
    result="Ошибка! нужно вводить числа"
}

alert(`${result}`);


