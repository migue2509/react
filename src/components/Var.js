import React, { useEffect, useState } from "react";



const Var = ({key, key2 }) => {

    const [variable, setVariable] = useState(false)


    useEffect(() => {
        console.log(variable);
    },[variable])


    const handleChange = () =>{
        setVariable(!variable)
    }
    

    return (
        <div id={key}>
            <span id={key2}>  
            </span>
            <button onClick= {handleChange}>ACTUALIZAR</button>
        </div>
    )
}

export default Var