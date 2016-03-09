function Robot (x,y,o,i) {
  this.coordinates = [x,y];
  this.orientation = o;
  this.instructions = i.split('');
}

Robot.prototype = {

  constructor: Robot,

  moveForward: function(coordinates, orientation) {
    //add helper method to validate the orientation input
    if(orientation === 'N') {
      coordinates[1] +=1;
    } else if (orientation === 'S') {
      coordinates[1] -=1;
    } else if (orientation === 'E') {
      coordinates[0] +=1;
    } else {
      coordinates[0] -=1;
    }
    this.coordinates = coordinates;
  },

  orientate: function(instruction, orientation) {
    if (instruction === 'L') {
      var leftMap = {'N': 'W', 'W': 'S', 'S': 'E','E': 'N'}
      this.orientation = leftMap[orientation];
    } else {

    }
  },


};




