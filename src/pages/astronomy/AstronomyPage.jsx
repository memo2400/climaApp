import { astronomy } from "../../hooks/astronomy/astronomy";


export const AstronomyPage = () => {

    const handleSubmit = async(e) => {
        e.preventDefault ();

        cosultarAstronomia("puebla");

    }

    const {datosAstronomicos, ciudadEdoPais, cosultarAstronomia} = astronomy();

    return (

        <>
            <div className="box">
                <h4 className="title has-text-centered"> Datos astronómicos</h4>
            
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form className="box" onSubmit={handleSubmit}>

                            <button className="button is-primary">Consulta</button>
                        </form>
                    </div>
                </div>

                {datosAstronomicos && (
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <h4 className="title has-text-centered"> {datosAstronomicos?.location?.name} </h4>
                            <h4 className="title has-text-centered my-5"> {ciudadEdoPais} </h4>
                        </div>
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