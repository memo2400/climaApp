import { useState } from "react"
import { Form } from "react-router"
import { historicClimate } from "../../hooks/historic/historic.js"


export const HistoricPage = () => {

    const {historicClimateData, segundaHora,
        queryHistoric} = historicClimate();

    const manejarSubmit = async(e) => {
        e.preventDefault ();

        alert(`se hizo submit ${ciudad}`)
        alert(`se leyo el env ${import.meta.env.VITE_URL_BASE}`)
        alert(`La data demo es: ${historicClimateData}`)
        queryHistoric({ciudad, fecha});
        alert(`La data consultada es: ${historicClimateData}`)
    }

    const [ciudad, setCiudad] = useState("cordoba veracruz");
    const [fecha, setFecha] = useState("2025-11-01");

    const definirCiudad = (e) => {
        setCiudad(e.target.value)
    }


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