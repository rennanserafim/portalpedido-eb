function Select({text,nome,options,handleOnChange, value, id}){
    return(
        <div>
            <label htmlFor={nome}>{text} :</label>
            <select name={nome} id={nome} onChange={handleOnChange} value={value || ''}>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
                </select>           
            </div>
    )


}

export default Select