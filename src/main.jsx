import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {wheaterApp} from './wheaterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <wheaterApp />
  </StrictMode>,
)
