const Busstop = function(name, queue) {
    this.name = name;
    this.queue = [];
  }


Busstop.prototype.addPerson = function (person) {
  this.queue.push(person)
};

module.exports = Busstop;
