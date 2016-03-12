function Robot () {
}

Robot.prototype = {
  constructor: Robot,

  downloadData: function(x,y, orientation,instructions, lostRobotHistory) {
    this.coordinates = [x,y];
    this.orientation = orientation;
    this.instructions = instructions.split('');
    this.trackingArray = [[x,y]];
    this.lostRobotHistory = [lostRobotHistory];
  },

  navigate: function() {
    for (var i = 0; i < this.instructions.length; i++) {
      this.instructions[i] === 'F' ? this._moveForward() : this._orientate(this.instructions[i]);
    }
  },

  _moveForward: function() {
    this._moveToNextGridPostion();
    this.trackingArray.push(this.coordinates);
  },

  _moveToNextGridPosition: function() {
    this.orientation === 'N' ? this.coordinates[1] +=1:
    this.orientation === 'S' ? this.coordinates[1] -=1:
    this.orientation === 'E' ? this.coordinates[0] +=1:
    this.coordinates[0] -=1;
  },

  _orientate: function(instruction) {
    if (instruction === 'L' || instruction === 'R') {
      instruction === 'L' ? this._orientateLeft() : this._orientateRight();
    }
  },

  _orientateLeft: function() {
      var leftMap = {'N': 'W', 'W': 'S', 'S': 'E','E': 'N'}
      this.orientation = leftMap[this.orientation];
  },

   _orientateRight: function() {
      var rightMap = {'N': 'E', 'E': 'S', 'S': 'W','W': 'N'}
      this.orientation = rightMap[this.orientation];
  }

};


