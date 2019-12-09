import dateFormat from '../../../src/utils/dateFormat';

describe('#yyyymmdd', () => {
  it('正常系', () => {
    const date = new Date(2019, 11, 1);
    const result = dateFormat.yyyymmdd(date);
    const expected = '2019-12-01';
    expect(result).toBe(expected);
  });
});
