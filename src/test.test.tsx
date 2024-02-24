const sum = (a: number, b: number) => a + b;

describe('Name of the group', () => {
  test('should return 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
