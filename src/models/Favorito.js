const connection = require("../database/connection");
const { v4 : uuidv4 } = require('uuid');

module.exports = {
    async create(favorito) {
        const favorito_id = uuidv4();

        favorito.favorito_id = favorito_id;
        const result = await connection("favorito").insert(favorito);
        return result;
    },

    async getByUserId({user_id}){
        const result = await connection("favorito")
            .where(user_id)
            .select("*");
        return result;
    },

    async updateById(favorito_id, favorito){
        const result = await connection("favorito")
            .where(favorito_id)
            .update(favorito);
        return result;
    },

    async deleteById(favorito_id){
        const result = await connection("favorito").where({favorito_id}).delete();
        return result;
    },
};