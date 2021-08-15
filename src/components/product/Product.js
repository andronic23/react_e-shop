import Attributes from "../ui//Attribute";
import Money from "../ui/Money";
import Image from "../ui/Image";

// nu corect o apelez ca sa mi se transmita ambii parametri
const Product = ( {product: { name, imageUrls}}, {money} ) =>{
   console.log(money)
    return (
        <li>
            <h2>{name}</h2>
            <Image  url={imageUrls} alt={name}/>
            <Money money={money}/>
        </li>
    )

}

export default Product