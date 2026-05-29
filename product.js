let api = "https://dummyjson.com/products/category/";
let categories = ["smartphones", "mobile-accessories", "laptops"];
let productBox1 = document.querySelector(".product-boxes");
let productBox2 = document.querySelector(".product-boxes2");
let filterBtn = document.querySelectorAll(".chip");
let select = document.querySelector(".select");


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
}
getProducts();


//Product səhifə
async function getProducts2(){
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
}
getProducts2();


//Smartfon hissəsi
async function smartProduct(){
    let sProducts = [];
    let response = await
    fetch(`${api}smartphones`)
    .then(res => res.json())
    .then(data =>{
        sProducts.push(...data.products);
    })

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
}


//Laptop hissəsi
async function laptopProduct(){
    let lProducts = [];
    let response = await
    fetch(`${api}laptops`)
    .then(res => res.json())
    .then(data =>{
        lProducts.push(...data.products);
    })

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
}


//Aksesuar hissəsi
async function accessoriesProduct(){
    let accProducts = [];
    let response = await
    fetch(`${api}mobile-accessories`)
    .then(res => res.json())
    .then(data =>{
        accProducts.push(...data.products);
    })

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
}

//Filter hissəsi
filterBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtn.forEach(b => b.classList.remove("active-chip"));
        btn.classList.add("active-chip");

        productBox2.innerHTML = "";
        
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