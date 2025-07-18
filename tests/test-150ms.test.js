describe('Fast 150ms Tests', () => {
  test('quick-medium test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 37));
    expect(3 + 4).toBe(7);
  });

  test('quick-medium test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 38));
    expect('jest'.toUpperCase()).toBe('JEST');
  });

  test('quick-medium test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 37));
    expect([4, 5, 6].length).toBe(3);
  });

  test('quick-medium test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 38));
    expect(false || true).toBe(true);
  });
}); 