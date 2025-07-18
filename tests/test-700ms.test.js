describe('Medium-Slow 700ms Tests', () => {
  test('medium-slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 175));
    expect(8 * 9).toBe(72);
  });

  test('medium-slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 175));
    expect('splitting'.startsWith('split')).toBe(true);
  });

  test('medium-slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 175));
    expect([17, 18, 19].length).toBe(3);
  });

  test('medium-slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 175));
    expect(typeof 123).toBe('number');
  });
}); 