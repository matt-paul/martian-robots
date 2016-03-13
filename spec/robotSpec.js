describe('Robot', function() {

  var rob;

  beforeEach(function() {
    rob = new Robot();
  });

  describe('inititalisation', function() {
    beforeEach(function() {
      rob.downloadData(1,1,'E','FF',77, [1,3])
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
      rob.downloadData(1,1,'N','F')
      rob._moveForward();
      expect(rob.coordinates).toEqual([1,2]);
    });

    it('should move south', function() {
      rob.downloadData(1,1,'S','F')
      rob._moveForward();
      expect(rob.coordinates).toEqual([1,0]);
    });

    it('should move east', function() {
      rob.downloadData(1,1,'E','F')
      rob._moveForward();
      expect(rob.coordinates).toEqual([2,1]);
    });

    it('should move west', function() {
      rob.downloadData(1,1,'W','F')
      rob._moveForward();
      expect(rob.coordinates).toEqual([0,1]);
    });
  });

  describe('changing orientation', function() {
    describe('invalid orientation command', function() {
      it('should not change direction if a invalid command is given', function() {
        rob.downloadData(1,1,'N', 'F');
        rob._orientate('Z');
        expect(rob.orientation).toEqual('N');
      });
    });

    describe('turning left', function() {
      it('should turn to face west when facing north', function() {
        rob.downloadData(1,1,'N','F')
        rob._orientate('L');
        expect(rob.orientation).toEqual('W');
      });

      it('should turn to face south when facing west', function() {
        rob.downloadData(1,1,'W','F')
        rob._orientate('L');
        expect(rob.orientation).toEqual('S');
      });

      it('should turn to face east when facing south', function() {
        rob.downloadData(1,1,'S','F')
        rob._orientate('L');
        expect(rob.orientation).toEqual('E');
      });

      it('should turn to face north when facing east', function() {
        rob.downloadData(1,1,'E','F')
        rob._orientate('L');
        expect(rob.orientation).toEqual('N');
      });
    });

    describe('turning right', function() {
      it('should turn to face east when facing north', function() {
        rob.downloadData(1,1,'N','F')
        rob._orientate('R');
        expect(rob.orientation).toEqual('E');
      });

      it('should turn to face south when facing east', function() {
        rob.downloadData(1,1,'E','F')
        rob._orientate('R');
        expect(rob.orientation).toEqual('S');
      });

      it('should turn to face west when facing south', function() {
        rob.downloadData(1,1,'S','F')
        rob._orientate('R');
        expect(rob.orientation).toEqual('W');
      });

      it('should turn to face north when facing west', function() {
        rob.downloadData(1,1,'W','F')
        rob._orientate('R');
        expect(rob.orientation).toEqual('N');
      });
    });
  });

  describe('tracking grid positions', function() {
    it('should push each grid position on the journey into an array', function() {
      rob.downloadData(1,1,'N','F',[])
      rob._moveForward();
      expect(rob.trackingArray).toEqual([[1,1],[1,2]])
    });
  });

  describe('navigating', function() {
    it('should give back a correct final grid position for Sample Input 1', function() {
      rob.downloadData(1,1,'E','RFRFRFRF',[])
      rob.navigate();
      expect(rob.coordinates).toEqual([1,1]);
    });

    it('should give back a correct final grid position for Sample Input 2', function() {
      rob.downloadData(3,2,'N','FRRFLLFFRRFLL',[])
      rob.navigate();
      expect(rob.coordinates).toEqual([3,3]);
    });

    it('should give back a correct final orientation for Sample Input 1', function() {
      rob.downloadData(1,1,'E','RFRFRFRF',[])
      rob.navigate();
      expect(rob.orientation).toEqual('E');
    });

    it('should give back a correct final orientation for Sample Input 2', function() {
      rob.downloadData(3,2,'N','FRRFLLFFRRFLL',[])
      rob.navigate();
      expect(rob.orientation).toEqual('N');
    });

  });

});
