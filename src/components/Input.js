import { useState } from "react"



function Input({type, text, nome, placeholder, handleOnChange, value,id}){


    const [valor,setValor] = useState("");
    const handleChange = (event) => {
        setValor(event.target.value)
    }
    return(
        <div>
            <label htmlFor={nome}> {text}: </label>
            <input
            type={type}
            nome={nome}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}

            />
            <p>{valor}</p>

        </div>
    )
}

export default Input