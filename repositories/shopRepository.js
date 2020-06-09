const db = require('../db');

module.exports = {
    getAll () {
        return db.shop.find()
            .toArray();
    },
    async show (name) {
        const item = await db.shop.findOne({ name:{ '$regex' : `^${name}$`, '$options' : 'i' } });
        if(!item) throw new Error('Non-existance'); 
        return item;
    },
    async create (item) {
        try {
            const result = await db.shop.insertOne(item);
            return result;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async getOneByName (name) {
        const foundItem = await db.shop.findOne(
            {
                name: {
                    '$regex' : `^${name}$`,
                    '$options' : 'i'
                }
            }
        );
        if (!foundItem) throw new Error(`Item with name '${name}' does not exist`);
        return foundItem;
    },
    async update (name, item) {
        try {
            const result = await db.shop.updateOne(
                {
                    name: {
                        '$regex' : `^${name}`,
                        '$options' : 'i'
                    }
                },
                { 
                // Only updates whatever was inputted by the PUT request
                   $set: item
            }
            )
            return result;  
            } catch (err) {
                throw new Error(`Due to ${err.message}, unable to find and update ${item.name}`);
            }
    },
    async delete (name) {
        try {
            const result = await db.shop.deleteOne(
                {
                    name: {
                        '$regex' : `^${name}`,
                        '$options' : 'i'
                    }
                }
            )
            return result;
        } catch (err) {
            throw new Error(`Due to ${err.message}, unable to delete ${name}`)
        }
    }
};