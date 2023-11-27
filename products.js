const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
const data = {
    "data": [
        {
            "name": "marocchino",
            "desc": "Espresso meets cocoa in a dance of indulgence, creating a harmonious symphony of rich flavors.",
            "src": "./assets/marocchino.svg",
            "cost": 2.99
        },
        {
            "name": "americano",
            "desc": "A pure and robust espresso experience, diluted to perfection for a smooth, bold sip.",
            "src": "./assets/americano.svg",
            "cost": 2.30
        },
        {
            "name": "cappuccino",
            "desc": "Creamy clouds over a shot of espresso bliss, the perfect union of froth and flavor.",
            "src": "./assets/cappuccino.svg",
            "cost": 1.30
        },
        {
            "name": "cortado",
            "desc": "Bold espresso softened with a touch of warmth, striking a delicate balance for a refined taste.",
            "src": "./assets/cortado.svg",
            "cost": 1.00
        },
        {
            "name": "frappe",
            "desc": "Chill out with blended coffee bliss, where icy refreshment meets the bold kick of coffee.",
            "src": "./assets/frappe.svg",
            "cost": 1.10
        },
        {
            "name": "irish",
            "desc": "Whiskey warmth in a coffee embrace, a spirited blend for cozy indulgence.",
            "src": "./assets/irish.svg",
            "cost": 2.99
        },
        {
            "name": "latte macchiato",
            "desc": "Layers of espresso and frothy sophistication, a visual and flavorful delight in every sip.",
            "src": "./assets/latte_macchiato.svg",
            "cost": 1.75
        },
        {
            "name": "mocha",
            "desc": "Chocolate dreams in every decadent drop, a luscious fusion of espresso and cocoa richness.",
            "src": "./assets/mocha.svg",
            "cost": 1.20
        }
    ]
}

document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem('cart') && $all('.items-count').forEach((el, i) => {
        el.innerText = JSON.parse(localStorage.getItem('cart')).length
    })
    let typeJSON = data.data;

    // fetch("./type.json")
    //     .then(res => res.json()).then(json => {
    //         typeJSON = json.data;
    //         localStorage.setItem("typeJSON", JSON.stringify(typeJSON));
    //         let template = ''
    //         for (let i = 0; i < typeJSON.length; i++) {
    //             template += `<div class="product" onclick="goToDetailsPage('${typeJSON[i].name}')">
    //                 <img src=${typeJSON[i].src}>
    //                 <h3>${typeJSON[i].name}</h3>
    //             </div>`
    //         }

    //         $('.products-list').innerHTML = template;
    //     })

    localStorage.setItem("typeJSON", JSON.stringify(typeJSON));
    let template = ''
    for (let i = 0; i < typeJSON.length; i++) {
        template += `<div class="product" onclick="goToDetailsPage('${typeJSON[i].name}')">
                    <img src=${typeJSON[i].src}>
                    <h3>${typeJSON[i].name}</h3>
                </div>`
    }

    $('.products-list').innerHTML = template;
});

const goToDetailsPage = (name) => {
    window.location.href = `./productDetails.html?type=${name}`
}


const goToCart = () => {
    window.location.href = `./cart.html`
}