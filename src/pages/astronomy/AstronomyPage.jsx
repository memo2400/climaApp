import { astronomy } from "../../hooks/astronomy/astronomy";
import imagenAstro from "../../assets/astronomy/sunrise.png";

export const AstronomyPage = () => {

    const handleSubmit = async(e) => {
        e.preventDefault ();

        cosultarAstronomia("puebla");

    }

    const {datosAstronomicos, ciudadEdoPais, cadenaAstronomia, astronomia, cosultarAstronomia} = astronomy();

    return (

        <>
            <div className="box">
                <h4 className="title has-text-centered"> Datos astronómicos</h4>
            
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form className="box" onSubmit={handleSubmit}>

                            <button className="button is-primary">Consultar</button>
                        </form>
                    </div>
                </div>

                {datosAstronomicos && (
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <h4 className="title has-text-centered"> {datosAstronomicos?.location?.name} </h4>
                            <h4 className="title has-text-centered my-5"> {ciudadEdoPais} </h4>
                        </div>
                        <div className="column is-half">
                            <h4 className="title has-text-centered"> {datosAstronomicos?.astronomy?.astro?.moon_phase} / Manual </h4>
                            <h4 className="title has-text-centered my-5"> {cadenaAstronomia[4]} {cadenaAstronomia[2]} / Cadena </h4>
                        </div>
                    </div>
                    )
                }
                { cadenaAstronomia && (
                    <div className="columns is-centered">
                            <table className="table table-is-center">
                                <thead></thead>
                                <tbody>                                    
                                    <tr><td>Sunrise: {astronomia?.sunrise}</td><td><img src={imagenAstro} width={100}></img></td></tr>
                                    <tr><td>Sunset: {astronomia?.sunset}</td><td><img src="../../assets/astronomy/sunrise.png"></img> </td></tr>
                                </tbody>
                            </table>
                    </div>
                            )
                            // : <p>Nada</p>
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