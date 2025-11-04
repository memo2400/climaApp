import { useEffect, useState } from "react"

export const historicClimate = () => {

    const [historicClimateData, setHistoricClimateData] = useState ("dataDemo");

    const queryHistoric = async ({ciudad, fecha}) => {

        const urlBase = import.meta.env.VITE_URL_BASE;
        const urlHistoric = import.meta.env.VITE_URL_HISTORIC;
        const llave = import.meta.env.VITE_LLAVE;

        const urlCompleta = `${urlBase}${urlHistoric}?q=${ciudad}&key=${llave}&dt=${fecha}`;
        alert(`LA url consultar es: ${urlCompleta}`);

        const historicData = await fetch (urlCompleta);
        const JsonData = await historicData.json();

        setHistoricClimateData(JsonData);

    }

    const [segundaHora, setSegundaHora] = useState("sin informacion");
    const [historico, setHistorico] = useState(null);
    useEffect (() =>{
        if(historicClimateData?.forecast?.forecastday[0]?.hour){
            setSegundaHora (historicClimateData?.forecast?.forecastday[0]?.hour[1]?.time);
            console.log(`La segunda hora es: ${segundaHora}`);
        }

        if(historicClimateData?.forecast?.forecastday[0]?.hour){
          for (let llave in historicClimateData?.forecast?.forecastday[0]?.hour){
            console.log(`cada elemento: ${llave.temp_c}°C ${llave.time}`);
          }
        }



      },
      [historicClimateData]
    );

    return {
      historicClimateData,
      segundaHora,

      queryHistoric,
    };

}