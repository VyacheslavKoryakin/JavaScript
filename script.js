
// //1
let mounth = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
console.log(mounth.reverse());
console.log(mounth.reverse().pop())
mounth.push("декабрь")
console.log(mounth)




//2
let k=0;
while (k < 10) {
    let num = prompt('введите числа')
    if(num%2==0){
        console.log(num)
    }
    k++
}


//3
let weekArray = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
let i=0;
while (i< 7) {
    let weekDay =prompt('введите строку')
    if(weekArray.includes(weekDay)){
        console.log(weekDay);
    }
      
    i++;

}