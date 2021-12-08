


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



    return {
        removerProduto,
        editarProduto
    }
}


export default useRequisicoes