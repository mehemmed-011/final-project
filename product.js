let api = "https://dummyjson.com/products/category/";
let categories = ["smartphones", "mobile-accessories", "laptops"];
let productBox1 = document.querySelector(".product-boxes");
let productBox2 = document.querySelector(".product-boxes2");
let filterBtn = document.querySelectorAll(".chip");
let select = document.querySelector(".select");

let currentProducts = [];


//Əsas səhifə
async function getProducts(){
    let allProducts = [];
    for(let i = 0; i < categories.length; i++){
        let response = await
        fetch(`${api}${categories[i]}`)
        .then(res => res.json())
        .then(data =>{
            allProducts.push(...data.products);
        })
    }

    allProducts.sort(() => Math.random() - 0.5);
    let selectedProducts = allProducts.slice(0, 8);

    selectedProducts.forEach(product => {

        productBox1.innerHTML += `
        
            <article class="product-card">
            <div class="product-img">
                <img src="${product.thumbnail}" alt="#"/>
            </div>
            <div class="product-body">
                <div class="product-title">${product.title}</div>
                <div class="product-meta">
                <span>⭐ ${product.rating}</span>
                <span>${product.tags[0]}</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <button class="add-btn">Səbətə əlavə et</button>
            </div>
            </article>
        
        `;
    });

    checkCartButtons();
}
if(productBox1){
    getProducts();
}


//Product səhifə
async function getProducts2(){
    productBox2.innerHTML = "";
    let allProducts2 = [];
    for(let i = 0; i < categories.length; i++){
        let response = await
        fetch(`${api}${categories[i]}`)
        .then(res => res.json())
        .then(data =>{
            allProducts2.push(...data.products);
        })
    }

    allProducts2.sort(() => Math.random() - 0.5);

    currentProducts = allProducts2;

    allProducts2.forEach(product => {

        productBox2.innerHTML += `
        
            <article class="product-card">
            <div class="product-img">
                <img src="${product.thumbnail}" alt="#"/>
            </div>
            <div class="product-body">
                <div class="product-title">${product.title}</div>
                <div class="product-meta">
                <span>⭐ ${product.rating}</span>
                <span>${product.tags[0]}</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <button class="add-btn">Səbətə əlavə et</button>
            </div>
            </article>
        
        `;
    });

    checkCartButtons();
}


let params = new URLSearchParams(window.location.search);
let category = params.get("cat");


if(productBox2 && !category){
    getProducts2();
}

if(category && productBox2){
    filterBtn.forEach(btn => {
        btn.classList.remove("active-chip");
    });

    let activeBtn = document.querySelector(
        `.chip[value="${category}"]`
    );

    if(activeBtn){
        activeBtn.classList.add("active-chip");
    }

    productBox2.innerHTML = "";

    if(category == "smartphones"){
        if(productBox2){
            smartProduct();
        }
    }

    else if(category == "laptops"){
        if(productBox2){
            laptopProduct();
        }
    }

    else if(category == "mobile-accessories"){
        if(productBox2){
            accessoriesProduct();
        }
    }
}


//Smartfon hissəsi
async function smartProduct(){
    productBox2.innerHTML = "";
    let sProducts = [];
    let response = await
    fetch(`${api}smartphones`)
    .then(res => res.json())
    .then(data =>{
        sProducts.push(...data.products);
    })

    currentProducts = sProducts;

    sProducts.forEach(product => {

        productBox2.innerHTML += `
        
            <article class="product-card">
            <div class="product-img">
                <img src="${product.thumbnail}" alt="#"/>
            </div>
            <div class="product-body">
                <div class="product-title">${product.title}</div>
                <div class="product-meta">
                <span>⭐ ${product.rating}</span>
                <span>${product.tags[0]}</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <button class="add-btn">Səbətə əlavə et</button>
            </div>
            </article>
        
        `;
    });

    checkCartButtons();
}


