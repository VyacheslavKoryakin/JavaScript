//1

function isUnique(params) {
    let array = [];
    let result = false;
    for (let index = 0; index < params.length; index++) {
        if (array.includes(params[index])) {
            result = true;
            break;
        } else {
            array.push(params[index])
        }
    }
    console.log(result);
}



isUnique([1, 2, 3, 4, 5, 6, 3]);
isUnique([1, 2, 3, 4, 5, 6]);


//2
function mergeArray(param1, param2) {
    let mArr = [];
    mArr.push(param1.concat(param2))
    console.log(mArr)
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
mergeArray(arr1, arr2);



//3

function replaceNegative(params, replace) {
    for (let index = 0; index < params.length; index++) {
        if (params[index] < 0) {
            params[index] = replace;
        };

    }
    console.log(params)
}

replaceNegative([1, -2, 3, -4], 0)

//4

function isPrime(number) {
    let array = [2, 3, 4, 5, 6, 7, 8, 9]
    let element = 0;
    for (let index = 0; index < array.length; index++) {
        if (number != array[index] && number % array[index] == 0) {
            element += 1;
        } else {
            continue
        }

    }
    return (element == 0) ? true : false
}

console.log(isPrime(9))

function getPrimes(params) {
    let prime=[];
    for (let index = 0; index < params.length; index++) {
        if (isPrime(params[index])) {
            prime.push(params[index])

        }
    }
    console.log(prime)
}

getPrimes([1,2,3,4,5,6,7,8,9]);