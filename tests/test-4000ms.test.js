describe('Mega Slow 4000ms Tests', () => {
  test('mega slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(30 * 31).toBe(930);
  });

  test('mega slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect('performance'.split('').reverse().join('')).toBe('ecnamrofrep');
  });

  test('mega slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect([10, 20, 30].every(x => x % 10 === 0)).toBe(true);
  });

  test('mega slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(Math.abs(-42)).toBe(42);
  });
}); 