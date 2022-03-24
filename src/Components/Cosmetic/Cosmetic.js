import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakeDb';

const Cosmetic = (props) => {
    const { name, age, id } = props.product;

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    return (
        <div style={{
            border: '5px solid black',
            margin: '21px',
            color: 'red',
            padding: '21px'
        }}>
            <h1>Name:{name} </h1>
            <p>age: {age}</p>
            <p>id: {id}</p>
            <button onClick={() => addToDb(id)} >Add to cart</button>
            <br /><br />
            <button onClick={() => removeFromCart(id)}>remove from cart</button>
        </div >
    );
};

export default Cosmetic;