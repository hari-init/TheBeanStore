const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);


document.addEventListener("DOMContentLoaded", () => {
    addItemsToCartList();
});

const goToHome = () => {
    window.history.back();
}
const goToCheckout = () => {
    if(localStorage.getItem('user')) {
        window.location.href = `./checkout.html`
    } else {
        window.location.href = `./userSignUp.html`
    }
}

const addItemsToCartList = () => {
    if (localStorage.getItem('cart')) {
        const cacheObj = JSON.parse(localStorage.getItem('cart'));
        let template = '';
        let checkOutTemplate = '';
        let totalCost = 0;
        cacheObj.forEach((element, index) => {
            template += getCartTemplate(element, index);
            checkOutTemplate += `<div><h5>${element.name}</h5><h5>$${element.cost}</h5></div>`
            totalCost += element.cost
        });
        $('.cartItems').innerHTML = template;
        $('.listItem').innerHTML = checkOutTemplate;
        $('.cost').innerText = `$${totalCost.toFixed(2)}`
    }
}

const cloneItem = (event) => {
    const cartObj = (JSON.parse(localStorage.getItem('cart')));
    const currentItem = cartObj[event.target.id]
    cartObj.splice(event.target.id, 0, currentItem);
    refreshCart(cartObj);
}

const removeItem = (event) => {
    const cartObj = (JSON.parse(localStorage.getItem('cart')));
    cartObj.splice(event.target.id, 1);
    refreshCart(cartObj);
}

const refreshCart = (cartObj) => {
    localStorage.setItem('cart', JSON.stringify(cartObj))
    localStorage.getItem('cart') && $all('.items-count').forEach((el, i) => {
        el.innerText = JSON.parse(localStorage.getItem('cart')).length
    })
    addItemsToCartList();
}

const getCartTemplate = (element, index) => {
    return `<div class="item">
    <div class="itemImage">
        <img src=${element.src} />
    </div>
    <div class="itemDesc">
        <span><h3>${element.name}</h3>&nbsp;&nbsp;<p>Qty:&nbsp;<strong>${element.qty}</strong></p></span>
        <span class="size"><p>Size</p><strong > : ${element.size}</strong></span>
        <span class="foam"><p>foam</p><strong > : ${element.foam} </strong></span>
        <span class="milk"><p>milk</p><strong > : ${element.milk} </strong></span>
        <span class="temp"><p>temp</p><strong > : ${element.temp}</strong></span>
        <div class="actions">
            <img id="${index}" class="delete" src="./assets/delete.svg" alt="" onClick="removeItem(event)">
            <img id="${index}" src="./assets/add.svg" alt="" onClick="cloneItem(event)">
        </div>
    </div>
    <div class="price">
        <h3>$ ${element.cost}</h3>
    </div>
</div>`
}

