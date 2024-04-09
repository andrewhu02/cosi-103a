const CosmosAccess = {
    async get_all(container) {
        if (!container) {
            // Return an empty array or mock data when container is not available
            return [];
        }

        const querySpec = {
            query: 'SELECT * from c'
        };
        
        const response = await container.items.query(querySpec).fetchAll();
        return response.resources;
    },
    
    async get_by_recipe_id(container, recipeId) {
        if (!container) {
            // Return null when container is not available
            return null;
        }

        const querySpec = {
            query: 'SELECT * from c WHERE c.recipe_id = @recipeId',
            parameters: [{ name: '@recipeId', value: recipeId }]
        };
        
        const response = await container.items.query(querySpec).fetchAll();
        return response.resources[0]; // Assuming recipe_id is unique
    },
    
    async add_item(container, item) {
        if (!container) {
            // Return null when container is not available
            return null;
        }

        const response = await container.items.upsert(item);
        return response;
    },


    async delete_by_recipe_id(container, recipeId) {
        if (!container) {
            // Return null when container is not available
            return null;
        }

        const itemToDelete = await this.get_by_recipe_id(container, recipeId);
        if (!itemToDelete) {
            // If item not found, return null
            return null;
        }

        const response = await container.item(itemToDelete.id, recipeId).delete();
        return response;
    },
};

module.exports = CosmosAccess;
