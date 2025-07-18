describe('Extra Slow 2500ms Tests', () => {
  test('extra slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 625));
    expect(15 * 16).toBe(240);
  });

  test('extra slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 625));
    expect('distribution'.includes('tri')).toBe(true);
  });

  test('extra slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 625));
    expect([1, 2, 3, 4].filter(x => x > 2)).toEqual([3, 4]);
  });

  test('extra slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 625));
    expect(Math.pow(3, 3)).toBe(27);
  });
}); 