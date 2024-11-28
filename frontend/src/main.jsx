import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BazaarMatrix from './components/bazaarMatrix'
import "./global.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BazaarMatrix />
  </StrictMode>,
)
