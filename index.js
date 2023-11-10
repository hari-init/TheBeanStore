document.addEventListener("DOMContentLoaded", () => {
    fetch("./type.JSON")
.then(res => res.json())
.then(data => console.log(data))
    const $ = (selector) => document.querySelector(selector);
    const type = new URLSearchParams(window.location.search).get('type');
    type && (document.title = `${type}: The Bean Store`);
    $('#type_image') && ($('#type_image').src = `./assets/${type}.svg`);
    $('#type_name') && ($('#type_name').textContent = type);
    $('#type_desc') && ($('#type_desc').textContent = 'where bold espresso meets the velvety embrace of frothy milk, crowned with a dusting of cocoa; a symphony of flavors in every sip');
});

const goToDetailsPage = (name) => {
    window.location.href = `./productDetails.html?type=${name}`
}