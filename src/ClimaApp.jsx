import { useState } from "react";


export const ClimaApp = () => {

    const [ciudad, setCiudad] = useState("gorda");

    const handleCambioCD = (e) =>{

        setCiudad(e.target.value);
        console.log(`La ciudad es ${ciudad}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  //para que no se actualiza
        if (ciudad.length > 3 ? fetchClima(): console.log('No city'));

    }

    const [wheaterData, setWheaterData] = useState(null)
    const urlBase = "http://api.weatherapi.com/v1/current.json";
    const keys = "306805565013442592d224449251104";
    const idioma = "es"

    const fetchClima = async() => {
        try{
        console.log("Si hay ciudad");
        const datosRecibidos = await fetch(`${urlBase}?q=Paris&key=${keys}&lang={idioma}`);
        const datosTraducidos = await datosRecibidos.json();
        setWheaterData(datosTraducidos);
        alert(`Good`)
        // setWheaterData(await GET );
        }
        catch (error){
            alert(`Ocurrio el error :"${error}"`)
        }
    };

    // http://api.weatherapi.com/v1/current.json?q=Paris&key=306805565013442592d224449251104

    return(
        <div className="box">
            <h2 className="title is-2 has-text-centered"> Clima Actual </h2>
            <h3>{ciudad}</h3>

            <div className="columns is-centered">
            <div className="column is-half">
            <form className="box" onSubmit={handleSubmit}>
                    <p className="control has-icons-left has-icons-right">
                        
                        <input className="input my-4" type="text" placeholder="Busque su ciudad" onChange={handleCambioCD}/>
                        
                        {/* <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span> */}
                    </p>
                    <button className="button is-success is-fullwidth" type="submit">Buscar</button>
            </form>
            </div>
            </div>

            {/* si wheteer data es true, se cambia */}
            { wheaterData && (
                <div className="columns is-centered my-5">
                    <div className="box column is-one-third">
                        <h4 className="title is-4 has-text-centered has-text-info">Ciudad: {wheaterData?.location?.name}</h4>

                        <div className="columns">
                            <div className="column">
                                <p className="mt-5">Humedad: {wheaterData?.current?.humidity} %</p>
                                <p>Viento: a {wheaterData?.current?.wind_kph} km/h</p>
                                <p>Rayos UV: {wheaterData?.current?.uv}</p>
                            </div>

                            <div className="column">
                                <p className="has-text-right-desktop is-size-3">{wheaterData?.current?.temp_c} °C</p>
                                <p className="has-text-right-desktop">{wheaterData?.current?.condition?.text}</p>
                
                                {/* <span className="icon is-small is-center"> */}
                                    {/* <i src={`https:{wheaterData?.current?.condition?.icon}`}></i> */}
                                <i src={`https:{wheaterData?.current?.condition?.icon}`}/>
                                {/* </span> */}
                            </div>

                       
                        </div>
                    </div>
                </div>
            )}
                    
{/* <div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
</div> */}
                {/* </div> */}

        </div>
    );
}