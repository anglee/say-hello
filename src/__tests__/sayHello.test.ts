import { sayHello } from '../index';

test('Say Hello', () => {
  expect(sayHello('Mozart')).toBe('Hello, Mozart!!');
});
