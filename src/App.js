import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Product';
import Cart from './component/Cart'
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import {Switch,Route } from 'react-router';
// import {Link } from 'react-router-dom';
function App() {
  return (
    <div className="background">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to={"/products"} className="nav-link">
                All Products
              </Link> */}
              <a href={"/products"}  className="nav-link">All Products</a>
            </li>
            <li className="nav-item">
              {/* <Link to={"/add"} className="nav-link">
                Add New Products
              </Link> */}
              <a href={"/add-product"}  className="nav-link">Add New Product</a>
            </li>
            <li className="nav-item">
              {/* <Link to={"/add"} className="nav-link">
                Add New Products
              </Link> */}
              <a href={"/cart"}  className="nav-link">Cart</a>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
            <Route exact path={["/", "/products"]} component={ProductList} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/products/:id" component={Product} />
          </BrowserRouter>
        </div>
        <nav className="navbar navbar-expand navbar-dark bg-dark footer">
          <div className="navbar-nav mr-auto">
          <li className="nav-item text-center">&copy; My Store. All rights reserved. 2021
          </li>
          </div>
        </nav>
      </div>     
  );
}

export default App;
//Links=>switch(){route=>Component}
//switch (route)
//Route=>Component
// http://localhost:3001/add => AddProduct
// http://localhost:3001/=> ProductList
//http://localhost:3001/products/1=>Product


// import './App.css';
// import ProductList from './ProductList'
// import Order from './Order.js'

// function App() {
//   return (
//     <div className="App">
//       <ProductList></ProductList>
//       {/* <Order></Order> */}
//     </div>
//   );
// }

// export default App;
