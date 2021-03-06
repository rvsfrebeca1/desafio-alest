

function useRequisicoes() {

    async function removerProduto(item) {
        try {
            await fetch(`http://localhost:8000/produtos/remover/${item.id}`, {
                method: 'DELETE'
            })

        } catch (error) {
            console.log(error.message)
        }

    }

    async function editarProduto(body, id) {
        fetch(`http://localhost:8000/produtos/atualizar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    async function adicionarProduto(body) {
        await fetch('http://localhost:8000/produtos/adicionar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

    }


    async function cadastrarUsuario(body) {
        const resposta = await fetch('http://localhost:8000/usuario/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const uid = await resposta.json()
        return uid


    }

    async function logarUsuario(body) {
        const resposta = await fetch('http://localhost:8000/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const uid = await resposta.json()
        return uid
    }

    async function deslogarUsuario() {
        await fetch('http://localhost:8000/usuario/deslogar')
    }



    return {
        removerProduto,
        editarProduto,
        adicionarProduto,
        cadastrarUsuario,
        logarUsuario,
        deslogarUsuario
    }
}


export default useRequisicoes