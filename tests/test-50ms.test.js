describe('Very Fast 50ms Tests', () => {
  test('very quick test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(1).toBe(1);
  });

  test('very quick test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    expect('a').toBe('a');
  });

  test('very quick test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 15));
    expect(true || false).toBe(true);
  });

  test('very quick test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 15));
    expect(null).toBe(null);
  });
}); 