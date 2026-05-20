import { createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Layout"
import Login from "../Components/Login/Login"
import Regester from "../Components/Regester/Regester"

const Routes = () => {
    let routes = createBrowserRouter([
        {
            "path": "/",
             "element":<Layout/>,
             "children":[
                {
                    "path": "/login",
                    "element": <Login/>
                },
                {
                    "path":"/register",
                    "element": <Regester/>
                }
             ]

        }
    ])
  return (
    <div>
      
    </div>
  )
}

export default Routes;
