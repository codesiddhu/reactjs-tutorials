import DisplayProducts from "./DispalyProducts"
import {useContext} from 'react'
import { ProductContext } from "../Context/ProductContext"
 
const Kids = () => {
    let FilterProducts = useContext(ProductContext);
        console.log(FilterProducts);
        let kidsProducts = FilterProducts.filter((item) => item.category ==="Kids");
        console.log(kidsProducts);
  return (
    <div>
      <DisplayProducts products = {kidsProducts}/>
    </div>
  )
}

export default Kids
