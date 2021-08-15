import Attributes from "./Attributes";
import Money from "./Money";

class Product {
    constructor(id, name, imageUrls, money, attributes, description) {
        this.id = id
        this.name = name
        this.imageUrls = imageUrls
        this.money = money
        this.attributes = attributes
        this.description = description
    }
    
    // toPOJO() {
       
    //     let price = {
    //         standard: new Money(100.00, "USD"),
    //         discount: new Money(50.00, "USD"),
    //      }
    //      let attributes = [ new Attributes("Atributes Name", 40) ]
    //      return{
    //         id : this.id,
    //         name : this.name,
    //         imageUrls: this.imageUrls,
    //         price: [ this.price.standard,
    //                 this.price.discount
    //         ],
    //         description:this.description,
    //         attributes:this.attributes
    //     }
       
    // }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
}
export default Product;