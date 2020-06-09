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

    it('should update Beans item', async () => {
        const result = await shopRepository.update('beans', {
            'name': 'Beans',
            'description': 'Beens are gr8'
        });
        console.log(result);
        expect(result.result.n).to.equal(1);
    });
});