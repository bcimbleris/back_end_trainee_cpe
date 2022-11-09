const Favorito = require("../models/Favorito");

module.exports = {
    async create(request, response) {
        try {
            const newFavorito = request.body;

            const result = await Favorito.create(newFavorito);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("Favorito creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create Favorito"
            });
        }
    },


   async getById(request, response) {
        try {
            const {user_id} = request.params;
            const result = await Favorito.getByUserWithFilters( user_id , {});
                
                if(result === 0){
                    return response.status(400).json(result);
                }
    
                return response.status(200).json({
                    notification: "Favorito GET operation successful",
                    usuario: result
                });
                    
        } catch (error) {
            console.warn("Getting Favorito failed:", error);
            return response.status(500).json({notification:"internal server error trying to get Favorito"});
        }
    },


   /* async update(request, response){
        try {
            const {favorito_id} = request.params;
            const newFavorito = request.body;

            const result = await Favorito.updateById(favorito_id, newFavorito);

            return response.status(200).json({notification: "Favorito updated successfully"});
        } catch (error) {
            console.warn("Favorito update failed:", error);
            return response.status(500).json({notification:"internal server error trying to update Favorito"});
        }
    },*/

    async delete(request, response){
        try {
            const {favorito_id} = request.params;
            const result = await Favorito.delete(favorito_id);

            if(result === 0){
                return response.status(400).json({notification:"user_id not found"});
            }

            return response.status(200).json({notification: "Favorito deleted successfully"});
        } catch (error) {
            console.warn("Favorito delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete Favorito"});
        }
    },
};