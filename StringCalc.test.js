const Add = require('tdd');

test('empty string returns 0', () => {
  expect(Add("")).toBe(0);
});

test('string with one number returns the number', () => {
  expect(Add("1")).toBe(1);
});

test('string with two number returns the sum', () => {
  expect(Add("12,20")).toBe(32);
});
