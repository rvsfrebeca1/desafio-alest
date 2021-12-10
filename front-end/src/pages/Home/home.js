import './home.css';
import Header from '../../components/header/index';
import CardItem from '../../components/card';
import { useEffect } from 'react'
import UseConsumirDados from '../../hooks/useConsumir';
import ModalEditar from '../../components/modalEditar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';
import BlueButton from '../../components/BlueButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom'
import useRequisicoes from '../../hooks/useRequisicoes';


function Home() {
  const navigate = useNavigate()
  const { produtos, buscarProdutos, alert, editando, adicionando, setAdicionando, removeUidStorage } = UseConsumirDados()
  const { deslogarUsuario } = useRequisicoes()
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
              sx={{ marginRight: '60px', backgroundColor: '#23222A', borderRadius: '9px' }}
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
            <BlueButton mensagem="Pesquisar" />
          </div>

          <button onClick={() => setAdicionando(true)} className='main__add-icon'><AddIcon /></button>
          <button onClick={() => {

            deslogarUsuario()
            removeUidStorage()
            navigate("/")

          }} className='main__add-icon'><ExitToAppIcon /></button>
        </div>
        <div className="main__produtos">
          {produtos.map(item => {
            return <CardItem key={item.id} item={item} />
          })}
        </div>


      </div>


    </div>)
}

export default Home