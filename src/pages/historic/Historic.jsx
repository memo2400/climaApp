import { useState } from "react"
import { Form } from "react-router"
import { historicClimate } from "../../hooks/historic/historic.js"
import _ from 'lodash'

import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLegend, VictoryLine, VictoryTheme } from "victory";


export const HistoricPage = () => {

    const {historicClimateData, segundaHora, temperaturaJSON, max_temp, min_temp,
        queryHistoric} = historicClimate();

    const manejarSubmit = async(e) => {
    e.preventDefault ();

    obtenerFechaHoy();
         
    queryHistoric({ciudad, fecha});        

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

    // DEMO temperatura dommy borrar
    // const temperaturaDummy = [
    //     {
    //         "temp_c": [8.5, 10, 13.5, 18, 20, 24.5, 22, 10, 9.8],
    //         "time": "2025-10-24 00:00",
    //     },
    // ]

    const data2=[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 },
    ];

    const data3=[
        {x: 1, y: 14.5},{x: 2, y: 14.4},{x: 3, y: 14.3},{x: 4, y: 14.4},{x: 5, y: 14.6},{x: 6, y: 14.7},{x: 7, y: 14.9},{x: 8, y: 15.6},{x: 9, y: 16.2},{x: 10, y: 16.8},{x: 11, y: 18.3},{x: 12, y: 19.6},{x: 13, y: 20.9},{x: 14, y: 21.4},{x: 15, y: 21.5},{x: 16, y: 21.6},{x: 17, y: 20.8},{x: 18, y: 20},{x: 19, y: 19.3},{x: 20, y: 18},{x: 21, y: 17},{x: 22, y: 16},{x: 23, y: 15.2},{x: 24, y: 14.8}
    ];

    return(
        <>
            <div className="box">
                <h1 className="title has-text-centered">Historical climate</h1>

                <div className="columns is-centered">
                <div className="column is-one-quarter is-centered">
                <form onSubmit={manejarSubmit}>
                    <p className="control has-icons-left has-icons-right my-4">
                        {/* Si no se pone en este orde el icono izquierdo no funciona de colores */}
                        <input className="input" type="text" placeholder="Write your city and country" onChange={definirCiudad}></input>
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

            { historicClimateData?.location?.name && (
                <div>
                    <div className="box has-text-centered mb-5">                    
                        <h4 className="title is-3">{`${historicClimateData?.location?.name}, ${historicClimateData?.location?.region}, ${historicClimateData?.location?.country}`}</h4>
                        {/* <br/> */}
                        <h5 className="subtitle is-4">Fecha: {historicClimateData?.forecast?.forecastday[0]?.date}</h5>
                        <h4>{max_temp} | {min_temp}</h4>
                    </div>
                </div>                
                )
            }

            {/* {segundaHora && (
                <div className="box columns is-centered mb-5">
                    <p>La segunda hora es: {segundaHora}</p>                    
                </div>
            )
            } */}

            {/* DEMO */}
            {/* <div className="box columns is-one-quarter is-centered mb-5">
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
            </div> */}

            {temperaturaJSON[0]?.x && <div className="box columns is-one-quarter is-centered mb-5">
                <div className="column is-one-quarter box">
                    
                    <VictoryChart theme={VictoryTheme.clean}>                        
                        
                        <VictoryLine data={temperaturaJSON}>
                        </VictoryLine>

                        <VictoryAxis
                            dependentAxis
                            label="Temperatura"
                            tickValues={_.range(min_temp > 0 ? 0 : min_temp, max_temp, 5)}
                            tickFormat={(value) => `${value} °C`}

                            style={{
                                axis: {
                                  stroke: "transparent",
                                },
                                axisLabel: {
                                  fontSize: 8,
                                  padding: 50,
                                },
                                tickLabels: {
                                  fontSize: 10,
                                },
                                grid: {
                                  stroke: "#d9d9d9",
                                  size: 5,
                                },
                            }}

                        />

                        <VictoryAxis
                            tickValues={_.range(0, 23, 2)}
                            label={`Horas del día: ${historicClimateData?.forecast?.forecastday[0]?.date}`}

                            style={{
                                axisLabel: {
                                  fontSize: 10,                                  
                                },
                            }}
                        />

                        {/* <VictoryLegend
                            itemsPerRow={1}
                            x={50}
                            y={220}
                            data={"Temperatura ultimo dia"}
                        /> */}

                        <VictoryLabel
                            text="Temperatura último dia"
                            dx={28}
                            dy={18}

                            style={{
                                ...VictoryTheme.clean.label,
                                fontSize: 11,
                            }}
                        />
                        
                    </VictoryChart>
                </div>
            </div>
            }

            <div className="box columns is-centered">
                {historicClimateData && (
                    <div className="column is-one-quarter box">
                        <pre>
                            {/* {JSON.stringify(temperaturaJSON, null, 2)} */}
                        </pre>
                        <pre>
                            {/* {JSON.stringify(historicClimateData, null, 2)} */}
                        </pre>
                    </div>                    
                )}

            </div>
        </>
    )

}