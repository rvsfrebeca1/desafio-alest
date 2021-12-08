import { useState } from 'react'
// import { useLocalStorage } from 'react-use'


export default function UseDados() {

    const [produtos, setProdutos] = useState([])
    const [removendo, setRemovendo] = useState(false)
    const [alert, setAlert] = useState(false)


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
        setAlert
    }
}