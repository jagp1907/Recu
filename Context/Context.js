import React, { createContext, useState, useEffect } from 'react';
export const Context = createContext();

const EscritosProvider = (props) => {
    const [Apidehoy, setApidehoy ] = useState([])
    const [ApiAle, setApiAle ]= useState([])
    const [Aconjunto, setAconjunto ]= useState([])
    useEffect(() => {
        const getApidehoy = () => {
            fetch('https://zenquotes.io/api/today')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setApidehoy(resultado);
    
            });
        }
        const getApiAle = () => {
            fetch('https://zenquotes.io/api/random')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setApiAle(resultado);
    
            });
        }
        const getAconjunto = () => {
            fetch('https://zenquotes.io/api/quotes')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setAconjunto(resultado);
    
            });
        }
        getApidehoy()
        getApiAle()
        getAconjunto()
    },[])
    
    return (
        <Context.Provider
        value={{
            Apidehoy,
            ApiAle,
            Aconjunto     
        }}>
        {props.children}
    </Context.Provider>
    )
}
export default EscritosProvider;