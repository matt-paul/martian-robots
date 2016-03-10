function Robot () {
}

Robot.prototype = {

  constructor: Robot,

  downloadData: function(x,y, orientation,instructions) {
    this.coordinates = [x,y];
    this.orientation = orientation;
    this.instructions = instructions.split('');
    this.trackingArray = [[x,y]];
    this.lostRobotHistory = [];
  },

  _moveForward: function() {
    if(this.orientation === 'N') {
      this.coordinates[1] +=1;
    } else if (this.orientation === 'S') {
      this.coordinates[1] -=1;
    } else if (this.orientation === 'E') {
      this.coordinates[0] +=1;
    } else if(this.orientation === 'W') {
      this.coordinates[0] -=1;
    }
    this.trackingArray.push(this.coordinates)
  },

  _orientate: function(instruction) {
    if (instruction === 'L') {
      var leftMap = {'N': 'W', 'W': 'S', 'S': 'E','E': 'N'}
      this.orientation = leftMap[this.orientation];
    } else if (instruction === 'R') {
      var rightMap = {'N': 'E', 'E': 'S', 'S': 'W','W': 'N'}
      this.orientation = rightMap[this.orientation];
    }
  },

  navigate: function() {
    for (var i = 0; i < this.instructions.length; i++) {
      var command = this.instructions[i];
      console.log(command);
      if (command === 'F') {
        this._moveForward()
      } else if (command === 'L' || 'R') {
        this._orientate(this.instructions[i])
      }
    }
  }

};


