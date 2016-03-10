describe('Robot', function() {

  var rob;

  beforeEach(function() {
    rob = new Robot();
  });

  describe('inititalisation', function() {
    beforeEach(function() {
      rob.navigate(1,1,'E','FF',77)
    });
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
      rob.navigate(1,1,'N','FF')
      rob.moveForward();
      expect(rob.coordinates).toEqual([1,2]);
    });

    it('should move south', function() {
      rob.navigate(1,1,'S','FF')
      rob.moveForward();
      expect(rob.coordinates).toEqual([1,0]);
    });

    it('should move east', function() {
      rob.navigate(1,1,'E','FF')
      rob.moveForward();
      expect(rob.coordinates).toEqual([2,1]);
    });

    it('should move west', function() {
      rob.navigate(1,1,'W','FF')
      rob.moveForward();
      expect(rob.coordinates).toEqual([0,1]);
    });
  });

  describe('changing orientation', function() {

    describe('turning left', function() {
      it('should turn to face west when facing north', function() {
        rob.navigate(1,1,'N','FF')
        rob.orientate('L');
        expect(rob.orientation).toEqual('W');
      });

      it('should turn to face south when facing west', function() {
        rob.navigate(1,1,'W','FF')
        rob.orientate('L');
        expect(rob.orientation).toEqual('S');
      });

      it('should turn to face east when facing south', function() {
        rob.navigate(1,1,'S','FF')
        rob.orientate('L');
        expect(rob.orientation).toEqual('E');
      });

      it('should turn to face north when facing east', function() {
        rob.navigate(1,1,'E','FF')
        rob.orientate('L');
        expect(rob.orientation).toEqual('N');
      });
    });


    describe('turning right', function() {
      it('should turn to face east when facing north', function() {
        rob.navigate(1,1,'N','FF')
        rob.orientate('R');
        expect(rob.orientation).toEqual('E');
      });

      it('should turn to face south when facing east', function() {
        rob.navigate(1,1,'E','FF')
        rob.orientate('R');
        expect(rob.orientation).toEqual('S');
      });

      it('should turn to face west when facing south', function() {
        rob.navigate(1,1,'S','FF')
        rob.orientate('R');
        expect(rob.orientation).toEqual('W');
      });

      it('should turn to face north when facing west', function() {
        rob.navigate(1,1,'W','FF')
        rob.orientate('R');
        expect(rob.orientation).toEqual('N');
      });
    });
  });

  describe('tracking grid positions', function() {

    it('should push each grid position on the journey into an array', function() {
      rob.navigate(1,1,'N','FF')
      rob.moveForward();
      expect(rob.trackingArray).toEqual([[1,1],[1,2]])
    });

  });

  describe('carrying out instructions', function() {

    // it('should give back a final grid position', function() {
    //   rob.navigate(3,2,'N','LLFFFLFLFL')
    //   expect(rob.coordinates).toEqual([3,3]);
    // });

  });
});
