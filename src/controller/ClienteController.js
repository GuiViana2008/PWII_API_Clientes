const Clientes = require("../../data/cliente");

const ListarClientes = async (req, res) => {
    try{
        return res.status(200).json({
            sucesso: true, 
            total: Clientes.length,
            dados: Clientes,
        });
    } catch(error){
        return res.status(500).json({
            sucesso: false, 
            mensagem: "Erro ao listar clientes",
            erro: error.message,
        });
    }
};

const BuscarClientePorId = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID inválido. Deve ser um número inteiro",
            });
        }

        const Cliente = Clientes.find((c) => c.id === id);

        if(!Cliente){
            return res.status(404).json({
                sucesso: false,
                Mensagem: `Cliente com o id ${id} não encontrado`,
            });
        }

        return res.status(200).json({
            sucesso: true,
            dados: Cliente,
        });

    }catch(error){
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar cliente por id",
            erro: error.message,
        });
    }
}

module.exports = {
    ListarClientes,
    BuscarClientePorId
};