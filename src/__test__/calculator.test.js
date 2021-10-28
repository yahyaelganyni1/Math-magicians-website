import calculator from '../components/logic/calculate';

describe('Quick maths', () => {
  test('1 + 1 = 2', () => {
    let data = {};

    data = { ...data, ...calculator(data, '1') };
    data = { ...data, ...calculator(data, '+') };
    data = { ...data, ...calculator(data, '1') };
    data = { ...data, ...calculator(data, '=') };

    expect(data).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });
  test('3 - 1 = 2', () => {
    let data = {};

    data = { ...data, ...calculator(data, '3') };
    data = { ...data, ...calculator(data, '-') };
    data = { ...data, ...calculator(data, '1') };
    data = { ...data, ...calculator(data, '=') };

    expect(data).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });

  test('2 x 2 = 4', () => {
    let data = {};

    data = { ...data, ...calculator(data, '2') };
    data = { ...data, ...calculator(data, 'x') };
    data = { ...data, ...calculator(data, '2') };
    data = { ...data, ...calculator(data, '=') };

    expect(data).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  test('5 ÷ 2 = 4', () => {
    let data = {};

    data = { ...data, ...calculator(data, '5') };
    data = { ...data, ...calculator(data, '÷') };
    data = { ...data, ...calculator(data, '2') };
    data = { ...data, ...calculator(data, '=') };

    expect(data).toEqual({
      total: '2.5',
      next: null,
      operation: null,
    });
  });

  test('1 % 1 = 0', () => {
    let data = {};

    data = { ...data, ...calculator(data, '1') };
    data = { ...data, ...calculator(data, '%') };
    data = { ...data, ...calculator(data, '1') };
    data = { ...data, ...calculator(data, '=') };

    expect(data).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('-2 + 2 = 0', () => {
    let data = {};

    data = { ...data, ...calculator(data, '2') };
    data = { ...data, ...calculator(data, '+/-') };
    data = { ...data, ...calculator(data, '+') };
    data = { ...data, ...calculator(data, '2') };
    data = { ...data, ...calculator(data, '=') };

    expect(data).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });
});
