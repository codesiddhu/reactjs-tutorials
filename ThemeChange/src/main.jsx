
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themeprovider from './components/context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <Themeprovider> 
   
    <App />

  </Themeprovider>,
)
