const User = require("../models/User");

module.exports = {
    async create(request, response) {
        try {
            const newUser = request.body;

            const result = await User.create(newUser);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("Note creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create User"
            });
        }
    },


   async getById(request, response) {
        try {
            const {user_id} = request.params;
    
                const result = await User.getById({user_id});
                
                if(result === 0){
                    return response.status(400).json({notification:"User_id not found"});
                }
    
                return response.status(200).json({
                    notification: "User GET operation successful",
                    usuario: result
                });
                    
        } catch (error) {
            console.warn("Getting User failed:", error);
            return response.status(500).json({notification:"internal server error trying to get User"});
        }
    },


    async update(request, response){
        try {
            const {user_id} = request.params;
            const newUser = request.body;

            const result = await User.updateById(user_id, newUser);

            return response.status(200).json({notification: "User updated successfully"});
        } catch (error) {
            console.warn("User update failed:", error);
            return response.status(500).json({notification:"internal server error trying to update User"});
        }
    },

    async delete(request, response){
        try {
            const {user_id} = request.params;
            const result = await User.delete(user_id);

            if(result === 0){
                return response.status(400).json({notification:"user_id not found"});
            }

            return response.status(200).json({notification: "User deleted successfully"});
        } catch (error) {
            console.warn("User delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete User"});
        }
    },
};