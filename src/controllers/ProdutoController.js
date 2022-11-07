const Produto = require("../models/Produto");

module.exports = {
    async create(request, response) {
        try {
            const newProduto = request.body;

            const result = await Produto.create(newProduto);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("Note creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create Produto"
            });
        }
    },


   async getById(request, response) {
        try {
            const {product_id} = request.params;
    
                const result = await Produto.getById({product_id});
                
                if(result === 0){
                    return response.status(400).json({notification:"produto_id not found"});
                }
    
                return response.status(200).json({
                    notification: "produto GET operation successful",
                    usuario: result
                });
                    
        } catch (error) {
            console.warn("Getting produto failed:", error);
            return response.status(500).json({notification:"internal server error trying to get produto"});
        }
    },


    async update(request, response){
        try {
            const {product_id} = request.params;
            const newProduto = request.body;

            const result = await Produto.updateById(product_id, newProduto);

            return response.status(200).json({notification: "Produto updated successfully"});
        } catch (error) {
            console.warn("Produto update failed:", error);
            return response.status(500).json({notification:"internal server error trying to update Produto"});
        }
    },

    async delete(request, response){
        try {
            const {product_id} = request.params;
            const result = await Produto.delete(product_id);

            if(result === 0){
                return response.status(400).json({notification:"product_id not found"});
            }

            return response.status(200).json({notification: "Produto deleted successfully"});
        } catch (error) {
            console.warn("Produto delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete produto"});
        }
    },
};