import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Pedidos from '../src/pages/Pedidos'

import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './pages/Home';
import NovoPedido from './pages/NovoPedido';
import Produtos from './pages/Produtos';
import NovoProduto from './pages/NovoProduto';


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
      <Route exact path="/"element={<Home/>}/>  
      <Route exact path="/pedidos"element={<Pedidos/>}/>  
      <Route exact path="/novopedido"element={<NovoPedido/>}/>  
      <Route exact path="/produtos"element={<Produtos/>}/>  
      <Route exact path="/novoproduto"element={<NovoProduto/>}/>  

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
