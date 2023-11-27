
const $ = (selector) => document.querySelector(selector);
const emailRx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.search.substring(1) === 'login') {
        goToLogin();
    }
});


const goToHome = () => {
    window.history.back()
}

const goToSignUp = () => {
    $('.signUp').style.display = 'flex';
    $('.login').style.display = 'none';
}
const goToLogin = () => {
    $('.signUp').style.display = 'none';
    $('.login').style.display = 'flex';
}

const createUser = (event) => {
    let isValid = false;
    const fname = $('#fname').value;
    const fnameError = $('#fnameError');
    const lname = $('#lname').value;
    const lnameError = $('#lnameError');
    const email = $('#email').value;
    const emailError = $('#emailError');
    const pw = $('#password').value;
    const passwordError = $('#passwordError');
    const repw = $('#rePassword').value;
    const rePasswordError = $('#rePasswordError');


    if (!fname) {
        fnameError.innerText = 'Please enter the First name'
        isValid = false
    } else {
        fnameError.innerText = ''
        isValid = true
    }

    if (!lname) {
        lnameError.innerText = 'Please enter the Last name'
        isValid = false
    } else {
        lnameError.innerText = ''
        isValid = true
    }

    if (!email) {
        emailError.innerText = 'Please enter the email Id'
        isValid = false
    } else if (!email.match(emailRx)) {
        emailError.innerText = 'Enter the valid email Id'
        isValid = false
    } else {
        emailError.innerText = ''
        isValid = true
    }

    if (!pw) {
        passwordError.innerText = 'Enter the valid password'
        isValid = false
    } else {
        passwordError.innerText = ''
        isValid = true
    }
    
    if (!repw) {
        rePasswordError.innerText = 'Enter the valid password'
        isValid = false
    } else if (repw !== pw) {
        rePasswordError.innerText = 'Password dose not match'
        isValid = false
    } else {
        rePasswordError.innerText = ''
        isValid = true
    }

    const userDraft = {
        fname: fname.trim(),
        lname: lname.trim(),
        email: email.trim(),
        pw: pw.trim()
    }
    localStorage.setItem('user', JSON.stringify(userDraft))
    isValid && goToLogin()
    event.preventDefault();
}

const loginUser = (event) => {
    event.preventDefault();

    const userMail = $('#loginEmail').value;
    const loginEmailError = $('#loginEmailError');
    const userPw = $('#loginPassword').value;
    const loginErrorPassword = $('#loginErrorPassword');
    const noUser = $('#noUser');

    if (!userMail) {
        loginEmailError.innerText = 'Please enter the email Id'
    } else if (!userMail.match(emailRx)) {
        loginEmailError.innerText = 'Enter the valid email Id'
    } else {
        loginEmailError.innerText = ''
    }

    if (!userPw) {
        loginErrorPassword.innerText = 'Enter the valid password'
    } else {
        loginErrorPassword.innerText = ''
    }

    if (userMail && userPw && !localStorage.getItem('user')) {
        noUser.innerText = 'you do not have account, please sign up first'
        return
    } else if (userMail && userPw && localStorage.getItem('user')) {
        const userObj = JSON.parse(localStorage.getItem('user'));
        const userName = userObj.email;
        const userPass = userObj.pw;

        if (userName === userMail.trim() && userPass === userPw.trim()) {
            if (window.location.search.substring(1) === 'login') {
                window.history.back()
            } else {
                window.location.href = './checkout.html'
            }
        } else {
            noUser.innerText = 'the email or password is wrong'
        }
    } else {
        return
    }

}
