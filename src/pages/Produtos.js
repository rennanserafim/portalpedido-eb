import { useState,useEffect } from "react"



function Produtos ({handleSubmit, produtoData}) {

    const [produtos, setProduto] = useState([])

useEffect(() => {        
    fetch("http://localhost:5000/produtos",{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
    },

})
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
    setProduto(data)
})
.catch((err) => console.log(err))

},[])


console.log(produtos)
return(

    <div>

    <table>
        <th>Produto</th>
        <th>Valor</th>
        <th>Categoria</th>
    {produtos.map((produto)=>(
        <tr>
            <td>{produto.name}</td>
            <td>{produto.valor}</td>
            <td>{produto.categorias.name}</td>
        </tr>
    ))}

    </table>
    </div>
    
    )


}


export default Produtos