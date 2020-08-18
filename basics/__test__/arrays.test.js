const { carsList, brandList } = require('./../src/arrays');

describe('Checking existing brands', () => {
    test('The array should not be null', () => {
        expect(brandList()).not.toBeNull();
    });
})

describe('Checking existing cards', () => {
    test('The array should not be null', () => {
        expect(carsList()).not.toBeNull();
    });
    
    test('Check if constains a VW Gold', () => {
        expect(carsList()).toContain('VW Gold GTI');
    });

    test('Check the array length', () => {
        expect(carsList()).toHaveLength(3);
    });

});