describe('Robot', function() {

  var rob;

  beforeEach(function() {
    rob = new Robot(1,1,'E','FF');
  });

  describe('inititalisation', function() {

    it('should have some starting coordinates', function() {
      expect(rob.coordinates).toBeDefined();
    });

    it('should have a starting orientation', function() {
      expect(rob.orientation).toBeDefined();
    })

    it('should have some mars roving instructions', function() {
      expect(rob.instructions).toBeDefined();
    })
  });
});
