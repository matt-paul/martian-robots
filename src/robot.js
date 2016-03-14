function Robot () {
}

Robot.prototype = {
  constructor: Robot,

  downloadData: function(x,y, orientation,instructions, lostRobotHistory) {
    this.coordinates = [x,y];
    this.orientation = orientation;
    this.instructions = instructions.split('');
    this.lostRobotHistory =  typeof(lostRobotHistory) === 'undefined' ? [[99,99]] : [lostRobotHistory];
    this.lookAhead = [x,y];
  },

  navigate: function() {
    this.instructions.forEach(this._interpretCommand, this);
  },

  _interpretCommand: function(command) {
    command === 'F' ? this._moveForward() : this._orientate(command);
  },

  _moveForward: function() {
    this._lookAhead();
    for ( var i=0; i < this.lostRobotHistory.length; i++) {
      for ( var x=0; x < this.lostRobotHistory[i].length; x++ ) {
        if (this.lostRobotHistory[i][x][0] === this.lookAhead[0] && this.lostRobotHistory[i][x][1] === this.lookAhead[1]) {
          console.log("Not so fast, robot");
        } else {
          this.coordinates = [this.lookAhead[0], this.lookAhead[1]];
        }
      }
    }
  },

  _lookAhead: function() {
    this.orientation === 'N' ? this.lookAhead[1] +=1:
    this.orientation === 'S' ? this.lookAhead[1] -=1:
    this.orientation === 'E' ? this.lookAhead[0] +=1:
    this.orientation === 'W' ? this.lookAhead[0] -=1:
    this.lookAhead;
  },

  _orientate: function(instruction) {
    if (this._isValidReorientation(instruction)) {
      instruction === 'L' ? this._orientateLeft() : this._orientateRight();
    }
  },

  _isValidReorientation: function(instruction) {
   return instruction === 'L' || instruction === 'R' ? true : false;
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


