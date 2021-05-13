import React from 'react';
import ProductService from '../service/product.service';
export default class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            pId: "",
            pName: "",
            price: 0.0,
            isInCart: false,
            published: false,
            submitted: false
        }
        this.onChangePid = this.onChangePid.bind(this);
        this.onChangePname = this.onChangePname.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.newProduct = this.newProduct(this);
    }
    onChangePid(e) {
        this.setState({ pId: e.target.value })
    }
    onChangePname(e) {
        this.setState({ pName: e.target.value })
    }
    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }

    saveProduct() {
        const data = {
            pId: this.state.pId,
            pName: this.state.pName,
            price: this.state.price,

        };
        ProductService.create(data)
                      .then(response=>{
                          this.setState({
                              pId:response.pid,
                              pName:response.pname,
                              price:response.price,
                              isInCart:response.isInCart,
                              published:response.data.published,
                              submitted:true
                          });
                          console.log(response.data);
                      })
                      .catch(e=>{console.log(e);})
    }
    newProduct() {
        console.log("add button clicked!")
        this.setState({
            id: null,
            pId: 0,
            pName: "",
            price: 0.0,
            isInCart: false,
            published: false,
            submitted: false
        });
    }


    render() {
        // return <h1>Add Product</h1>
        return(
        <div>
            {this.state.submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    {/* <button className="btn btn-info" onClick={this.newProduct}>
                        Add More
                    </button> */}
                </div>
            ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="pId">Product id</label>
                            <input type="text" name="pId" id="pId" className="form-control" required 
                            value={this.state.pId} onChange={this.onChangePid} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pName">Product Name</label>
                            <input type="text" name="pName" id="pName" className="form-control" required 
                            value={this.state.pName} onChange={this.onChangePname} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Unit price</label>
                            <input type="text" name="price" id="price" className="form-control" required 
                            value={this.state.price} onChange={this.onChangePrice} />
                        </div>
                        <button onClick={this.saveProduct} className="btn btn-info">Submit </button>

                    </div>
                )}
        </div>
        );
    }
}