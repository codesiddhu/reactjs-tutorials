import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routes}>
    <StrictMode>
    <App />
  </StrictMode>,
  </RouterProvider>
)
