const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
let cartObj = [];
let typeJSON;
let type;
let currentType;

document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem('cart') && $all('.items-count').forEach((el, i) => {
        el.innerText = JSON.parse(localStorage.getItem('cart')).length
    })
    typeJSON = JSON.parse(localStorage.getItem("typeJSON"));
    type = new URLSearchParams(window.location.search).get('type');
    currentType = {};

    for (let i = 0; i < typeJSON.length; i++) {
        if (typeJSON[i].name === type) {
            currentType = typeJSON[i];
        }
    }

    type && (document.title = `${currentType.name.charAt(0).toUpperCase() + currentType.name.slice(1)} : The Bean Store`);
    $('#type_image').src = currentType.src;
    $('#type_name').textContent = currentType.name;
    $('#type_desc').textContent = currentType.desc;
})

const selectCupSize = (evt) => {

    if (evt.target.classList.contains('selected')) {
        evt.target.classList.remove('selected')
    } else {
        for (let item of evt.target.parentElement.children) {
            item.classList.remove('selected')
        }
        evt.target.classList.add('selected')
    }
}

const goToCart = () => {
    window.location.href = `./cart.html`
}


function showToast() {
    const toast = document.querySelector(".toast");
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show') , 3000);
}



const addProductToCart = () => {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', []);
    } else {
        cartObj = (JSON.parse(localStorage.getItem('cart')))
    }
    // const cacheObj = JSON.parse(localStorage.getItem('cart'));
    const draftCart = {
        name: currentType.name,
        cost: currentType.cost,
        src: currentType.src,
        size: document.querySelector('.cups').querySelector('.selected').id,
        qty: 1,
        foam: $('#foam').value,
        milk: $('#milk').value,
        temp: $('#temp').value
    }

    cartObj.push(draftCart)
    localStorage.setItem('cart', JSON.stringify(cartObj))
    localStorage.getItem('cart') && $all('.items-count').forEach((el, i) => {
        el.innerText = JSON.parse(localStorage.getItem('cart')).length
    })
    showToast()

    // if (cacheObj && cacheObj[currentType.name]) {
    //     if(cacheObj[currentType.name]['foam'] !== draftCart['foam'] 
    //         || cacheObj[currentType.name]['milk'] !== draftCart['milk'] 
    //         || cacheObj[currentType.name]['temp'] !== draftCart['temp'] ) {
    //             cacheObj[`${currentType.name}_`] = draftCart;
    //             localStorage.setItem('cart',JSON.stringify(draftCart));
    //     } else {
    //         draftCart.qty += cacheObj[currentType.name]['qty'];
    //         cacheObj[currentType.name] = draftCart;
    //         localStorage.setItem('cart', JSON.stringify(cacheObj));
    //     }

    // } else {
    //     cartObj[currentType.name] = draftCart
    //     localStorage.setItem('cart', JSON.stringify(cartObj));
    // }

}