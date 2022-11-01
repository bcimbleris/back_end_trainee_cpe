const connection = require("../database/connection");
const { v4 : uuidv4 } = require('uuid');

module.exports = {
    async create(produto) {
        const product_id = uuidv4();

        produto.product_id = product_id;
        const result = await connection("produto").insert(produto);
        return result;
    },

    async getById({product_id, user_id}){
        const result = await connection("produto")
            .where({product_id, user_id})
            .select("*");
        return result;
    },

    async updateById(product_id, produto){
        const result = await connection("produto")
            .where(product_id)
            .update(produto);
        return result;
    },

    async deleteById(product_id){
        const result = await connection("produto").where({product_id}).delete();
        return result;
    },
};