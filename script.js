class Catalog {
    constructor(name, priview, price, category) {
        this.name = name,
            this.priview = priview,
            this.price = price,
            this.category = category
    }


}

let catalogs = [];
let lastElement = [];

let category = document.getElementById('category')
console.log(category.value)
let textarea = document.querySelector('#name')
let textarea2 = document.querySelector('#preview')
let textarea3 = document.querySelector('#price')
let i = 0;




const jsonFilePath = "file.json";
document.addEventListener('DOMContentLoaded', async function (params) {

    const response = await fetch(jsonFilePath);
    if (!response.ok) {

        console.error('Error take file')
    }

    let data = await response.json();


    for (let i = 0; i < data.products.length; i++) {

        catalogs.push(new Catalog(data.products[i].name, data.products[i].priview, data.products[i].price, data.products[i].category))
        console.log(catalogs)

        let box = document.createElement("div")
        box.className = catalogs[i].category;
        document.querySelector('.list').appendChild(box)
        
        let elem = document.createElement("textarea")
        let elem2 = document.createElement("textarea")
        let elem3 = document.createElement("textarea")

        elem.innerText = catalogs[i].name;
        elem2.innerText = catalogs[i].priview;
        elem3.innerText = catalogs[i].price;

        document.querySelector("." + catalogs[i].category).appendChild(elem)
        document.querySelector("." + catalogs[i].category).appendChild(elem2)
        document.querySelector("." + catalogs[i].category).appendChild(elem3)

        lastElement.push(box)
        console.log(lastElement)
    }
})


console.log(catalogs)




category.document, addEventListener('change', function () {

    for (let i = 0; i < lastElement.length;) {
        let lastElem = lastElement.pop()
        console.log(lastElem)
        console.log(lastElement)
        document.querySelector('.list').removeChild(lastElem)
    }


    console.log(catalogs[0].category)
    console.log(category.value)




    for (let i = 0; i < catalogs.length; i++) {
        if (category.value == catalogs[i].category) {

            let box = document.createElement("div")
            box.className = catalogs[i].category;
            document.querySelector('.list').appendChild(box)

            let elem = document.createElement("textarea")
            let elem2 = document.createElement("textarea")
            let elem3 = document.createElement("textarea")

            elem.innerText = catalogs[i].name;
            elem2.innerText = catalogs[i].priview;
            elem3.innerText = catalogs[i].price;

            document.querySelector("." + catalogs[i].category).appendChild(elem)
            document.querySelector("." + catalogs[i].category).appendChild(elem2)
            document.querySelector("." + catalogs[i].category).appendChild(elem3)
            lastElement.push(box)
        }

    }

})




