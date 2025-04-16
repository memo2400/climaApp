import { useState } from "react";


export const forecast = () => {

    const [forecastData, setforecastData] = useState(null)
    const [iconoGrande,seticonoGrande] = useState(null)
    const [datosTraducidos, setdatosTraducidos] = useState(null)

    const fullUrl = "http://api.weatherapi.com/v1/forecast.json?q=auto:ip&key=306805565013442592d224449251104&days=3";
    const urlBase = "http://api.weatherapi.com/v1/forecast.json";
    const q = "auto:ip";
    const keys = "306805565013442592d224449251104";
    const idioma = "es";
    const dias = "3";

    const fetchForecast = async () => {

        const fulUrl = `${urlBase}?q=${q}&key=${keys}&days=${dias}`;
        const datosForecast = await fetch (fulUrl);
        const traduccion = await datosForecast.json();
        setforecastData(traduccion);
        
    }

    return ({
        datosTraducidos,
        forecastData,

        fetchForecast,
    
});


}