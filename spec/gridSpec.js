describe('The Grid', function() {

  var mars;

  beforeEach(function() {
    mars = new Grid(77);
  });

  it('should be in existance', function() {
    expect(mars.outerEdgeCoordinates).toBeDefined();
  });

  it('should transform input into an array of integers', function() {
    expect(mars.outerEdgeCoordinates).toEqual([7,7])
  });

  describe('updating with lost robot coordinates', function() {

    it('should have am update lost robots method', function() {
      expect(mars.updateLostRobots).toBeDefined();
    });

    it('should update the lost robots array of coordinates', function() {
      mars.updateLostRobots([7,7]);
      expect(mars.lostRobotCoordinatesArray).toEqual([[7,7]]);
    })

  });
});
