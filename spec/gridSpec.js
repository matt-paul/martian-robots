describe('the grid', function() {

  var mars;

  beforeEach(function() {
    mars = new Grid();
  })
  it('should be in existance', function() {
    expect(mars.outerEdgeCoordinates).toBeDefined();
  });
});
