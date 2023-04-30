import { useState,useEffect } from "react"
import Input from "../components/Input"
import Select from "../components/Select"
import Submit from "../components/Submit"


function NovoPedido ({handleSubmit,btnText, produtoData}) {

    const [categorias,setCategorias] = useState([])
    const [produto, setProduto] = useState(produtoData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categorias",{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },

        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch((err) => console.log(err))
    },[])


    function handleChange(e){
        setProduto({...produto,[e.target.name]: e.target.value})

    }

    function handleCategory(e){
        setProduto({...produto,categorias: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
}


    return (
        <>
        <h1>Insira os dados do novo Produto</h1>
        <Input type="text" text="Nome" nome="Nome" placeholder="Insira o nome..."></Input>
        <Input type="value" text="Valor" nome="Valor" placeholder="Insira o valor..."></Input>
        <Select name="category_id" text="Selecione a categoria" options={categorias} handleOnChange={handleCategory} value={produto.categorias ? produto.categorias.id : ''}/>
        <Submit text="Adicionar Produto"></Submit>    
        </>
    )
}

export default NovoPedido