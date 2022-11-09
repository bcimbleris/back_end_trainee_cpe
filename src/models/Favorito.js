const connection = require("../database/connection");
const { v4 : uuidv4 } = require('uuid');

module.exports = {
    async create(favorito) {
        const favorito_id = uuidv4();

        favorito.favorito_id = favorito_id;
        const result = await connection("favorito").insert(favorito);
        return result;
    },

    async getById({favorito_id}){
        const result = await connection("favorito")
            .where({favorito_id})
            .select("*")
            .first();

        return result;
    },

    async getByUserWithFilters(user_id,{product_name}){
        const result = await connection("favorito")
            .innerJoin("favorito", "produto.product_id", "favorito.product_id")
            .where({user_id})
            .select("*");

    return result;
    },

   /* async update(favorito_id, favorito){
        const result = await connection("favorito")
            .where(favorito_id)
            .update(favorito);
        return result;
    }, */

    async delete(favorito_id){
        const result = await connection("favorito").where({favorito_id}).delete();
        return result;
    },
};