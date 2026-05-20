import {Link,Outlet} from "react-router-dom"
const ProductsPage = () => {
  return (
    <div>
         <aside>
         <Link to="/products">Men</Link>
         <Link to="/products/women">WoMen</Link>
         <Link to="/products/kids">Kids</Link>
         </aside>
         <article>
            <Outlet/>
         </article>
    </div>
  )
}

export default ProductsPage;