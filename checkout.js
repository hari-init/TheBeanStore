const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
let isValid = false;


document.addEventListener("DOMContentLoaded", () => {
    addItemsToCartList();
});


const addItemsToCartList = () => {
    if (localStorage.getItem('cart')) {
        const cacheObj = JSON.parse(localStorage.getItem('cart'));
        let checkOutTemplate = '';
        let totalCost = 0;
        cacheObj.forEach((element, index) => {
            checkOutTemplate += `<div><h5>${element.name}</h5><h5>$${element.cost}</h5></div>`
            totalCost += element.cost
        });
        $('.listItem').innerHTML = checkOutTemplate;
        $('.cost').innerText = `$${totalCost.toFixed(2)}`
    }
}

const goToSuccess = () => {
    const name = validate('name', 'nameError');
    const mob = validate('tel', 'telError', 'mob');
    const add = validate('address1', 'add1Error');
    const postal = validate('postalCode', 'postalError');

    if (name && mob && add && postal) {
        localStorage.removeItem('cart');
        window.location.href = './success.html'
    }
}

const validate = (id, errId, type) => {
    const mobileRx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

    if (!$(`#${id}`).value) {
        $(`#${errId}`).innerText = 'Please enter some value';
        return false;
    } else if (type && $(`#${id}`).value) {
        if (type === 'mob' && !$(`#${id}`).value.match(mobileRx)) {
            $(`#${errId}`).innerText = 'Please enter correct value';
            return false;
        } else {
            $(`#${errId}`).innerText = '';
            return true;
        }
    } else {
        $(`#${errId}`).innerText = '';
        return true;
    }
}

const goToHome = () => {
    window.history.back()
}