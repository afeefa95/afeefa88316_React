import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product';
import ProductService from '../service/product.service';
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
    };
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this)
  }

  componentDidMount() {
    this.retrieveProducts();
  }
  retrieveProducts() {
    ProductService.getAll()
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
  }

  render() {
    // const products = this.state.products;
    // return <h1>ProductList</h1>
    const { products, currentProduct, currentIndex } = this.state;
    return (
      <div className="container">
        <div className="row">
        {/* <div className="row table table-striped table-dark">
          <div className="col-sm-1">Pid</div>
          <div className="col-sm-3">Product Name</div>
          <div className="col-sm-3">Price</div>
          <div className="col-sm-2">Edit</div>
          <div className="col-sm-2">Delete</div>
        </div> */}
        {products && products.map((product) => {
          return (           
            <Product id={product.id}
            pid={product.pId} 
            pname={product.pName} 
            price={product.price}
            isInCart={product.isInCart}
            inList = "true"
            key={product.id}></Product>
          )
        })}
        </div>
      </div>
    )
  }
}