import { useState } from "react";
import { astronomy } from "../../hooks/astronomy/astronomy";
import sunriseImg from "../../assets/astronomy/sunrise.png";
import sunsetImg from "../../assets/astronomy/sunset.png";
import moonriseImg from "../../assets/astronomy/moonrise.png";
import moonsetImg from "../../assets/astronomy/moonset.png";

export const AstronomyPage = () => {

    const [ciudad, setCiudad] = useState("cd.");

    const handleSubmit = async(e) => {
        e.preventDefault ();

        console.log(ciudad);

        //cosultarAstronomia("francia");
        cosultarAstronomia({ciudad});

    }
    
    const cambioCiudad = (e) => {
        setCiudad(e.target.value);
    }

    const {datosAstronomicos, ciudadEdoPais, cadenaAstronomia, astronomia, cosultarAstronomia} = astronomy();

    return (
        <>
            <div className="box">
                <h4 className="title has-text-centered"> Datos astronómicos</h4>
            
                <div className="columns is-centered">
                    <div className="column is-one-quarter">
                        <form className="box" onSubmit={handleSubmit}>
                            
                            <p className="control has-icons-left has-icons-right my-4">
                                <input className="input" type="text" placeholder="Busque su ciudad" onChange={cambioCiudad}/>
                        
                                <span className="icon is-small is-left">
                                    <i className="fas fa-city"></i>
                                </span>

                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>

                            <button className="button is-primary is-centered is-light is-fullwidth">Consulta</button>
                        </form>
                    </div>
                </div>

                {datosAstronomicos && (
                    <div className="columns is-centered mb-5">
                        <div className="column is-half">
                            <h5 className="title has-text-centered my-5"> {ciudadEdoPais} </h5>
                            <p className="has-text-centered">Hora local: {datosAstronomicos?.location?.localtime}</p>
                        </div>
                    </div>
                    )
                }
                { cadenaAstronomia && (
                    <div className="columns is-centered mt-4 mb-4">
                            <table className="table table-is-center is-bordered">
                                <thead></thead>
                                <tbody>                                    
                                    <tr><td className="is-vcentered" width={250}>Sunrise: {astronomia?.sunrise}</td><td><img src={sunriseImg} width={100}></img></td></tr>
                                    <tr><td className="is-vcentered">Sunset: {astronomia?.sunset}</td><td><img src={sunsetImg} width={100}></img> </td></tr>

                                    <tr><td className="is-vcentered">Moonrise: {astronomia?.moonrise}</td><td><img src={moonriseImg} width={100}></img> </td></tr>
                                    <tr><td className="is-vcentered">Moonset: {astronomia?.moonset}</td><td><img src={moonsetImg} width={100}></img> </td></tr>
                                </tbody>
                            </table>
                    </div>
                    )
                }
            </div>


            <div className="box columns is-centered">
                
                {datosAstronomicos && (
                    
                    <div className="column is-one-quarter box">
                        <pre className="my-5">
                            {JSON.stringify(datosAstronomicos, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        
        </>
    )

}