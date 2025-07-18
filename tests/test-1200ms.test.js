describe('Slow-Plus 1200ms Tests', () => {
  test('slow-plus test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    expect(12 * 13).toBe(156);
  });

  test('slow-plus test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    expect('containers'.includes('tain')).toBe(true);
  });

  test('slow-plus test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    expect([20, 21, 22].slice(1)).toEqual([21, 22]);
  });

  test('slow-plus test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    expect(Boolean(1)).toBe(true);
  });
}); 