const Person = require('../person');

let person;

beforeEach(() => {
  person = new Person ('Matt', 26)
})

test('person class should have attributes of a name and age', () => {
  expect(person.name).toBe('Matt');
  expect(person.age).toBe(26);
})
