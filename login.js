let loginTab = document.querySelector(".login");
let signupTab = document.querySelector(".signup");
let loginForm = document.querySelector("#login-form");
let signupForm = document.querySelector("#signup-form");
let signupName = document.querySelector(".signup-name");
let signupEmail = document.querySelector(".signup-email");
let signupPassword = document.querySelector(".signup-password");
let loginEmail = document.querySelector(".login-email");
let loginPassword = document.querySelector(".login-password");

let loginIcon = document.querySelector(".login-btn");
let userIcon = document.querySelector(".user-icon");
let signupAlert = document.querySelector(".signup-alert");
let loginAlert = document.querySelector(".login-alert");
let signupSuccess = document.querySelector(".signup-success");

if(loginTab && signupTab && loginForm && signupForm){
    loginTab.addEventListener("click", ()=>{
        signupTab.classList.remove("active-tab");
        loginTab.classList.add("active-tab");
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    })

    signupTab.addEventListener("click", ()=>{
        loginTab.classList.remove("active-tab");
        signupTab.classList.add("active-tab");
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    })
}

if(signupForm){
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if(signupPassword.value.trim().length >= 8){
            let user = {
                name: signupName.value.trim(),
                email: signupEmail.value.trim(),
                password: signupPassword.value.trim()
            };

            localStorage.setItem("user", JSON.stringify(user));

            signupForm.reset();

            signupSuccess.style.display = "block";
            signupAlert.style.display = "none";
        }

        else{
            signupAlert.style.display = "block";
            signupSuccess.style.display = "none";
        } 
    });
}

if(loginForm){
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let user = JSON.parse(localStorage.getItem("user"));

        if(user && loginEmail.value.trim() === user.email && loginPassword.value.trim() === user.password){
            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "index.html";
        }
        else{
            loginAlert.style.display = "block"
        }
    });
}

if(loginIcon && userIcon){
    if(localStorage.getItem("isLoggedIn") === "true"){
        loginIcon.style.display = "none";
        userIcon.style.display = "flex";
    }
    else{
        loginIcon.style.display = "flex";
        userIcon.style.display = "none";
    }
}

//bu hisse silinecek
// userIcon.addEventListener("click", (e) => {
//     e.preventDefault();

//     localStorage.removeItem("isLoggedIn");

//     window.location.reload();
// });