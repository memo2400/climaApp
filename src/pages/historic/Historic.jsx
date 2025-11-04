import { useState } from "react"
import { Form } from "react-router"
import { historicClimate } from "../../hooks/historic/historic.js"

import { VictoryChart, VictoryLine, VictoryTheme } from "victory";


export const HistoricPage = () => {

    const {historicClimateData, segundaHora,
        queryHistoric} = historicClimate();

    const manejarSubmit = async(e) => {
        e.preventDefault ();

        obtenerFechaHoy();
 
        alert(`se hizo submit ${ciudad}`)
        alert(`se leyo el env ${import.meta.env.VITE_URL_BASE}`)
        alert(`La data demo es: ${historicClimateData}`)
        queryHistoric({ciudad, fecha});
        alert(`La data consultada es: ${historicClimateData}`)

    }

    const [ciudad, setCiudad] = useState("cordoba veracruz");
    const [fecha, setFecha] = useState("2025-11-01");
    
    const obtenerFechaHoy = () => {
        
        const tiempoTranscurrido = Date.now();
        const hoy = new Date (tiempoTranscurrido);
        const hoy_ISO = hoy.toISOString();

        var arrayDeCadenas = hoy_ISO.split("T");
        const hoy_fecha = arrayDeCadenas[0];
        setFecha(hoy_fecha);   
    }



    const definirCiudad = (e) => {
        setCiudad(e.target.value)
    }

    // temperatura dommy borrar
    const temperaturaDummy = [
        {
            "temp_c": [8.5, 10, 13.5, 18, 20, 24.5, 22, 10, 9.8],
            "time": "2025-10-24 00:00",
        },
    ]


    return(
        <>
            <div className="box">
                <h1 className="title has-text-centered">Historical climate</h1>

                <div className="columns is-centered">
                <div className="column is-one-quarter is-centered">
                <form onSubmit={manejarSubmit}>
                    <p className="control has-icons-left has-icons-right my-4">
                        {/* Si no se pone en este orde el icono izquierdo no funciona de colores */}
                        <input className="input" type="text" placeholder="Write your city" onChange={definirCiudad}></input>
                        <span className="icon is-small is-left"><i className="fas fa-city"></i></span>
                        <span className="icon is-right"><i className="fas fa-check"></i></span>
                    </p>

                    <button className="button is-info is-dark is-centered">
                        Consultar
                    </button>
                </form>
                
                </div>
                </div>

            </div>

            {segundaHora && (
                <div className="box columns is-centered mb-5">
                    <p>La segunda hora es: {segundaHora}</p>
                </div>
            )
            }

            <div className="box columns is-one-quarter is-centered mb-5">
                <div className="column is-one-quarter box">
                    
                    <VictoryChart theme={VictoryTheme.clean}>                        
                        <VictoryLine data={temperaturaDummy[0]?.temp_c.map(
                            (temp_c, position) => ({
                            x: position,
                            y: temp_c}), 
                        )}>

                        </VictoryLine>
                    </VictoryChart>
                </div>
            </div>

            <div className="box columns is-centered">
                {historicClimateData && (
                    <div className="column is-one-quarter box">
                        <pre>
                            {JSON.stringify(historicClimateData, null, 2)}
                        </pre>
                    </div>
                )}

            </div>
        </>
    )

}