import './App.css';
import Header from './components/header/index';
import CardItem from './components/card';
import { useEffect } from 'react'
import UseConsumirDados from './hooks/useConsumir';
import ModalEditar from './components/modalEditar';
function App() {
  const { produtos, buscarProdutos, alert, editando } = UseConsumirDados()

  useEffect(() => {
    buscarProdutos()
  }, [])
  useEffect(() => {
    buscarProdutos()
  }, [alert])

  useEffect(() => {
    buscarProdutos()
  }, [editando])



  return (


    <div className="App">
      <Header />
      {editando && <ModalEditar />}
      <div className="main">
        {produtos.map(item => {
          return <CardItem key={item.id} item={item} />
        })}
      </div>


    </div>
  );
}

export default App;
