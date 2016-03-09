describe('The Grid', function() {

  var mars;

  beforeEach(function() {
    mars = new Grid(53);
  });

  it('should be in existance', function() {
    expect(mars.outerEdgeCoordinates).toBeDefined();
  });

  it('should transform input into an array of integers', function() {
    expect(mars.outerEdgeCoordinates).toEqual([5,3])
  });
});
