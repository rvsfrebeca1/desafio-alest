


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



    return {
        removerProduto
    }
}


export default useRequisicoes