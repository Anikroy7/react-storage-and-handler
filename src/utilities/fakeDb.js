const addToDb = id => {

    let shoppingCart = {};

    // get item

    const storedItem = localStorage.getItem('shopping-cart');
    if (storedItem) {

        shoppingCart = JSON.parse(storedItem);
    }
    else {
        shoppingCart = {};
    }

    // add item
    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    console.log(shoppingCart)
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export { addToDb, removeFromDb };