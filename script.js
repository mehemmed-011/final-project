let bars = document.querySelector(".bars");
let menuPhone = document.querySelector(".menu-phone");
let main = document.querySelector("main");

let state = false;
bars.addEventListener("click", ()=>{
    if(!state){
        menuPhone.style.display = "flex"
        main.style.marginTop = "45vw";
        state = true;
    }

    else{
        menuPhone.style.display = "none"
        main.style.marginTop = "12vw";
        state = false;
    }
})

let loginIcon = document.querySelector(".login-btn");
let userIcon = document.querySelector(".user-icon");

if(localStorage.getItem("isLoggedIn") === "true"){
    loginIcon.style.display = "none";
    userIcon.style.display = "flex";
}
else{
    loginIcon.style.display = "flex";
    userIcon.style.display = "none";
}