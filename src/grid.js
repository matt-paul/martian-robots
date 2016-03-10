function Grid(outerEdgeCoordinates) {
  this.outerEdgeCoordinates = outerEdgeCoordinates.toString(10).split("").map(Number);
  this.lostRobotCoordinatesArray = [];
}

Grid.prototype = {
  constructor: Grid,

  addRobot: function(robot) {
    this.robot = robot;
  },

  transmitLostRobotData: function() {
    this.robot.lostRobotHistory.push(this.lostRobotCoordinatesArray);
  },

  trackRobot: function() {
    if (this.robot.coordinates[0] > this.outerEdgeCoordinates[0]) {
      this.robot.coordinates.push('LOST');
      this._updateLostRobotDataArray();
    }
  },

  _updateLostRobotDataArray: function() {
    var lostData = this.robot.coordinates;
    var filteredData = lostData.filter(function(val) {
      return val !== 'LOST';
    });
      this.lostRobotCoordinatesArray.push(filteredData);
  }

};

