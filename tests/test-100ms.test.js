describe('Fast 100ms Tests', () => {
  test('quick test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 20));
    expect(1 + 1).toBe(2);
  });

  test('quick test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 25));
    expect('hello'.length).toBe(5);
  });

  test('quick test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 30));
    expect([1, 2, 3].length).toBe(3);
  });

  test('quick test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 25));
    expect(true).toBe(true);
  });
}); 