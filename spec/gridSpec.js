describe('The Grid', function() {

  var mars, robot1;

  beforeEach(function() {
    mars = new Grid();
    mars.initialize(77);
  });

  it('should transform input into an array of integers', function() {
    expect(mars.outerEdgeCoordinates).toEqual([7,7])
  });

  it('should add a robot to the grid', function() {
    robot1 = new Robot();
    mars.addRobot(robot1);
    expect(mars.robot).toEqual(robot1);
  });

  describe('identifying lost robot coordinates', function() {

    beforeEach(function() {
      robot1 = new Robot();
      mars.addRobot(robot1);
      mars.robot.coordinates = [8,7];
      mars.trackRobot();
    });

    it('should push lost robot coordinates to an array when robot has strayed over end of grid', function() {
      expect(mars.lostRobotCoordinatesArray).toEqual([[8,7]]);
    });

    it('should recognise when robots coordinates are off the grid', function() {
      expect(mars._robotOffGrid).toBeTruthy();
    });

    it('should update new robots with missing robot data', function() {
      robot2 = new Robot();
      robot2.downloadData(1,1,'N','F',[]);
      mars.addRobot(robot2);
      mars.transmitLostRobotData();
      expect(mars.robot.lostRobotHistory).toEqual([[],[8,7]]);
    });

  });
});
