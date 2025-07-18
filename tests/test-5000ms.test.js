describe('Maximum Slow 5000ms Tests', () => {
  test('maximum slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 1250));
    expect(40 * 41).toBe(1640);
  });

  test('maximum slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 1250));
    expect('loadbalancing'.replace('load', 'test')).toBe('testbalancing');
  });

  test('maximum slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 1250));
    expect([14, 15, 16].join('-')).toBe('14-15-16');
  });

  test('maximum slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 1250));
    expect(Math.max(2, 8, 4, 6)).toBe(8);
  });
}); 