class CosmosAccess {
    // gets the one specific pre-added item for testing purposes
    static async test_get(container) {
        var id = 'b8c2b7b4-6618-455c-95f2-6a022c157e20';
        var partitionKey = 1;

        var response = await container.item(id, partitionKey).read();
        var read_item = response.resource;

        // console.log(read_item);

        return read_item;
    }

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

    // static async get_by_recipe_id(container, recipe_id) {
        
    // }
}

module.exports = CosmosAccess;