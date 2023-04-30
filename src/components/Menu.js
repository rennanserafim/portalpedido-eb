import {Link} from 'react-router-dom'
import styles from '../components/Menu.module.css'


function Menu () {

    const imagem150 = 'http://via.placeholder.com/100'
    return(

        <div className={styles.menu}> 
             <Link to="/">
            <img src={imagem150}></img>
            </Link>
        <div >


            <li>
            <Link to="/produtos">Produtos</Link>
            </li>

            <li>
            <Link to="/pedidos">Pedidos</Link>
            </li>

            <li>
            <Link to="/novopedido">Novo Pedido</Link>
            </li>
            <li>
            <Link to="/novoproduto">Novo Produto</Link>
            </li>
        </div>
        
        </div>
    )
}

export default Menu