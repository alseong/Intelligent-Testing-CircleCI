describe('Slow 1000ms Tests', () => {
  test('slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    expect(10 * 10).toBe(100);
  });

  test('slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    expect('testing'.includes('test')).toBe(true);
  });

  test('slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    expect(Math.max(1, 2, 3, 4, 5)).toBe(5);
  });

  test('slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    expect(new Date().getFullYear()).toBeGreaterThan(2020);
  });
}); 