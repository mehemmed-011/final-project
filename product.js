let api = "https://dummyjson.com/products/category/";
let categories = ["smartphones", "mobile-accessories", "laptops"];
let productBox1 = document.querySelector(".product-boxes");
let productBox2 = document.querySelector(".product-boxes2");

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