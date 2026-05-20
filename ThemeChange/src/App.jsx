import { useContext } from 'react'
import { themeContext } from './components/context/ThemeContext';
const App = () => {
  let datafromcontext = useContext(themeContext);
  console.log(datafromcontext);
  return (
    <div style ={datafromcontext.themChange()}>
      <button onClick={()=>datafromcontext.themeChangeValue("dark")}>Dark</button>
      <button onClick={()=>datafromcontext.themeChangeValue("light")}>light</button>
    </div>
  )
}

export default App