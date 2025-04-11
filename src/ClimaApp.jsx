import { useState } from "react";


export const ClimaApp = () => {

    const [ciudad, setCiudad] = useState("gorda");

    const handleCambioCD = (e) =>{

        setCiudad(e.target.value);
        console.log(`La ciudad es ${ciudad}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  //para que no se actualiza
        if (ciudad.length > 0 ? fetchClima(): console.log('No city'));

    }

    const [wheaterData, setWheaterData] = useState(null)

    const fetchClima = () => {
        console.log("Si hay ciudad");
    };

    // http://api.weatherapi.com/v1/current.json?q=Paris&key=306805565013442592d224449251104

    return(
        <div className="box">
            <h2 className="title is-2 has-text-centered"> Gordo </h2>
            <h3>{ciudad}</h3>

            <form onSubmit={handleSubmit}>
                {/* <div class="field"> */}
                    {/* <p class="control has-icons-left has-icons-right"> */}
                        
                        <input className="input" type="text" placeholder="Busque su ciudad" onChange={handleCambioCD}/>
                        
                        {/* <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span> */}
                    {/* </p> */}
                    <button className="button is-link" type="submit">Buscar</button>

                    
{/* <div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
</div> */}
                {/* </div> */}
            </form>
        </div>
    );
}