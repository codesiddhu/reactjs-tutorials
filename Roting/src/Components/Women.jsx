import DisplayProducts from "./DispalyProducts"
import {useContext} from 'react'
import { ProductContext } from "../Context/ProductContext"

const Women = () => {
    let FilterProducts = useContext(ProductContext);
        console.log(FilterProducts);
        let womenProducts = FilterProducts.filter((item) => item.category ==="Women");
        console.log(womenProducts);
  return (
    <div>
      <DisplayProducts products = {womenProducts}/>
    </div>
  )
}

export default Women