import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'
import UseConsumirDados from '../../hooks/useConsumir';
import useRequisicoes from '../../hooks/useRequisicoes';
import { useEffect } from 'react';
function ModalEditar() {



    const {
        setNome,
        nome,
        valor,
        descricao,
        setValor,
        setDescricao,
        setEditando,
        editando,
        setAdicionando,
        adicionando
    } = UseConsumirDados()

    const { editarProduto, adicionarProduto } = useRequisicoes()
    useEffect(() => {
        if (adicionando) {
            setNome("")
            setValor("")
            setDescricao("")
        }
    }, [])


    async function handleSubmit(e) {
        e.preventDefault()
        const body = {
            nome: nome,
            valor: valor,
            descricao: descricao
        }
        if (editando) {
            await editarProduto(body, editando.id)

        } else if (adicionando) {
            await adicionarProduto(body)
        }
        setEditando(false)
        setAdicionando(false)
    }
    return <div className="modalEditar">
        <h1 className="modalEditar__title">{editando ? "Editar produto" : "Adicionar produto"}</h1>

        <form className="modalEditar__form" onSubmit={(e) => handleSubmit(e)} action="submit">
            <TextField value={nome} onChange={(e) => setNome(e.target.value)} fullWidth id="outlined-basic" label="Nome" variant="outlined" />

            <TextField value={valor} onChange={(e) => setValor(e.target.value)} fullWidth id="outlined-basic" label="Valor" variant="outlined" />

            <TextField value={descricao} onChange={(e) => setDescricao(e.target.value)} fullWidth id="outlined-basic" label="descricao" variant="outlined" />

            <div className="modalEditar__form__buttons">
                <Button type="submit" fullWidth variant="contained">{editando ? "Editar" : "Adicionar"}</Button>
                <Button onClick={() => {
                    setEditando(false)
                    setAdicionando(false)
                }} fullWidth variant="contained">Cancelar</Button>

            </div>
        </form>
    </div >
}

export default ModalEditar