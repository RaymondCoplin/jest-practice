test('2 + 2 is 4', () => {
    expect(2 + 2).toBe(4);
});

test('Object validation', () => {
    const data = {
        username: 'raymondcoplin'
    };

    const data2 = {
        username: '@raymondcoplin'
    };

    expect(data).not.toEqual(data2);
});