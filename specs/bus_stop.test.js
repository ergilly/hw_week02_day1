const Busstop = require('../bus_stop');
const Person = require('../person')

let bus_stop;
let person;

beforeEach(() => {
  bus_stop = new Busstop ('Haymarket', person)
  person = new Person ('Matt', 26)
})

test('Busstop needs method to add person to the queue',() => {
  bus_stop.addPerson(person);
  expect(bus_stop.queue.length).toBe(1);
})
