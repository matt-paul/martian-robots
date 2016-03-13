describe('The Grid', function() {

  var mars, rob;

  beforeEach(function() {
    mars = new Grid();
    mars.initialize(77);
  });

  it('should be in existance', function() {
    expect(mars.outerEdgeCoordinates).toBeDefined();
  });

  it('should transform input into an array of integers', function() {
    expect(mars.outerEdgeCoordinates).toEqual([7,7])
  });

  it('should add a robot to the grid', function() {
    rob = new Robot();
    mars.addRobot(rob);
    expect(mars.robot).toEqual(rob);
  });

  describe('identifying lost robot coordinates', function() {

    beforeEach(function() {
      rob = new Robot();
      mars.addRobot(rob);
      mars.robot.coordinates = [8,7];
      mars.trackRobot();
    });

    it('should track whether a robot has strayed over end of grid', function() {
      expect(mars.lostRobotCoordinatesArray).toEqual([[8,7]]);
    });

    it('should update new robots with missing robot data', function() {
      baz = new Robot();
      baz.downloadData(1,1,'N','F',[]);
      mars.addRobot(baz);
      mars.transmitLostRobotData();
      expect(mars.robot.lostRobotHistory).toEqual([[],[8,7]]);
    });

  });
});
