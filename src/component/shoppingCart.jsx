import React from 'react';
import Product from './product';

const ShoppingCart = props => {
    console.log(props.products)
    return ( 
        <React.Fragment>
            {props.products.map(p=>(
            <Product 
                key={p.id} 
                product={p}
                onIncrement={props.onIncreament}
                onDelete={props.onDelete}
            />))}
        </React.Fragment>
     );
}
 
export default ShoppingCart;