const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem('cart') && $all('.items-count').forEach((el, i) => {
        el.innerText = JSON.parse(localStorage.getItem('cart')).length
    })
    $('.logs') && ($('.logs').style.display = 'none');
});

const goToProducts = () => {
    window.location.href = `./products.html`
}

const goToCart = () => {
    window.location.href = `./cart.html`
}

const goToHome = () => {
    window.history.back();
}

const showLog = () => {
    if ($('.logs').checkVisibility()) {
        $('.logs').style.display = 'none';
    } else {
        if(localStorage.getItem('user')) {
            $('.logs').innerText = 'logout'
        } else {
            $('.logs').innerText = 'login'
        }
        $('.logs').style.display = 'block';
    }
}

const userAction = (event) => {
if(event.target.innerText === 'logout') {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    window.location.reload();
} else {
    $('.logs').style.display = 'none';
    window.location.href = './userSignUp.html?login'
}
}