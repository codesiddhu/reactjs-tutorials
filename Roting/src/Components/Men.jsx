import {useContext} from 'react'
import { ProductContext } from '../Context/ProductContext'
import DisplayProducts from './DispalyProducts';
const Men = () => {
    let FilterProducts = useContext(ProductContext);
    console.log(FilterProducts);
    let menProducts = FilterProducts.filter((item) => item.category ==="Men");
    console.log(menProducts);
  return (
    <div>
        <DisplayProducts products = {menProducts}/>
    </div>
  )
}

export default Men