import { useEffect, useState } from "react";


export const astronomy = () => {

    const [datosAstronomicos, setDatosAstronomicos] = useState(null);

    const urlBase = "https://api.weatherapi.com/v1/astronomy.json";
    const clave = "306805565013442592d224449251104";
    const idioma = "es";

    const cosultarAstronomia = async ({ciudad}) => {    //debe llevar {}
    
        const urlCompleta = `${urlBase}?key=${clave}&q=${ciudad}&lang=${idioma}`;
        console.log(`La url astronimca es "${urlCompleta}"`);

        const datosRecibidos = await fetch(urlCompleta);
        const datosEnJson = await datosRecibidos.json();
        setDatosAstronomicos(datosEnJson)

    }

    const [ciudadEdoPais, setciudadEdoPais] = useState(null)
    const [astronomia, setastronomia] = useState(null)
    const [cadenaAstronomia, setcadenaAstronomia] = useState([])
    // useEffect (() => {}, [datosAstronomicos]); // error al usar "="
    
    const [moonUp, setmoonUp] = useState("sin informacion");
    const [sunUp, setsunUp] = useState("sin informacion");

    useEffect (() => {
            if (datosAstronomicos?.location){

                const ciudad = datosAstronomicos?.location?.name
                const estado = datosAstronomicos?.location?.region
                const pais = datosAstronomicos?.location?.country

                setciudadEdoPais (`${ciudad}, ${estado}, ${pais}`);

            }
            if (datosAstronomicos?.astronomy?.astro){
                setastronomia(datosAstronomicos?.astronomy?.astro);
            }

            if (datosAstronomicos?.astronomy){
                setcadenaAstronomia[0] = datosAstronomicos?.astronomy?.astro?.sunrise
                setcadenaAstronomia[1] = datosAstronomicos?.astronomy?.astro?.sunset
                // setcadenaAstronomia[2] = datosAstronomicos?.astronomy?.astro?.moonrise
                // setcadenaAstronomia[3] = datosAstronomicos?.astronomy?.astro?.moonset

                // setcadenaAstronomia[4] = datosAstronomicos?.astronomy?.astro?.moon_phase
                // setcadenaAstronomia[5] = datosAstronomicos?.astronomy?.astro?.moon_illumination

                // V2 no funciono se mostraba solo []
                // const astro = datosAstronomicos.astronomy.astro;
                // setcadenaAstronomia([astro]);

            }

            if (datosAstronomicos?.astronomy?.astro?.is_moon_up === 1){
                setmoonUp("Yes");
            }
            else{
                setmoonUp("Not");
            }

            if (datosAstronomicos?.astronomy?.astro?.is_sun_up === 1){
                setsunUp("Yes");
            }
            else{
                setsunUp("Not");
            }

        }, 
        [datosAstronomicos]
    );

    



    return({

        datosAstronomicos,
        ciudadEdoPais,
        cadenaAstronomia,
        astronomia,
        moonUp,
        sunUp,

        cosultarAstronomia,
    })

}