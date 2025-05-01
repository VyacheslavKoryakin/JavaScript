
//1

document.addEventListener('DOMContentLoaded',function(parameters) {
    document.addEventListener('mousemove', function (e) {
        console.log('mouse coordinate', e.pageX, e.pageY)
        if( e.pageX> 1900 && e.pageY<20){
            alert("не покидайте страницу так рано")
        }

    })
})


//2
let num1 = document.querySelector('#num1')
let symbol = document.querySelector('#symbol')
let num2 = document.querySelector('#num2')
let result;
document.addEventListener('DOMContentLoaded', function (e) {


    num1.addEventListener('change', function (e) {


        console.log(e.target.value)
    })
    num2.addEventListener('change', function (e) {


        console.log(e.target.value)
    })

    symbol.addEventListener('change', function (e) {


        console.log(e.target.value)
    

    switch (e.target.value) {
        case "+":
            result = (+num1.value) +(+ num2.value)
            break;
        case "-":
            result = (+num1.value) +(+ num2.value)
            break;
        case "*":
            result = (+num1.value) *(+ num2.value)
            break;
        case "/":
           result = (+num1.value) /(+ num2.value)
            break;
        default:
            break;
    }
    console.log(num1.value,  symbol.value, num2.value+ "=" + result );

})



})