import { useState } from "react";


export const fetchClima = async (ciudad) => {

    const [wheaterData, setWheaterData] = useState(null)
    const [iconoGrande,seticonoGrande] = useState(null)
    const urlBase = "http://api.weatherapi.com/v1/current.json";
    const keys = "306805565013442592d224449251104";
    const idioma = "es";

    // const fetchClimaActual = async ({ciudad}) => {
        try{

        console.log("Si hay ciudad");

        const urlFinal = `${urlBase}?key=${keys}&q=${ciudad}&lang=${idioma}`;
        console.log(`Se consulta: ${urlFinal}`);
        const datosRecibidos = await fetch(urlFinal);
        const datosTraducidos = await datosRecibidos.json();
        setWheaterData(datosTraducidos);
        seticonoGrande(datosTraducidos?.current?.condition?.icon.replace("64x64","128x128"));

        alert(`Se logro la consulta`);
        // console.log(wheaterData.current.condition.icon);  //esto parece hacer el error, ya que se carga antes que el await
        
        // setWheaterData(await GET () );

        }
        catch (error){
            alert(`Ocurrio el error al hacer la consulta :"${error}"`)
        }
    // };

    return(
        {wheaterData,
        iconoGrande,
        
        fetchClimaActual,
        }
    );
};