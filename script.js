
//1

let  number =8;
if(typeof(number)=="number"){
if(number%2==0){
    console.log(`Число ${number} является четным`)
}else{
console.log(`Число ${number} является нечетным`)
}
}else{
    console.log(`Ошибка ${number} не является числом`)
}



//2

let valute = prompt('введите сумму долларах');
let courseDollarRubl=85;
let result = valute*courseDollarRubl;

alert(`Сумма в рублях равна  ${result} р.`)