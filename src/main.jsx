import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClimaApp } from './ClimaApp'
import { NavBar } from './basePage/navBar'
import { Footer } from './basePage/Footer'

// import {wheaterApp} from './wheaterApp' // asi no sirve debe iniciarf ocn mayusculas
// import {appClima} from './WheaterApp'


createRoot(document.getElementById('root')).render(
// ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <ClimaApp/>
    {/* <div>Hola</div> */}
    {/* <appClima></appClima> */}
    <Footer/>
  </StrictMode>,
)
