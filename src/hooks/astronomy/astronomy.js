import { useEffect, useState } from "react";


export const astronomy = () => {

    const [datosAstronomicos, setDatosAstronomicos] = useState(null);

    const urlBase = "http://api.weatherapi.com/v1/astronomy.json";
    const clave = "306805565013442592d224449251104";
    const idioma = "es";

    const cosultarAstronomia = async (ciudad) => {
    
        const urlCompleta = `${urlBase}?key=${clave}&q=${ciudad}&lang=${idioma}`;
        console.log(`La url astronimca es "${urlCompleta}"`);

        const datosRecibidos = await fetch(urlCompleta);
        const datosEnJson = await datosRecibidos.json();
        setDatosAstronomicos(datosEnJson)

    }

    const [ciudadEdoPais, setciudadEdoPais] = useState(null)
    const [cadenaAstronomia, setcadenaAstronomia] = useState([])
    // useEffect (() => {}, [datosAstronomicos]); // eroor al usar "="
    
    useEffect (() => {
            if (datosAstronomicos?.location){

                const ciudad = datosAstronomicos?.location?.name
                const estado = datosAstronomicos?.location?.region
                const pais = datosAstronomicos?.location?.country

                setciudadEdoPais (`${ciudad}, ${estado}, ${pais}`);

            }

            if (datosAstronomicos?.astronomy){
                // setcadenaAstronomia[0] = datosAstronomicos?.astronomy?.astro?.sunrise
                // setcadenaAstronomia[1] = datosAstronomicos?.astronomy?.astro?.sunset
                // setcadenaAstronomia[2] = datosAstronomicos?.astronomy?.astro?.moonrise
                // setcadenaAstronomia[3] = datosAstronomicos?.astronomy?.astro?.moonset

                // setcadenaAstronomia[4] = datosAstronomicos?.astronomy?.astro?.moon_phase
                // setcadenaAstronomia[5] = datosAstronomicos?.astronomy?.astro?.moon_illumination

                const astro = datosAstronomicos.astronomy.astro;
                setcadenaAstronomia([astro]);

            }
        }, 
        [datosAstronomicos]
    );

    



    return({

        datosAstronomicos,
        ciudadEdoPais,
        cadenaAstronomia,

        cosultarAstronomia,
    })

}