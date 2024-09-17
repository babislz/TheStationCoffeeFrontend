import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Order from './pages/order'
// import Order from './pages/order/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Order/>
  </StrictMode>,
)
