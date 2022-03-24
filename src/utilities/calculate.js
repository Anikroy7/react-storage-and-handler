const add = (first, second) => first + second;

const multiply = (first, second) => first * second;


// const numbers = [11, 12, 19, 52, 21, 44];

// const total = (privious, current) => privious + current;
// const sum = numbers.reduce(total, 0);
// console.log(sum)




// const products = [
//     { name: 'alta', age: 25, color: 'green', price: 100 },
//     { name: 'alta', age: 25, color: 'green', price: 100 },
//     { name: 'alta', age: 25, color: 'green', price: 100 },
//     { name: 'alta', age: 25, color: 'green', price: 100 },
//     { name: 'alta', age: 25, color: 'green', price: 100 }
// ]

// const sumReducer = (current, privious) => current.price + privious;

// const total = products.reduce(sumReducer, 0)



const getTotalPrice = cosmetics => {
    const sumReducer = (privious, current) => privious + current.age;
    const total = cosmetics.reduce(sumReducer, 0);

    return total;
}


export { add, multiply, getTotalPrice as getTotal }