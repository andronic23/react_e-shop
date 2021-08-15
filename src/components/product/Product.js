import Attributes from "../../models/Attributes";
import Money from "../ui/Money";
import Image from "../ui/Image";

const Product = ( {product: { name, imageUrls}}, { price: { amount, currency}}  ) =>{
    return (
        <li>
            <h2>{name}</h2>
            <Image  url={imageUrls} alt={name}/>
            <Money amount={amount} currency={currency}/>
        </li>
    )
}

export default Product