describe('Medium 500ms Tests', () => {
  test('medium test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 120));
    expect(5 * 5).toBe(25);
  });

  test('medium test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 130));
    expect('world'.toUpperCase()).toBe('WORLD');
  });

  test('medium test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 125));
    expect([1, 2, 3, 4, 5].includes(3)).toBe(true);
  });

  test('medium test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 125));
    expect({ a: 1, b: 2 }).toHaveProperty('a');
  });
}); 