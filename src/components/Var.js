import React, { useEffect, useState } from "react";



const Var = ({key, key2 }) => {

    const [variable, setVariable] = useState("M")


    useEffect(() => {
        console.log(variable);
    },[variable])


    const handleChange = () =>{
        let letra = prompt("añade una letra")
        
        setVariable(variable + letra )
    }
    

    return (
        <div id={key}>
            <span id={key2}>  
            </span>
            <h1>Añade letra por letra tu nombre</h1>
            <h2>{variable}  </h2>
            <button onClick= {handleChange}>ACTUALIZAR</button>
        </div>
    )
}

export default Var