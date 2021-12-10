import './style.css'
import TextField from '@mui/material/TextField';
import React from 'react';
import BlueButton from '../../components/BlueButton';
import useConsumir from '../../hooks/useConsumir'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import useRequisicoes from '../../hooks/useRequisicoes';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()

    const {
        email,
        setEmail,
        setSenha,
        erro,
        setErro,
        setUidStorage
    } = useConsumir()


    const { logarUsuario } = useRequisicoes()


    function validarCampos() {

        if (!values.password || !email) {
            setErro({ mensagem: "Todos os campos são obrigatorios" })
            return
        }
        setSenha(values.password)
    }

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });


    async function handleSubmit(e) {
        e.preventDefault()
        validarCampos()

        const user = {
            email: email,
            senha: values.password
        }
        const retorno = await logarUsuario(user)
        if (retorno.error) {
            setErro({ mensagem: retorno.error.mensagem })
            return
        } else {
            setErro(false)
        }
        setUidStorage(retorno.uid)
        navigate("/home")


    }


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return <div className="login">
        <h1 className='login__title'>Faça seu login</h1>
        <form className="cadastro__form" onSubmit={(e) => handleSubmit(e)} action="submit">
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu melhor email' size='small' fullWidth />
            <OutlinedInput
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                placeholder='Digite uma senha'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {erro && <span style={{ color: 'red', fontFamily: 'Cantarella, sans-serif' }}>{erro.mensagem}</span>}
            <BlueButton mensagem="Logar" />
        </form>
    </div>
}


export default Login