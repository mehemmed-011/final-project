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