import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

test('extractEmails returns emails from member objects', () => {
  const members = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ];
  assert.deepEqual(extractEmails(members), [
    'john@example.com',
    'jane@example.com',
  ]);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
  assert.deepEqual(extractEmails('not-an-array'), []);
});

test('isValidEmail validates email format', () => {
  assert.equal(isValidEmail('john@example.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(123), false);
});

test('getValidEmails returns only valid emails', () => {
  const members = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Bad', email: 'not-an-email' },
    { name: 'Jane', email: 'jane@example.com' },
  ];
  assert.deepEqual(getValidEmails(members), [
    'john@example.com',
    'jane@example.com',
  ]);
});

test('getValidEmails returns empty array for non-array input', () => {
  assert.deepEqual(getValidEmails(undefined), []);
});
