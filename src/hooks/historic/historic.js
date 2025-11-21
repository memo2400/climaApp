import { useEffect, useState } from "react"

export const historicClimate = () => {

    const [historicClimateData, setHistoricClimateData] = useState ("dataDemo");

    const queryHistoric = async ({ciudad, fecha_actual}) => {

        const urlBase = import.meta.env.VITE_URL_BASE;
        const urlHistoric = import.meta.env.VITE_URL_HISTORIC;
        const llave = import.meta.env.VITE_LLAVE;

        const urlCompleta = `${urlBase}${urlHistoric}?q=${ciudad}&key=${llave}&dt=${fecha_actual}`;
        //  alert(`LA url consultar es: ${urlCompleta}`);

        const historicData = await fetch (urlCompleta);
        const JsonData = await historicData.json();

        setHistoricClimateData(JsonData);

    }

    const [segundaHora, setSegundaHora] = useState("sin informacion");
    const [historico, setHistorico] = useState(null);
    const [temperaturaJSON, setTemperaturaJSON] = useState([]);
    const [max_temp, setmax_temp] = useState (-Infinity);
    const [min_temp, setmin_temp] = useState (Infinity);
    let rango_temperatura = null;
    
    useEffect (() =>{
        if(historicClimateData?.forecast?.forecastday[0]?.hour){
            setSegundaHora (historicClimateData?.forecast?.forecastday[0]?.hour[1]?.time);
            console.log(`La segunda hora es: ${segundaHora}`);
        }

        if(historicClimateData?.forecast?.forecastday[0]?.hour){
          for (let llave in historicClimateData?.forecast?.forecastday[0]?.hour){
            console.log(`cada elemento: ${llave.temp_c}°C ${llave.time}`);
          }
          
          let nuevaTemperatura;

          historicClimateData.forecast.forecastday.forEach(dia => {
            setTemperaturaJSON ([]);

            let index = 1;
            let max = -Infinity
            let min = Infinity

            const nuevaTemperaturas = dia.hour.map(hora => {
              console.log(`La hora es: ${hora.time} y tempe ${hora.temp_c}`);
              // nuevaTemperatura = `{"time": "${hora.time}", "temp_c": ${hora.temp_c}}`;
              // nuevaTemperatura = `{x: ${index}, y: ${hora.temp_c}}`;
              nuevaTemperatura = {x: index, y: hora.temp_c};
              // temperaturaJSON.push(nuevaTemperatura);

              if (hora.temp_c > max){max = hora.temp_c}
              if (hora.temp_c < min){min = hora.temp_c}
              
              index++;
              return nuevaTemperatura;
              
            });

            setTemperaturaJSON (prev => [...prev, ...nuevaTemperaturas]);
            setmax_temp(max);
            setmin_temp(min);
            
          });

          console.log(`El array final es: ${temperaturaJSON}`);

        }
                  console.log(`La temp Max: ${max_temp}`);
          console.log(`La temp Min: ${min_temp}`);

      },
      [historicClimateData]
    );

            

    return {
      historicClimateData,
      segundaHora,
      temperaturaJSON,
      max_temp,
      min_temp,

      queryHistoric,
    };

}