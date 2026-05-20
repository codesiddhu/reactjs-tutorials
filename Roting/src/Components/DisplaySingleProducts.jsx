import { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import {useParams} from 'react-router-dom'
const DisplaySingleProducts = () => {
    let {id} = useParams()
    const products = useContext(ProductContext);
    const product = products.find((p) => p.id ===Number(id));
    console.log(id)
  return (
    <div>
      
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.cloth}</p>
          <button>Add to Cart </button>
        </div>
    </div>
  )
}

export default DisplaySingleProducts