//Laptop hissəsi
async function laptopProduct(){
    productBox2.innerHTML = "";
    let lProducts = [];
    let response = await
    fetch(`${api}laptops`)
    .then(res => res.json())
    .then(data =>{
        lProducts.push(...data.products);
    })

    currentProducts = lProducts;

    lProducts.forEach(product => {

        productBox2.innerHTML += `
        
            <article class="product-card">
            <div class="product-img">
                <img src="${product.thumbnail}" alt="#"/>
            </div>
            <div class="product-body">
                <div class="product-title">${product.title}</div>
                <div class="product-meta">
                <span>⭐ ${product.rating}</span>
                <span>${product.tags[0]}</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <button class="add-btn">Səbətə əlavə et</button>
            </div>
            </article>
        
        `;
    });

    checkCartButtons();
}


//Aksesuar hissəsi
async function accessoriesProduct(){
    productBox2.innerHTML = "";
    let accProducts = [];
    let response = await
    fetch(`${api}mobile-accessories`)
    .then(res => res.json())
    .then(data =>{
        accProducts.push(...data.products);
    })

    currentProducts = accProducts;

    accProducts.forEach(product => {

        productBox2.innerHTML += `
        
            <article class="product-card">
            <div class="product-img">
                <img src="${product.thumbnail}" alt="#"/>
            </div>
            <div class="product-body">
                <div class="product-title">${product.title}</div>
                <div class="product-meta">
                <span>⭐ ${product.rating}</span>
                <span>${product.tags[0]}</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <button class="add-btn">Səbətə əlavə et</button>
            </div>
            </article>
        
        `;
    });

    checkCartButtons();
}

//Filter hissəsi
filterBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        select.value = "default";
        filterBtn.forEach(b => b.classList.remove("active-chip"));
        btn.classList.add("active-chip");

        if(productBox2){
            productBox2.innerHTML = "";
        }
        
        if(btn.value == "all"){
            getProducts2();
        }

        else if(btn.value == "smartphones"){
            smartProduct();
        }

        else if(btn.value == "laptops"){

            laptopProduct();
        }

        else if(btn.value == "mobile-accessories"){

            accessoriesProduct();
        }
    });
});

//Select hissəsi
if(select && productBox2){
    select.addEventListener("change", () => {

        let sortedProducts = [...currentProducts];

        if(select.value == "price-asc"){

            sortedProducts.sort((a, b) => a.price - b.price);
        }

        else if(select.value == "price-desc"){

            sortedProducts.sort((a, b) => b.price - a.price);
        }

        else if(select.value == "name-asc"){

            sortedProducts.sort((a, b) => 
                a.title.localeCompare(b.title)
            );
        }

        else if(select.value == "name-desc"){

            sortedProducts.sort((a, b) => 
                b.title.localeCompare(a.title)
            );
        }

        else{

            sortedProducts = [...currentProducts];
        }

        productBox2.innerHTML = "";

        sortedProducts.forEach(product => {

            productBox2.innerHTML += `
            
                <article class="product-card">
                <div class="product-img">
                    <img src="${product.thumbnail}" alt="#"/>
                </div>
                <div class="product-body">
                    <div class="product-title">${product.title}</div>
                    <div class="product-meta">
                    <span>⭐ ${product.rating}</span>
                    <span>${product.tags[0]}</span>
                    </div>
                    <div class="product-price">$${product.price}</div>
                    <button class="add-btn">Səbətə əlavə et</button>
                </div>
                </article>
            
            `;
        });

        checkCartButtons();

    });
}


//localStorage-a əlavə etmək hissəsi
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("add-btn")){

        let productCard = e.target.closest(".product-card");

        let product = {
            title: productCard.querySelector(".product-title").textContent,
            price: Number(productCard.querySelector(".product-price").textContent.replace("$", "")),
            image: productCard.querySelector("img").src,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existingProduct = cart.find(item => item.title === product.title);
        if(existingProduct){
            e.target.textContent = "Səbətdə";
            return;
        }

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
        e.target.textContent = "Səbətdə";
        e.target.disabled = true;
    }
});

function checkCartButtons(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".product-card").forEach(card => {
        let title = card.querySelector(".product-title").textContent;
        let btn = card.querySelector(".add-btn");
        let exists = cart.find(item => item.title === title);

        if(exists){
            btn.textContent = "Səbətdə";
            btn.disabled = true;
        }
    });
}