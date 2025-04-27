let textarea = document.querySelector('#fromJSON')
let textarea2 = document.querySelector('#name')
let lowPopulation = document.querySelector('#but1')
let middlePopulation = document.querySelector('#but2')
let bigPopulation = document.querySelector('#but3')
let veryBigPopulation = document.querySelector('#but4')
let elements = [];
let data;
document.addEventListener('DOMContentLoaded', async function (params) {
    const jsonFilePath = "file.json";
    const response = await fetch(jsonFilePath);
    if (!response.ok) {

        console.error('Error take file')
    }
    data = await response.json();
})

lowPopulation.addEventListener('click', async function (params) {
    if (elements.length > 0) {
        for (let i = 0; i < elements.length;) {
            let lastElem = elements.pop()
            console.log(lastElem)


            document.querySelector('body').removeChild(lastElem)
        }
    }
    for (let index = 0; index < data.cityes.length; index++) {
        if (data.cityes[index].population < 50000) {

            let box = document.createElement("div")
            box.className = data.cityes[index].name;
            document.querySelector('body').appendChild(box)

            let elem = document.createElement("textarea")

            elem.innerText = data.cityes[index].name;

            document.querySelector("." + data.cityes[index].name).appendChild(elem)
            elements.push(box)
        }
    }
})
middlePopulation.addEventListener('click', async function (params) {
    if (elements.length > 0) {
        for (let i = 0; i < elements.length;) {
            let lastElem = elements.pop()
            console.log(lastElem)


            document.querySelector('body').removeChild(lastElem)
        }
    }
    for (let index = 0; index < data.cityes.length; index++) {
        if (data.cityes[index].population > 50000 && data.cityes[index].population < 100000) {

            let box = document.createElement("div")
            box.className = data.cityes[index].name;
            document.querySelector('body').appendChild(box)

            let elem = document.createElement("textarea")

            elem.innerText = data.cityes[index].name;

            document.querySelector("." + data.cityes[index].name).appendChild(elem)
            elements.push(box)
        }
    }
})

bigPopulation.addEventListener('click', async function (params) {
    if (elements.length > 0) {
        for (let i = 0; i < elements.length;) {
            let lastElem = elements.pop()
            console.log(lastElem)


            document.querySelector('body').removeChild(lastElem)
        }
    }
    for (let index = 0; index < data.cityes.length; index++) {
        if (data.cityes[index].population > 100000 && data.cityes[index].population < 250000) {

            let box = document.createElement("div")
            box.className = data.cityes[index].name;
            document.querySelector('body').appendChild(box)

            let elem = document.createElement("textarea")

            elem.innerText = data.cityes[index].name;

            document.querySelector("." + data.cityes[index].name).appendChild(elem)
            elements.push(box)
        }
    }
})

veryBigPopulation.addEventListener('click', async function (params) {
    if (elements.length > 0) {
        for (let i = 0; i < elements.length;) {
            let lastElem = elements.pop()
            console.log(lastElem)


            document.querySelector('body').removeChild(lastElem)
        }
    }
    for (let index = 0; index < data.cityes.length; index++) {
        if (data.cityes[index].population > 250000) {

            let box = document.createElement("div")
            box.className = data.cityes[index].name;
            document.querySelector('body').appendChild(box)

            let elem = document.createElement("textarea")

            elem.innerText = data.cityes[index].name;

            document.querySelector("." + data.cityes[index].name).appendChild(elem)
            elements.push(box)
        }
    }
})
