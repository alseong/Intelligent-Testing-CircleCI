describe('Medium 600ms Tests', () => {
  test('medium-slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(6 * 7).toBe(42);
  });

  test('medium-slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 150));
    expect('circleci'.substring(0, 6)).toBe('circle');
  });

  test('medium-slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 150));
    expect([7, 8, 9].map(x => x + 1)).toEqual([8, 9, 10]);
  });

  test('medium-slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(typeof undefined).toBe('undefined');
  });
}); 