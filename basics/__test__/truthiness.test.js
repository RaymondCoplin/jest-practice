// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('null', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
    expect(data).not.toBeTruthy();
    expect(data).toBeFalsy();
});

test('zero validation', () => {
    const num = 0;
    
    expect(num).not.toBeNull();
    expect(num).toBeDefined();
    expect(num).not.toBeTruthy();
    expect(num).toBeFalsy();
});