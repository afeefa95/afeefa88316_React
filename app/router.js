module.exports = app => {
    /// import my controller = make call to findall
    const ProductController=require('../db/controller/ProductController');
      
    var router = require("express").Router();

    router.get("/", ProductController.findAll);
    router.get("/:id", ProductController.findOne);
    router.post("/add", ProductController.create);
    router.put("/:id", ProductController.update);
    router.delete("/:id", ProductController.delete);
    router.get("/carts/show", ProductController.findAllByCart);
    // router.update("/update", ProductController.delete);

    // register router /api/products
    app.use("/api/products",router);  
    }
    