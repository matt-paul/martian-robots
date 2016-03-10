function Grid(outerEdgeCoordinates) {
  this.outerEdgeCoordinates = outerEdgeCoordinates.toString(10).split("").map(Number);
  this.lostRobotCoordinatesArray = [];
}

Grid.prototype = {
  constructor: Robot,

  updateLostRobots: function(coordinates) {
  this.lostRobotCoordinatesArray.push(coordinates);
  }
};

