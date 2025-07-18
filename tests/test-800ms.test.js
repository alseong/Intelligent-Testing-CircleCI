describe('Slow 800ms Tests', () => {
  test('slow-medium test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(4 * 4).toBe(16);
  });

  test('slow-medium test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    expect('knapsack-pro'.includes('-')).toBe(true);
  });

  test('slow-medium test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(Object.keys({ x: 1, y: 2 })).toEqual(['x', 'y']);
  });

  test('slow-medium test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(Math.floor(3.7)).toBe(3);
  });
}); 