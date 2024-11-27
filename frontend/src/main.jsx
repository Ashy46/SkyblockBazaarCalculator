import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BazaarMatrix from './components/bazaarMatrix'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BazaarMatrix />
  </StrictMode>,
)
