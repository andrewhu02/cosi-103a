class CosmosAccess {

    static async get_all(container) {
        const querySpec = {
            query: 'SELECT * FROM c',
        };
        
        var response = await container.items.query(querySpec).fetchAll();
        
        // for (var item of response.resources) {
        //     console.log(item);
        // }

        var read_items = response.resources;

        return read_items;
    }

    static async add_item(container, item) {
        var response = await container.items.upsert(item);
        return response;
    }

    static async get_by_recipe_id(container, recipe_id) {
        const querySpec = {
            query: 'SELECT * FROM c WHERE c.recipe_id = @recipe_id',
            parameters: [
                {
                    name: '@recipe_id',
                    value: recipe_id
                }
            ]
        };
        var response = await container.items.query(querySpec).fetchAll();
        return response.resources;
    }

    static async delete_by_recipe_id(container, recipe_id) {
        // get the item using recipe_id
        const querySpec = {
            query: 'SELECT * FROM c WHERE c.recipe_id = @recipe_id',
            parameters: [
                {
                    name: '@recipe_id',
                    value: recipe_id
                }
            ]
        };
        var response = await container.items.query(querySpec).fetchAll();
        const id = response.resources[0].id;
        const { resource: result } = await container.item(id, recipe_id).delete();

        return result;
    }
}

module.exports = CosmosAccess;