import ProductModel from "./models/Product"
import Product from "./components/product/Product"
import Money from "./models/Money"

function App(props) {

    const products = [
      new ProductModel(1,"BMV", "https://live.staticflickr.com/4009/4611639006_27372e2401_b.jpg","daa", "50","USD", "NAME"),
      new ProductModel(2,"Audi", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Audi_A7_S_Line_40_TDi_S-A_2.0.jpg/1200px-2018_Audi_A7_S_Line_40_TDi_S-A_2.0.jpg"),
      new ProductModel(3,"Porsche", "https://cdn.motor1.com/images/mgl/0om6j/s3/porsche-911-gt3-rs-manthey-performance-kit-nurburgring-record.jpg"),
    ]
   
    return (
      <div className="App">

        { products.map(product=>
          <div>
            <Product product={product} />
          </div>
        )}
       
      
      </div>
    )
}

export default App;
