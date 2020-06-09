const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.show', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should delete Beans only', async () => {
        const result = await db.shop.deleteOne(
            {
                name: 'Beans'
            }
        );
        console.log(result);
        expect(result.result.n).to.equal(1);
    });
});