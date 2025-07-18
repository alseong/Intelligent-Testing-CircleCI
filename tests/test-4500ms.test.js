describe('Extreme Slow 4500ms Tests', () => {
  test('extreme slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 1125));
    expect(35 * 36).toBe(1260);
  });

  test('extreme slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 1125));
    expect('benchmarking'.indexOf('mark')).toBe(5);
  });

  test('extreme slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 1125));
    expect([11, 12, 13].map(x => x * 3)).toEqual([33, 36, 39]);
  });

  test('extreme slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 1125));
    expect(Math.min(7, 3, 9, 1)).toBe(1);
  });
}); 