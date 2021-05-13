// import React from 'react';
// import Product from './Product';


// //productList=[p1,p2,p3]
// class ProductList extends React.Component{

//     state = {
//         productsList : [
//             {pid: 101, pname:'Pepsi', price: 100.00},
//             {pid: 102, pname:'Coke', price: 100.00},
//             {pid: 103, pname:'Fanta', price: 100.00},
//         ],
//         showProducts : true
//     }

//     toggleProductHandler = () => {
//         console.log("toggle clicked");
//         const doesShow = this.state.showProducts;
//         this.setState({showProducts : !doesShow});
//     }

//     changeNameHandler = (event, productId) => {
//         const productIndex = this.state.productsList.findIndex(p => {
//             return p.pid===productId;
//         });
//         const product = {
//             ...this.state.productsList[productIndex]
//         };
//         product.pname = event.target.value;        
//         const productsList=[...this.state.productsList];
//         productsList[productIndex]=product;
//         this.setState({productsList: productsList});
//     }

//     render(){

//         let productsList=null;

//         if(this.state.showProducts){
//             productsList = (
//             <div>
//                 {this.state.productsList.map((product) => {
//                    return <div>
//                         <Product key={product.pid} pid = {product.pid} pname = {product.pname} price = {product.price}
//                             changed={(event) => this.changeNameHandler(event, product.pid)}>

//                         </Product>
//                     </div>;
                
//                 })}
//             </div>
//             );
//         }

//         return(
//             <div>
//             <button onClick={this.toggleProductHandler}>Toggle Products</button>
//             {productsList}
//             </div>
//             // <div>
//             //     {this.state.productsList.map((product) => {
//             //         return 
//             //         <div>
//             //             <Product key={product.pid} pid = {product.pid} pname = {product.pname} price = {product.price}></Product>
//             //         </div>;
//             //     })}
//             // </div>
//         );
//     }
// }

// export default ProductList;