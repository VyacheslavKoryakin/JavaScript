//1
let array = [];
let bool = true;
let num;
while (bool) {
    num = +prompt("Введите число")

    if (!isNaN(num) && +num != 0) {
        array.push(+num)
        alert(`${array}`)
    } else {
        bool = false;
    }
}
let min = 0;
let max = 0;
let average = 0;
let sum = 0;
for (let index = 0; index < array.length; index++) {

    if (min > array[index]) { min = array[index] }
    if (max < array[index]) { max = array[index] }
    sum += array[index]

}
average = sum / array.length;
console.log(min, max, sum, average)



//2
let cycle = true;
let symbol = prompt("enter symbol");
let array2 = [];
let leftSide;
let rightSide;
let element;

while (cycle) {
    array2.push(prompt("enter something"));
    if (array2.length >= 5) {
        cycle = false;
    }
}
element = array2.indexOf(symbol);

if (element + 1 >= array2.length) {
    leftSide = array2[0];
} else {
    leftSide = array2[element + 1];
}

if (element - 1 < 0) {
    rightSide = array2[array2.length - 1];
} else {
    rightSide = array2[element - 1];
}

console.log(rightSide, element, leftSide);




//3
let cycle2 = true;
let array3 = [];
let evenArray = [];
let oddArray = [];

while (cycle2) {
    array3.push(prompt("enter string"))
    if (array3.length >= 10) {
        cycle2 = false;
    }
}
for (let index = 0; index < array3.length; index++) {
    if (array3[index].length % 2 == 0) {
        evenArray.push(array3[index])
    } else {
        oddArray.push(array3[index])
    }
}
alert(`Массив с четным количеством символов в строках ${evenArray}`)
alert(`Массив с нечетным количеством символов в строках ${oddArray}`)




