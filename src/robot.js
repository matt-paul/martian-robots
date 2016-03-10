function Robot (x,y,o,i) {
  this.coordinates = [x,y];
  this.orientation = o;
  this.instructions = i.split('');
  this.trackingArray = [[x,y]];
  // this.grid = new Grid(val=77)
}

Robot.prototype = {

  constructor: Robot,

  moveForward: function(coordinates, orientation) {
    // this.updateLostRobotPositions(coordinates);
    if(orientation === 'N') {
      coordinates[1] +=1;
    } else if (orientation === 'S') {
      coordinates[1] -=1;
    } else if (orientation === 'E') {
      coordinates[0] +=1;
    } else if(orientation === 'W') {
      coordinates[0] -=1;
    }
    this.trackingArray.push(coordinates)
    // return coordinates;
    this.coordinates = coordinates;
  },

  orientate: function(instruction, orientation) {
    if (instruction === 'L') {
      var leftMap = {'N': 'W', 'W': 'S', 'S': 'E','E': 'N'}
      this.orientation = leftMap[orientation];
    } else if (instruction === 'R') {
      var rightMap = {'N': 'E', 'E': 'S', 'S': 'W','W': 'N'}
      this.orientation = rightMap[orientation];
    }
  },

  navigate: function(coordinates, orientation,instructions) {
    this.coordinates = coordinates;
    console.log(orientation);
    for (var i = 0; i < this.instructions.length; i++) {
      console.log(instructions[i]);
      if (instructions[i] === 'L' || 'R') {
        this.orientate(instructions[i], orientation)
        } else if (instructions[i] === 'F') {
          this.moveForward(this.coordinates, this.orientation)
          this.coordinates = coordinates;
        }
    }

  }

  // updateLostRobotPositions: function(coordinates) {
  //   if (this.coordinates[0] > this.grid.outerEdgeCoordinates[0])
  //   this.grid.updateLostRobots(coordinates);
  //   console.log(this.coordinates)
  // }


};


