describe('Extra-Slow 1800ms Tests', () => {
  test('extra-slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 450));
    expect(18 * 19).toBe(342);
  });

  test('extra-slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 450));
    expect('queuemode'.toUpperCase()).toBe('QUEUEMODE');
  });

  test('extra-slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 450));
    expect([23, 24, 25].reverse()).toEqual([25, 24, 23]);
  });

  test('extra-slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 450));
    expect(isNaN('hello')).toBe(true);
  });
}); 