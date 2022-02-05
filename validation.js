var myname = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var Cpassword = document.getElementById('Cpassword');
var phone = document.getElementById('phone');
var age = document.getElementById('age');
var span = document.getElementsByTagName('span')




function testname(event) {
    let code = event.which;
    if (code > 47 && code < 58) {
        span[0].innerText = "Numbers not allowed!";
        span[0].style.color = "red";
        return false;
    }

    else
        return true;

}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function validate() {
    if (myname.value == "" || email.value == "" || password.value == "" || Cpassword.value == "" ||  phone.value ==" ") {
        scrollToTop();
        validateName();
    }
    else {
        window.open("./index.html", "_self")
    }
}

function validateName() {
    const regex = /^[(A-Za-z\s.)]+$/;
    if (myname.value.trim() == "" || myname.value.trim() == null) {
        span[0].innerText = "**Mandatory";
        span[0].style.color = "red";
        myname.style.border = "1px red solid";
        validateEmail();
    }
    else if (regex.test(myname.value.trim())) {
        span[0].innerText = "Valid Name!";
        span[0].style.color = "lime";
        myname.style.border = "1px lime solid";
        validateEmail();
    }
    else {
        span[0].innerText = "Invalid Name!";
        span[0].style.color = "red";
        myname.style.border = "1px red solid";
        return false;
    }
}

function validatePassword() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,20})/;
    if (password.value.trim() == "" || password.value.trim() == null) {
        span[9].innerText = "**Mandatory";
        span[9].style.color = "red";
        password.style.border = "1px red solid";
        return false;

    }
    else if (regex.test(password.value.trim())) {
        if (password.value.trim().length >= 8 && password.value.trim().length <= 15) {
            span[9].innerText = "Strong Password!";
            span[9].style.color = "lime";
            password.style.border = "1px lime solid";
            return true;
        }

        else {
            span[9].innerText = "Too long password!";
            span[9].style.color = "red";
            password.style.border = "1px red solid";
            return false;
        }
    }
    else if (password.value.trim().length < 8) {
        span[9].innerText = "Weak Password!";
        span[9].style.color = "orange";
        password.style.border = "1px orange solid";
        return false;
    }
    else {
        span[9].innerText = "Invalid!";
        span[9].style.color = "red";
        password.style.border = "1px red solid";
        return false;
    }
}

function validateEmail() {
    const regex = /^\w+([\.-]?\w+)+@(christuniversity.in|christuniversity.com)$/;
    if (email.value.trim() == "" || email.value.trim() == null) {
        span[1].innerText = "Blank Email!";
        span[1].style.color = "red";
        email.style.border = "1px red solid";
        validatePassword();

    }
    if (regex.test(email.value.trim())) {
        span[1].innerText = "Valid Email!";
        span[1].style.color = "lime";
        email.style.border = "1px lime solid";
        validatePassword();
    }
    else {
        span[1].innerText = "Invalid Email!";
        span[1].style.color = "red";
        email.style.border = "1px red solid";
        return false;
    }
}
function validateCPassword() {
    if (Cpassword != password) {
        span[9].innerText = "password mismatch";
        span[9].style.color = "red";
        Cpassword.style.border = "1px red solid";
        return false;

    }
    else {
        span[9].innerText = "password matched";
        span[9].style.color = "olive";
        Cpassword.style.border = "1px tomato solid";
        return true;
    }
}

function testphone(event)
 {
    let code = event.which;
    if (code > 64 && code < 91) {
        span[8].innerText = " characters not allowed!!"
        span[8].style.color="tomato"
        phone.style.border = "1px red solid";
        return false;
    }


    else 
    {
        span[8].innerText = "valid phone np"
        phone.style.border = "1px lime solid"; 
        span[8].style.color="lime"
        return true;
    }

}
function validateage(event)
{
    let code1 = event.which;
    if (code1 > 64 && code1< 91) {
        span[6].innerText = " characters not allowed!!"
        span[6].style.color="tomato"
        age.style.border = "1px red solid";
        return false;
    }
   else if( code1==189)
   {
    span[6].innerText = " negative not allowed!!"
    span[6].style.color="tomato"
    age.style.border = "5px red solid";
    return false;
   }
   else if(code1 > 47 && code1 < 58) 
    {   
        span[6].innerText = "valid age"
        age.style.border = "1px lime solid"; 
        span[6].style.color="lime"
        return true;
    }
}

localStorage.setItem("phone", phone.value);
document.getElementById("demo").innerHTML = localStorage.getItem("phone");

localStorage.setItem("email", email.value)
document.getElementById("demo1").innerHTML = localStorage.getItem("email");
