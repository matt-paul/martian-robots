describe('Robot', function() {

  var rob;

  beforeEach(function() {
    rob = new Robot(1,1);
  });

  describe('inititalisation', function() {

    it('should have some starting coordinates', function() {
      expect(rob.coordinates).toBeDefined();
    });
  });
});
