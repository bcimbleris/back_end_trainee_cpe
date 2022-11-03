const ProdutoModel = require("../models/Produto");

module.exports = {
    async create(request, response) {
        try {
            const newProduto = request.body;

            const result = await Produto.create(newProduto);

            return response.status(200).json({product_id: result});

        } catch (error) {
            console.warn("Note creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create Produto"
            });
        }
    },

    async getByUser(request, response) {
        try {
            
        } catch (error) {
            
        }
    },

    async update(request, response) {
        try {
            
        } catch (error) {
            
        }
    },

    async delete(request, response) {
        try {
            
        } catch (error) {
            
        }
    },

    
};