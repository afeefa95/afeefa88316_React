import http from './axios-connect';
class ProductService{
    getAll(){
        return http.get("/products");
    }
    getByCart(){
        return http.get("/products/carts/show");
    }
    get(id){
        return http.get(`/products/${id}`);
    }
    create(data){
        return http.post("/products/add",data)
    }
    update(id,data){
        return http.put(`/products/${id}`,data);
    }
    delete(id){
        return http.delete(`/products/${id}`);
    }
    deleteAll(){
        return http.delete(`/products`);
    }
    findByPname(pname){
        return http.get(`/products?pname=${pname}`);
    }
}

export default new ProductService();