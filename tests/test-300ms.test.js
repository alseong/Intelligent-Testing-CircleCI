describe('Medium 300ms Tests', () => {
  test('medium-fast test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 75));
    expect(2 * 3).toBe(6);
  });

  test('medium-fast test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 75));
    expect('test'.charAt(0)).toBe('t');
  });

  test('medium-fast test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 75));
    expect([].length).toBe(0);
  });

  test('medium-fast test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 75));
    expect(typeof 'string').toBe('string');
  });
}); 