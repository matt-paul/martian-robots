function Grid() {
}

Grid.prototype = {
  constructor: Grid,

  initialize: function(outerEdgeCoordinates) {
    this.outerEdgeCoordinates = outerEdgeCoordinates.toString().split("").map(Number);
    this.lostRobotCoordinatesArray = [];
  },

  addRobot: function(robot) {
    this.robot = robot;
  },

  transmitLostRobotData: function() {
    this.robot.lostRobotHistory.push.apply(this.robot.lostRobotHistory, this.lostRobotCoordinatesArray);
  },

  trackRobot: function() {
    if (this._robotOffGrid) {
      this.robot.coordinates.push('LOST');
      this._updateLostRobotDataArray();
    }
  },

  _robotOffGrid: function() {
    return this._offXAxis() || this._offYAxis();
  },

  _offXAxis: function() {
    return this.robot.coordinates[0] > this.outerEdgeCoordinates[0];
  },

  _offYAxis: function() {
    return this.robot.coordinates[1] > this.outerEdgeCoordinates[1];
  },

  _updateLostRobotDataArray: function() {
    var lostData = this.robot.coordinates;
    var filteredData = lostData.filter(function(val) {
      return val !== 'LOST';
    });
    this.lostRobotCoordinatesArray.push(filteredData);
  }
};
