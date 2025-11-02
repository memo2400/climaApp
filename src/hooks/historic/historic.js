import { useState } from "react"

export const historicClimate = () => {

    const [historicClimateData, setHistoricClimateData] = useState ("dataDemo")

    return ({
        historicClimateData,
    })

}