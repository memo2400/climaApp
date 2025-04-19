import { useEffect, useState } from "react";
import { forecast } from "../../hooks/forecast/forecast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

export const ForecastPage = () => {

    const {
        datosTraducidos,
        forecastData,

        fetchForecast
    } = forecast();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetchForecast();
        console.log("se hizo la consulta forecast")
    }

    const [cadenaPronostico, setcadenaPronostico] = useState([]);

    useEffect( () => {
        
        if (forecastData?.forecast?.forecastday)
        {
            const datoGrafica = forecastData?.forecast?.forecastday.flatMap ( dia =>
                dia.hour.map(elemento => (
                    {
                        tiempo : elemento.time,
                        temperatura: elemento.temp_c,
                        // i : index,
                    }
                ))

            );

            setcadenaPronostico (datoGrafica);
        }

        },

    [forecastData]
    );

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
                            <p className="control has-icons-left has-icons-right my-4">
                                
                                {/* <input className="input" type="text" placeholder="Busque su ciudad" onChange={handleCambioCD}/> */}
                                
                                <span className="icon is-small is-left">
                                    <i className="fas fa-city"></i>
                                </span>

                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                            <button className="button is-warning is-fullwidth" type="submit">Buscar</button>
                            {forecastData?.forecast?.forecastday && (

                                <>
                                {/* <ul>
                                    {forecastData?.forecast?.forecastday.flatMap(minuto =>
                                        minuto.hour.map((elemento, index) => 
                                        (
                                        <li key={index}>Temperatura: {elemento.temp_c} °C ------//-----  Hora: {elemento.time} </li>
                                        )
                                    )
                                    )}
                                </ul> */}

                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={cadenaPronostico}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                                        <YAxis dataKey="temperature" unit="°C" />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>


{/*                             // <div>
                                //     { (forecastData?.map({ location, current, forecast }) => (

                                //         <p>{location}</p>
                                //         <p>{current}</p>

                                //     ))}
                                // </div> */}
                                

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