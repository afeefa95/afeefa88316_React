import React from 'react'
import './Common.css'
import ProductService from '../service/product.service';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                id: props.id,
                pId: props.pid,
                pName: props.pname,
                price: props.price,
                published: false,
                isInCart: props.isInCart,
                inList: props.inList
        }
    }

    addToCart = (id) => {
        console.log(id + " id is in cart: " + this.state.isInCart);
        this.setState({isInCart : true});
        console.log(id + " id is in cart after set state: " + this.state.isInCart);
        const data = {...this.state};
        console.log(data);
        ProductService.update(id,data)
                        .then(response=>{console.log(response.data);})
                        .catch(e=>{console.log(e);})
        if(this.state.isInCart)
            alert("Product with pid " + this.state.pId + " has been added to cart!");
        console.log(id + " id is in cart after update in db: " + this.state.isInCart);
    }

    render() {     
        let addToCartBtn = null;
        
        console.log("From list to cart: " + this.state.inList);
        if(this.state.inList == "true"){
            addToCartBtn = <button className="btn btn-info" onClick={() => this.addToCart(this.state.id)}>Add to cart</button>;
        }
        
            return (
                <div className="col-3">
        <div className="card bg-light">
            <div className="card-body text-center">
                <table className="table table-borderless">
                    <tr>
                        <th>Id:</th>
                        <td>{this.state.pId}</td>
                    </tr>
                    <tr>
                        <th>Name:</th>
                        <td>{this.state.pName}</td>
                    </tr>
                    <tr>
                        <th>Price:</th>
                        <td>{this.state.price}</td>
                    </tr>
                </table>
                {addToCartBtn}
            </div>
        </div>
        </div>
        );
    }
}