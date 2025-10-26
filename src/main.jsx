import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClimaApp } from './ClimaApp'
import { NavBar } from './basePage/NavBar'
import { Footer } from './basePage/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForecastPage } from './pages/forecast/ForecastPage'
import { AstronomyPage } from './pages/astronomy/AstronomyPage'

// import {wheaterApp} from './wheaterApp' // asi no sirve debe iniciarf ocn mayusculas
// import {appClima} from './WheaterApp'


createRoot(document.getElementById('root')).render(
// ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route exact path= "/" element = {<ClimaApp/>} />
      <Route exact path= "/pronostico" element = {<ForecastPage/>} />
      <Route exact path= "/astronomia" element = {<AstronomyPage/>} />
      {/* <div>Hola</div> */}
      {/* <appClima></appClima> */}
      
      {/* <Footer/> */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
