describe('Very Slow 2000ms Tests', () => {
  test('very slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(100 + 200).toBe(300);
  });

  test('very slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    expect('knapsack'.split('').reverse().join('')).toBe('kcaspank');
  });

  test('very slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    expect([1, 2, 3].map(x => x * 2)).toEqual([2, 4, 6]);
  });

  test('very slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(JSON.parse('{"test": true}')).toEqual({ test: true });
  });
}); 