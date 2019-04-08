const Bus = function(routeNum, distance, destination, passengers) {
    this.routeNum = routeNum;
    this.distance = distance;
    this.destination = destination;
    this.passengers = passengers;
};

Bus.prototype.drive = function () {
  return this.distance += 10;
};

Bus.prototype.howManyPassengers = function () {
  return this.passengers.length;
};

Bus.prototype.pickUp = function (passenger) {
  this.passengers.push(passenger)
};

Bus.prototype.dropOff = function (passenger) {
  for (var i = 0; i < this.passengers.length; i++) {
    if(this.passengers[i] == passenger) {
      this.passengers.splice(i, 1);
    }
  }
};

Bus.prototype.empty = function () {
  for (var i = 0; i < this.passengers.length; i++) {
    this.passengers.splice(i,1);
    i--
  }
};

Bus.prototype.pickUpFromStop = function (bus_stop) {
  for (var i = 0; i < bus_stop.queue.length; i++) {
    this.passengers.push(bus_stop.queue.splice(i,1));
    i--
  }
};

module.exports = Bus;
