
import {Router,Routes} from "react-router-dom "
const App = () => {
  return (
    <div>
      <Routes>
           <Router path = "/homepage"element={<HomePage/>}></Router>
        </Routes>
    </div>
  )
}

export default App
