import React from 'react';
import './Common.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product';
import ProductService from '../service/product.service';
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cname: "",
      address: "",
      contact: "",
      orderPlaced: false
    };
    this.retrieveProducts = this.retrieveProducts.bind(this);
    // this.refreshList = this.refreshList.bind(this);
    // this.setActiveProduct = this.setActiveProduct.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.placeOrderHandler = this.placeOrderHandler.bind(this);
  }

  componentDidMount() {
    this.retrieveProducts();
  }
  retrieveProducts() {
    ProductService.getByCart()
      .then(response => {
        this.setState({
          products: response.data,
        });
        console.log("from get all: " + response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // this.setState({cartProducts: cartProductsList})
  // console.log(this.state.cartProducts);

  // refreshList() {
  //   this.retrieveProducts();
  //   this.setState({
  //     currentProduct: null,
  //     currentIndex: -1
  //   });
  // }

  // setActiveProduct(product, index) {
  //   this.setState({
  //     currentProduct: product,
  //     currentIndex: index
  //   });
  // }

    onChangeName(e) {
        this.setState({ cname: e.target.value })
    }
    
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }
    
    onChangeContact(e) {
        this.setState({ contact: e.target.value })
    }

    placeOrderHandler(){
        // console.log("place order button clicked");
        // this.state = {
        //     products: [],
        //     currentProduct: null,
        //     currentIndex: -1,
        //     cname: "",
        //     address: "",
        //     contact: "",
        //     orderPlaced: true
        //   };
        const productsTemp = {...this.state.products};

        
        let ps = productsTemp.map((product) => {
          return product.isInCart=1;
        })

        {this.setState({
          products: ps,
        });
      }

        // ProductService.update(id,data)
        // .then(response=>{console.log(response.data);})
        // .catch(e=>{console.log(e);})


        // alert("Thank you for your order!");
        // cartProducts.map((p) => {
            
        // }
        // )
    }

  render() {
    let emptyCartContent = null;
    let cartProductsList = null;
    let isCartEmpty=true;
    let shippingInput = null;
    let showThanks = null;

    const { products, currentProduct, currentIndex } = this.state;
    // cartProductsList = (
    //     <div className="row">
    //     {products && products.map((product) => {
    //         if(product.isInCart){
    //             isCartEmpty=false;
    //             return (
    //             <Product id={product.id}
    //             pid={product.pId}
    //             pname={product.pName}
    //             price={product.price}
    //             inList = "false"
    //             isInCart={product.isInCart}
    //             key={product.id}></Product>
    //             )
    //         }
    //     })}
    //     </div>
    // )
    cartProductsList = (
      <div className="row">
      {products && products.map((product) => {              
              return (
              <Product id={product.id}
              pid={product.pId}
              pname={product.pName}
              price={product.price}
              inList = "false"
              isInCart={product.isInCart}
              key={product.id}></Product>
              )
      })}
      </div>
  )

  
//   if(this.state.orderPlaced){
//     emptyCartContent = null;
//     shippingInput = null;
//     showThanks = <h4>Thank you for your order!</h4>
// }
// else if(isCartEmpty){
        
// }

  if(this.state.products.length == 0){
    emptyCartContent = <h4>Your cart is empty :(</h4>
  }
    else{
            shippingInput = <form>
                        <h4>Enter shipping details..</h4>
                        <div className="form-group">
                            <label htmlFor="cname">Name</label>
                            <input type="text" name="cname" id="cname" className="form-control" required 
                            value={this.state.name} onChange={this.onChangeName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" className="form-control" required 
                            value={this.state.address} onChange={this.onChangeAddress} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" name="contact" id="contact" className="form-control" required 
                            value={this.state.contact} onChange={this.onChangeContact} />
                        </div>
                        <button onClick={this.placeOrderHandler} className="btn btn-info">Place Order</button>
            </form>
        }
    return (
        <div className="container">
            {cartProductsList}{emptyCartContent}{showThanks}
            <p></p>
            {shippingInput}
        </div>
    )
  }
}