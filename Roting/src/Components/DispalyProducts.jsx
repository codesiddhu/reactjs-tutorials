import {Link} from "react-router-dom"
const DisplayProducts = ({products}) => {
  return (
    <div>
        {products.map((product) => {
            return (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <p>{product.cloth}</p>

                    <Link to={`/single/${product.id}`}>View More</Link>
                </div>
            )
        })}
    </div>
  )
}

export default DisplayProducts;
