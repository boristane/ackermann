import ackermann from '../src/ackermann';

describe('hackermann', () => {
  test('on common values', () => {
    expect(ackermann(0, 0)).toBe(1);
    expect(ackermann(0, 1)).toBe(2);
    expect(ackermann(0, 2)).toBe(3);
    expect(ackermann(0, 3)).toBe(4);
    expect(ackermann(0, 4)).toBe(5);
    expect(ackermann(1, 0)).toBe(2);
    expect(ackermann(1, 1)).toBe(3);
    expect(ackermann(1, 2)).toBe(4);
    expect(ackermann(1, 3)).toBe(5);
    expect(ackermann(1, 4)).toBe(6);
    expect(ackermann(2, 0)).toBe(3);
    expect(ackermann(2, 1)).toBe(5);
    expect(ackermann(2, 2)).toBe(7);
    expect(ackermann(2, 3)).toBe(9);
    expect(ackermann(2, 4)).toBe(11);
    expect(ackermann(3, 0)).toBe(5);
    expect(ackermann(3, 1)).toBe(13);
    expect(ackermann(3, 2)).toBe(29);
    expect(ackermann(3, 3)).toBe(61);
    expect(ackermann(3, 4)).toBe(125);
    expect(ackermann(4, 0)).toBe(13);
    expect(ackermann(-1, 0)).toBeUndefined();
  });
  // From http://www.liquisearch.com/ackermann_function/table_of_values
});
