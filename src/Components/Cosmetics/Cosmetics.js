import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const total = getTotal(products)

    return (
        <div>
            <h1>This is a Cosmetics component</h1>
            <p>Total-age: {total}</p>

            {
                products.map(product => <Cosmetic product={product} key={product.id}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;