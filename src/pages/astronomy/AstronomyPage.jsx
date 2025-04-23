

export const AstronomyPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault ();

    }

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
            </div>
        
        </>
    )

}