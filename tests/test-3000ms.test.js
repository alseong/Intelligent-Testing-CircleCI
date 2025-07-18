describe('Ultra Slow 3000ms Tests', () => {
  test('ultra slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 750));
    expect(20 * 21).toBe(420);
  });

  test('ultra slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 750));
    expect('parallelization'.substring(0, 8)).toBe('parallel');
  });

  test('ultra slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 750));
    expect([5, 10, 15].reduce((sum, x) => sum + x, 0)).toBe(30);
  });

  test('ultra slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 750));
    expect(Math.sqrt(144)).toBe(12);
  });
}); 