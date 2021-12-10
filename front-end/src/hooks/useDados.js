import { useState } from 'react'
import { useLocalStorage } from 'react-use'


export default function UseDados() {

    const [produtos, setProdutos] = useState([])
    const [removendo, setRemovendo] = useState(false)
    const [alert, setAlert] = useState(false)
    const [editando, setEditando] = useState(false)
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [adicionando, setAdicionando] = useState(false)
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState(false)
    const [uidStorage, setUidStorage, removeUidStorage] = useLocalStorage("uid", "")


    async function buscarProdutos() {
        try {
            const body = await fetch('http://localhost:8000/produtos/vizualizar')
            const produtos = await body.json()
            setProdutos(produtos)

        } catch (error) {
            console.log(error.message)
        }
    }
    return {
        produtos,
        setProdutos,
        removendo,
        setRemovendo,
        buscarProdutos,
        alert,
        setAlert,
        editando,
        setEditando,
        nome,
        setNome,
        valor,
        setValor,
        descricao,
        setDescricao,
        adicionando,
        setAdicionando,
        nomeUsuario,
        setNomeUsuario,
        email,
        setEmail,
        senha,
        setSenha,
        erro,
        setErro,
        uidStorage,
        setUidStorage,
        removeUidStorage
    }
}