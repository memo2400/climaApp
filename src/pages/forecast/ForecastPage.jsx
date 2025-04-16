
export const ForecastPage = () => {

    return (
        <>
        {/* <div className="is-flex is-flex-direction-column min-vh-100"> */}
        <div className="box">
            <h4 className="title is-4 has-text-centered"> Pronostico de clima </h4>
            {/* <h3>{ciudad}</h3> */}


            <div className="columns is-centered">
                <div className="column is-half">
                    {/* <form className="box" onSubmit={handleSubmit}> */}
                    <form className="box">
                            <p className="control has-icons-left has-icons-right my-4">
                                
                                {/* <input className="input" type="text" placeholder="Busque su ciudad" onChange={handleCambioCD}/> */}
                                
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
        
        </div>      
        </>

    );

}