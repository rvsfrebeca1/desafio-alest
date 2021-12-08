import './App.css';
import Header from './components/header/index';
import CardItem from './components/card';
import { useEffect } from 'react'
import UseConsumirDados from './hooks/useConsumir';
function App() {
  const { produtos, buscarProdutos, alert } = UseConsumirDados()

  useEffect(() => {
    buscarProdutos()
  }, [])
  useEffect(() => {
    buscarProdutos()
  }, [alert])



  return (


    <div className="App">
      <Header />
      <div className="main">
        {produtos.map(item => {
          return <CardItem key={item.id} item={item} />
        })}
      </div>


    </div>
  );
}

export default App;
