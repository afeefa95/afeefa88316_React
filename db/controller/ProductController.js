const { request } = require("http");
const db = require("../models");
const Products=db.Products;

//http://localhost:3500/api/products
exports.findAll=(req,resp)=>{
    Products.findAll()
        .then(data=>{resp.send(data)})   
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}

//http://localhost:3500/api/products/carts/show
exports.findAllByCart=(req,resp)=>{
  Products.findAll({
    where: {
      isInCart: 1
    }
  })
      .then(data=>{resp.send(data)})   
      .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}

//http://localhost:3500/api/products/7889
exports.findOne=(req,resp)=>{
    const id=req.params.id
    Products.findByPk(id)
        .then(data=>{resp.send(data)})   
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}

//http://localhost:3500/api/products/7889
exports.update = (req, res) => {
    const id = req.params.id;
  
    Products.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product of id="+id+" was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });
  };

//http://localhost:3500/api/products/7889
exports.delete=(req,resp)=>{
    const id=req.params.id
    Products.destroy({where: {id:id} })
        // .then(data=>{resp.send(data)})   
        .then(num=>{
            if(num==1){
                resp.send("record of id="+id+" is successfully deleted");
            }else{
                resp.send("can not delete record for id="+id);
            }

        })
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 

}

exports.create=(req,resp)=>{
    // Validate request
  if (!req.body.pId) {
    resp.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
    //read data from the request
    const newProduct={
        pId: req.body.pId,
        pName: req.body.pName,
        price: req.body.price,
        isInCart: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log("new product to be created: " + newProduct)
    Products.create(newProduct)
        .then(data=>{resp.send(data)})   
        .catch(err=>{resp.status(500).send({message: err.message|| "Error occured"})}); 
}



    


