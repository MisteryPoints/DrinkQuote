import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => { 
    const [bebidas, setBebidas] = useState([])

    const getBebidas = async datas => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datas.nombre}&c=${datas.categoria}`
            const { data } = await axios(url) 
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <BebidasContext.Provider value={{
            getBebidas,
            bebidas
        }}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext