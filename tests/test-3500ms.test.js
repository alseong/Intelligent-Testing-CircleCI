describe('Super Slow 3500ms Tests', () => {
  test('super slow test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 875));
    expect(25 * 26).toBe(650);
  });

  test('super slow test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 875));
    expect('optimization'.endsWith('tion')).toBe(true);
  });

  test('super slow test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 875));
    expect([6, 7, 8, 9].some(x => x > 8)).toBe(true);
  });

  test('super slow test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 875));
    expect(Math.ceil(3.14)).toBe(4);
  });
}); 