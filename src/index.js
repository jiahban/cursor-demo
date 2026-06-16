import { getValidEmails } from './email.js';

console.log('hello cursor');

const members = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
  { name: 'Jim', email: 'jim@example.com' },
];

const emails = getValidEmails(members);
console.log(emails);
