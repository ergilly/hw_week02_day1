const Bus = require('../bus');
const Person = require('../person')
const Busstop = require('../bus_stop')

let bus;

beforeEach(() => {
  bus = new Bus (2, 0, 'The Jewel', []);
  passenger1 = new Person ('Matt', 26);
  passenger2 = new Person ('Rose', 23);
  passenger3 = new Person ('Euan', 24);
  bus_stop = new Busstop ('Haymarket', []);
})

test('Bus should have a route number, distance and destination', () => {
  expect(bus.routeNum).toBe(2);
  expect(bus.distance).toBe(0);
  expect(bus.destination).toBe('The Jewel');
})

test('Bus should have a drive method that adds 10 to distance', () => {
  bus.drive();
  expect(bus.distance).toBe(10);
})

test('Bus should have a property "passengers" which should be an empty array', () => {
  expect(bus.passengers).toEqual([]);
})

test('Bus should have a method to return how many passengers onboard', () => {
  expect(bus.howManyPassengers()).toBe(0);
})

test('Bus should have a method to add a Person to the array of passengers', () => {
  bus.pickUp(passenger1);
  expect(bus.howManyPassengers()).toBe(1);
})

test('Bus should have a method to drop off a passenger and remove them from the array', () => {
  bus.pickUp(passenger2);
  bus.dropOff(passenger2);
  expect(bus.howManyPassengers()).toBe(0);
})

test('Bus should have a method to empty the bus of all passengers', () => {
  bus.pickUp(passenger1, passenger2, passenger3);
  bus.empty();
  expect(bus.howManyPassengers()).toBe(0);
})

//Extension

test('Bus should have a method to pick up all passengers from the stop', () => {
  bus_stop.addPerson(passenger1);
  bus_stop.addPerson(passenger2);
  bus_stop.addPerson(passenger3);

  bus.pickUpFromStop(bus_stop);
  expect(bus_stop.queue.length).toBe(0);
})
