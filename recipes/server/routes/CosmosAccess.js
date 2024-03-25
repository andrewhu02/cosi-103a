class CosmosAccess {
    // gets the one specific pre-added item for testing purposes
    static async test_get(container) {
        var id = 'b8c2b7b4-6618-455c-95f2-6a022c157e20';
        var partitionKey = 1;

        var response = await container.item(id, partitionKey).read();
        var read_item = response.resource;

        console.log(read_item);
    }
}

module.exports = CosmosAccess;