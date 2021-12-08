import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'
import UseConsumirDados from '../../hooks/useConsumir';
import useRequisicoes from '../../hooks/useRequisicoes';
import { useEffect } from 'react';
function ModalEditar() {



    const { setNome, nome, valor, descricao, setValor, setDescricao, setEditando, editando } = UseConsumirDados()
    const { editarProduto } = useRequisicoes()
    useEffect(() => {
        if (!editando) {
            setNome("")
            setValor("")
            setDescricao("")
        }
    })


    async function handleSubmit(e) {
        e.preventDefault()
        const body = {
            nome,
            valor,
            descricao
        }
        await editarProduto(body, editando.id)
        setEditando(false)
    }
    return <div className="modalEditar">
        <h1 className="modalEditar__title">Edite seu produto</h1>

        <form className="modalEditar__form" onSubmit={(e) => handleSubmit(e)} action="submit">
            <TextField value={nome} onChange={(e) => setNome(e.target.value)} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
            <TextField value={valor} onChange={(e) => setValor(e.target.value)} fullWidth id="outlined-basic" label="Valor" variant="outlined" />
            <TextField value={descricao} onChange={(e) => setDescricao(e.target.value)} fullWidth id="outlined-basic" label="descricao" variant="outlined" />
            <div className="modalEditar__form__buttons">
                <Button type="submit" fullWidth variant="contained">Editar</Button>
                <Button onClick={() => setEditando(false)} fullWidth variant="contained">Cancelar</Button>

            </div>
        </form>
    </div >
}

export default ModalEditar