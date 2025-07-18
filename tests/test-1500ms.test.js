describe('Very Slow 1500ms Tests', () => {
  test('extra slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 375));
    expect(7 * 8).toBe(56);
  });

  test('extra slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 375));
    expect('parallelization'.length).toBe(15);
  });

  test('extra slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 375));
    expect([1, 2, 3].reduce((a, b) => a + b, 0)).toBe(6);
  });

  test('extra slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 375));
    expect(parseInt('42')).toBe(42);
  });
}); 