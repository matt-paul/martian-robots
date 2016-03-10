function Grid(outerEdgeCoordinates) {
  this.outerEdgeCoordinates = outerEdgeCoordinates.toString(10).split("").map(Number);
  this.lostRobotCoordinatesArray = [];
}

Grid.prototype = {
  constructor: Grid,

  addRobot: function(robot) {
    this.robot = robot;
  },

  trackRobot: function() {
    if (this.robot.coordinates[0] > this.outerEdgeCoordinates[0]) {
      this.lostRobotCoordinatesArray.push(this.robot.coordinates);
    }
  },

  sendLostRobotData: function() {
    this.robot.lostRobotHistory.push(this.lostRobotCoordinatesArray);
  }
};

