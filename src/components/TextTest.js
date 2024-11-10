import React from "react";




//component
const TextTest = ({text, id, classComponent }) => {
    return (
        <>
         <p id = {id} className={classComponent}>
    
         {text}
         </p>
        
        </>
    )
}

export default TextTest 