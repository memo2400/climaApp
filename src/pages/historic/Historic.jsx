import { useState } from "react"
import { Form } from "react-router"


export const HistoricPage = () => {

    const manejarSubmit = () => {
        alert(`se hizo submit ${ciudad}`)
    }

    const [ciudad, setCiudad] = useState("cordoba veracruz");

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
        </>
    )

}