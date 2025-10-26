import { useState } from "react";
import { fetchClima } from "./climaActual/consultaClimaActual";

export const ClimaApp = () => {

    const [ciudad, setCiudad] = useState("cd.");

    const {
        wheaterData,
        iconoGrande,

        fetchClimaActual,
    } = fetchClima();

    const handleCambioCD = (e) =>{

        setCiudad(e.target.value);
        console.log(`La ciudad es ${ciudad}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  //para que no se actualiza
        if (ciudad.length > 3 
            // (ciudad)
            ? await fetchClimaActual({ciudad})      // debe ser en llaves de ambos lados o, como solo es una sola strin se pued ir solo con ()
            : console.log('No city'));

            
        //setwheaterData = await fetchClima(ciudad)

        
        // if (ciudad.length > 3 )
        //     {
        //         await fetchClimaActual({ciudad});
        //     } else {
        //         console.log('No city');
        //     }

    }
    

    return(
        <div className="is-flex is-flex-direction-column min-vh-100">
        <div className="box">
            <h2 className="title is-2 has-text-centered"> Clima Actual </h2>

            <div className="columns is-centered">
            <div className="column is-half">
            <form className="box" onSubmit={handleSubmit}>
                    <p className="control has-icons-left has-icons-right my-4">
                        
                        <input className="input" type="text" placeholder="Busque su ciudad" onChange={handleCambioCD}/>
                        
                        <span className="icon is-small is-left">
                            <i className="fas fa-city"></i>
                        </span>

                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                    <button className="button is-success is-fullwidth" type="submit">Buscar</button>
            </form>
            </div>
            </div>

            {/* si wheteer data es true, se cambia */}
            { wheaterData && (
                <div className="columns is-centered my-5">
                    <div className="box column is-one-third">
                        <h4 className="title is-4 has-text-centered has-text-info">Ciudad: {wheaterData?.location?.name}, {wheaterData?.location?.country}</h4>

                        <div className="columns">
                            <div className="column">
                                <p className="mt-6">Humedad: {wheaterData?.current?.humidity} %</p>
                                <p>Viento: a {wheaterData?.current?.wind_kph} km/h</p>
                                <p>Rayos UV: {wheaterData?.current?.uv}</p>
                            </div>

                            <div className="column">
                                <p className="has-text-right-desktop is-size-3">{wheaterData?.current?.temp_c} °C</p>
                                <p className="has-text-right-desktop">{wheaterData?.current?.condition?.text}</p>
                
                                <img src={iconoGrande} className="is-pulled-right"/>
                                
                            </div>                   
                        </div>
                    </div>
                </div>
            )}


        </div>
        </div>
    );
}