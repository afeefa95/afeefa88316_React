import React from 'react';
import ProductList from './ProductList';

// order = oid, product

class Order extends React.Component{
    state = {oid: 404}

    render(){
        return(
            <div>
                <h4>Oid: {this.state.oid} <ProductList/></h4>
            </div>
        );
    }
}

export default Order;