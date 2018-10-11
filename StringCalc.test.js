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

test('allow unknown number of arguments', () => {
	expect(Add("1,2,3,4,5,6,7,8,9")).toBe(45);
});

test('allow new lines between numbers', () => {
	expect(Add("1\n2,3")).toBe(6);
});