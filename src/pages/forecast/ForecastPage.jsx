import { useEffect, useState } from "react";
import { forecast } from "../../hooks/forecast/forecast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

export const ForecastPage = () => {

    const {
        datosTraducidos,
        forecastData,

        fetchForecast,
        fetchForecast2,
    } = forecast();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // await fetchForecast();
        await fetchForecast2({ciudad, diasPronostico});
        console.log("se hizo la consulta forecast")
    }

    const [cadenaPronostico, setcadenaPronostico] = useState([]);

    useEffect( () => {
        
        if (forecastData?.forecast?.forecastday)
        {
            const datoGrafica = forecastData?.forecast?.forecastday.flatMap ( dia =>
                dia.hour.map((elemento, index) => (
                    {
                        tiempo : elemento.time,
                        temperatura: elemento.temp_c,
                        id : elemento.time,
                    }
                ))

            );

            setcadenaPronostico (datoGrafica);
            // console.log(datoGrafica);
            console.log(cadenaPronostico);
        }

        },

    [forecastData]
    );

    // const [ciudad, setCiudad] = useState("Cordoba Mexico");
    const [ciudad, setCiudad] = useState("");

    const handleCambioCD = (target) => {
        setCiudad(target.value);
        console.log (`La ciudad - hook cambio a ${ciudad}`)
        console.log (`La ciudad cambio a ${target.value}`)
    }

    const [checkStatus, setCheckStatus] = useState (false);

    const handleCheck = () => {
        setCheckStatus (!checkStatus);
        setCiudad("auto:ip");

    }

    const [diasPronostico, setdiasPronostico]= useState("2");
    const handleCambioDias = (target) => {
        setdiasPronostico(target.value);
        console.log(`Los dias son "${target.value}"`);
        // console.log(`Los dias guradados son "${diasPronostico}"`);
    }

    return (
        <>
        {/* <div className="is-flex is-flex-direction-column min-vh-100"> */}
        <div className="box">
            <h4 className="title is-4 has-text-centered"> Pronostico de clima </h4>
            {/* <h3>{ciudad}</h3> */}


            <div className="columns is-centered">
                <div className="column is-half">
                    <form className="box" onSubmit={handleSubmit}>
                    {/* <form className="box"> */}
                            <p className="control has-icons-left has-icons-right mt-4 mb-1">
                                
                                <input className="input" type="text" placeholder="Busque su ciudad" onChange={ (e) => handleCambioCD(e.target)}
                                    disabled={checkStatus}/>
                                
                                <span className="icon is-small is-left">
                                    <i className="fas fa-city"></i>
                                </span>

                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>

                            <p>
                                <input className="input" type="number" placeholder="Dias a consultar" onChange={ (e) => handleCambioDias(e.target)}
                                max={5}></input>
                            </p>
                            
                            <label className="checkbox mb-3" onChange={handleCheck}>
                                    <input type="checkbox"/>
                                    &nbsp; Autodetectar ubicación
                            </label>

                            <button className="button is-warning is-fullwidth" type="submit">Buscar</button>
                            {forecastData?.forecast?.forecastday && (

                                <>
                                <h4 className="title is-4 has-text-centered has-text-info">Pronóstico para: {forecastData?.location?.name}, {forecastData?.location?.country}</h4>
                                <div className="my-5">
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={cadenaPronostico}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#aaa" />
                                        {/* textAnchor: 'end' hace que la etiqueta no se salga */}
                                        <XAxis dataKey="tiempo" tick={{ fontSize: 10, angle: -65, textAnchor: 'end'}} interval={10} height={100}/>
                                        <YAxis dataKey="temperatura" unit=" °C" />
                                        {/* da el hovering el tooltip */}
                                        <Tooltip />         
                                        <Line type="monotone" dataKey="temperatura" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                                </div>

                                <ul className="my-5 has-text-centered">
                                    {forecastData?.forecast?.forecastday.flatMap(hora =>
                                        // hora.hour.map((elemento, index) =>  // este era para un solo dia, con index inventado
                                        hora.hour.map(elemento => 
                                        (
                                            // uso el time que es fecha-hora como key
                                        <li key={elemento.time}>Temperatura: {elemento.temp_c} °C ------//-----  Hora: {elemento.time} </li>
                                        )
                                    )
                                    )}
                                </ul>


                            {/*  <div>
                                     { (forecastData?.map({ location, current, forecast }) => (

                                         <p>{location}</p>
                                         <p>{current}</p>

                                     ))}
                                 </div> */}
                                

                                <pre className="my-5">{JSON.stringify(forecastData, null, 2)}</pre>

                                </>                                

                            )}
                    </form>
                </div>
            </div>
        
        </div>      
        </>

    );

}