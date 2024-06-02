let productsData = [
    {
        "id": 1,
        "title": "Барбекю бургер",
        "price": "8.90",
        "img": "./images/burger_1.png",
        "type": "burger"
    }, 
    {
        "id": 2,
        "title": "Биг Сандрес бургер",
        "price": "12.90",
        "img": "./images/burger_2.jpg",
        "type": "burger"
    },
    {
        "id": 3,
        "title": "Сандрес бургер де люкс",
        "price": "10.90",
        "img": "./images/burger_3.jpg",
        "type": "burger"
    }, 
    {
        "id": 4,
        "title": "Шефбургер де люкс",
        "price": "7.90",
        "img": "./images/burger_4.png",
        "type": "burger"
    },
    {
        "id": 5,
        "title": "Шефбургер джуниор острый",
        "price": "5.50",
        "img": "./images/burger_5.png",
        "type": "burger"
    }
]

const cart = document.querySelector('.cart');
renderProductsBasket(productsData);

function renderProductsBasket(arr) {
    arr.forEach(card => {
        const { id, img, title, price } = card;
        const cardItem =
            `
        <div class="cart_product" data-product-id="${id}">
            <div class="cart_img">
                <img src="./orders/data/${img}" alt="${title}">
            </div>
            <div class="cart_title">${title}</div>
            <div class="cart_block-btns">
                <button class="cart_minus">-</button>
                <input type="number" class="cart_count" value="1" min="1" max="99">
                <button class="cart_plus">+</button>
            </div>
            <div class="cart_price">
                <span class = "cart_total_price">${price}</span>р
            </div>
            <div class="cart_del-card">X</div>
        </div>
        `;

        cart.insertAdjacentHTML('beforeend', cardItem);
    });
}



