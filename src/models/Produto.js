const connection = require("../database/connection");
const { v4 : uuidv4 } = require('uuid');

module.exports = {
    async create(produto) {
        const product_id = uuidv4();

        produto.product_id = product_id;
        await connection("produto").insert(produto);
        return product_id;
    },

    async getById({product_id}){
        const result = await connection("produto")
            .where({product_id})
            .select("*");
        return result;
    },

    async update(product_id, produto){
        const result = await connection("produto")
            .where(product_id)
            .update(produto);
        return result;
    },

   async delete(product_id){
        const result = await connection("produto").where({product_id}).delete();
        return result;
    },
};