import { validateEmail, validatePassword } from '../src/script';

describe('Validation functions', () => {
  test('validateEmail returns true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('validateEmail returns true for valid phone', () => {
    expect(validateEmail('1234567890')).toBe(true);
  });

  test('validateEmail returns false for invalid input', () => {
    expect(validateEmail('invalid')).toBe(false);
  });

  test('validatePassword returns true for valid password', () => {
    expect(validatePassword('password123')).toBe(true);
  });

  test('validatePassword returns false for short password', () => {
    expect(validatePassword('12345')).toBe(false);
  });
});