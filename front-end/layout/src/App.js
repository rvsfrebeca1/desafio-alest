import './App.css';
import Header from './components/header/index';
import CardItem from './components/card';
import { useEffect } from 'react'
import UseConsumirDados from './hooks/useConsumir';
import ModalEditar from './components/modalEditar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';

function App() {
  const { produtos, buscarProdutos, alert, editando, adicionando, setAdicionando } = UseConsumirDados()

  useEffect(() => {
    buscarProdutos()
  }, [])
  useEffect(() => {
    buscarProdutos()
  }, [alert])

  useEffect(() => {
    buscarProdutos()
  }, [editando])

  useEffect(() => {
    buscarProdutos()
  }, [adicionando])




  return (


    <div className="App">
      <Header />
      {(editando || adicionando) && <ModalEditar />}
      <div className="main">
        <div className="main__top">
          <div className="main__top__pesquisa">
            <TextField
              fullWidth
              size='small'
              sx={{ marginRight: '60px' }}
              id="input-with-icon-textfield"
              placeholder='Search'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <button className='main__top__pesquisar-button'>Pesquisar</button>
          </div>

          <button onClick={() => setAdicionando(true)} className='main__add-icon'><AddIcon /></button>
        </div>
        <div className="main__produtos">
          {produtos.map(item => {
            return <CardItem key={item.id} item={item} />
          })}
        </div>

      </div>


    </div>
  );
}

export default App;
