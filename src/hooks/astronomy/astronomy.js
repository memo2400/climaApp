import { useState } from "react";


export const astronomy = () => {

    const [datosAstronomicos, setDatosAstronomicos] = useState(null);

    const urlBase = "http://api.weatherapi.com/v1/astronomy.json";
    const clave = "306805565013442592d224449251104";
    const idioma = "es";

    const cosultarAtronomia = async (ciudad) => {
    
        const urlCompleta = `${urlBase}?key=${clave}&q=${ciudad}&lang=${idioma}`;
        console.log(`La url astronimca es "${urlCompleta}"`);

        const datosRecibidos = await fetch(urlCompleta);
        const datosEnJson = await datosRecibidos.json();
        setDatosAstronomicos(datosEnJson)

    }




    return({

        datosAstronomicos,
    })

}