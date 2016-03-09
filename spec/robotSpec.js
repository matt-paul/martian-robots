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
    });

    it('should have some mars roving instructions', function() {
      expect(rob.instructions).toBeDefined();
    });

    it('should process instruction string into an array', function()  {
    expect(rob.instructions).toEqual(['F','F']);
    });

  });

  describe('moving forward', function() {

    it('should move north', function() {
      rob.moveForward([2,2], 'N');
      expect(rob.coordinates).toEqual([2,3]);
    });

    it('should move south', function() {
      rob.moveForward([2,2], 'S');
      expect(rob.coordinates).toEqual([2,1]);
    });

    it('should move east', function() {
      rob.moveForward([2,2], 'E');
      expect(rob.coordinates).toEqual([3,2]);
    });

    it('should move west', function() {
      rob.moveForward([2,2], 'W');
      expect(rob.coordinates).toEqual([1,2]);
    });

  });

});
