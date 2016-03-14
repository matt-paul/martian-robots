describe('Robot', function() {

  var rob;

  beforeEach(function() {
    rob = new Robot();
  });

  describe('downloading data', function() {
    beforeEach(function() {
      rob.downloadData(1,1,'E','FF', [1,3])
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

    it('should have a lost robot history', function() {
      expect(rob.lostRobotHistory).toEqual([[1,3]]);
    });
  });


  describe('no lost robots', function() {
    it('should insert a placeholder for lost robot array', function() {
      rob.downloadData(1,1,'E','FF')
      expect(rob.lostRobotHistory).toEqual([[99,99]]);
    });
  });

  describe('moving forward', function() {
    it('should move north', function() {
      rob.downloadData(1,1,'N','F',[2,2])
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

  describe('navigating', function() {
    it('should give back a correct final grid position for Sample Input 1', function() {
      rob.downloadData(1,1,'E','RFRFRFRF')
      rob.navigate();
      expect(rob.coordinates).toEqual([1,1]);
    });

    it('should give back a correct final grid position for Sample Input 2', function() {
      rob.downloadData(3,2,'N','FRRFLLFFRRFLL')
      rob.navigate();
      expect(rob.coordinates).toEqual([3,3]);
    });

    it('should give back a correct final orientation for Sample Input 1', function() {
      rob.downloadData(1,1,'E','RFRFRFRF')
      rob.navigate();
      expect(rob.orientation).toEqual('E');
    });

    it('should give back a correct final orientation for Sample Input 2', function() {
      rob.downloadData(3,2,'N','FRRFLLFFRRFLL')
      rob.navigate();
      expect(rob.orientation).toEqual('N');
    });
  });

  describe('being asked to go pass a lost robot position', function() {
    it('should stop before a lost robot coordinate', function() {
      rob.downloadData(1,1,'N','FFF',[[1,4]])
      rob.navigate();
      expect(rob.coordinates).toEqual([1,3]);
    });
  });

});
