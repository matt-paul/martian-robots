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

  describe('changing orientation', function() {

    describe('turning left', function() {
      it('should turn to face west when facing north', function() {
        rob.orientate('L', 'N');
        expect(rob.orientation).toEqual('W');
      });

      it('should turn to face south when facing west', function() {
        rob.orientate('L', 'W');
        expect(rob.orientation).toEqual('S');
      });

      it('should turn to face east when facing south', function() {
        rob.orientate('L', 'S');
        expect(rob.orientation).toEqual('E');
      });

      it('should turn to face north when facing east', function() {
        rob.orientate('L', 'E');
        expect(rob.orientation).toEqual('N');
      });
    });


    describe('turning right', function() {
      it('should turn to face east when facing north', function() {
        rob.orientate('R', 'N');
        expect(rob.orientation).toEqual('E');
      });

      it('should turn to face south when facing east', function() {
        rob.orientate('R', 'E');
        expect(rob.orientation).toEqual('S');
      });

      it('should turn to face west when facing south', function() {
        rob.orientate('R', 'S');
        expect(rob.orientation).toEqual('W');
      });

      it('should turn to face north when facing west', function() {
        rob.orientate('R', 'W');
        expect(rob.orientation).toEqual('N');
      });
    });
  });
});
