describe('Super Fast 25ms Tests', () => {
  test('instant test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 6));
    expect(0).toBe(0);
  });

  test('instant test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 6));
    expect('').toBe('');
  });

  test('instant test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 7));
    expect(false).toBe(false);
  });

  test('instant test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 6));
    expect([]).toEqual([]);
  });
}); 