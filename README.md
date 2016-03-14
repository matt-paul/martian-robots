## Martian Robots

### Getting started
In a suitable directory, type ```git clone https://github.com/matt-paul/martian-robots``` in a terminal window.

To run the jasmine unit tests, open```SpecRunner.html``` in a browser.

### User Stories
```
As a robot, I must be able to interpret the command 'F', and move forward one grid
position so that I can start to explore the planet.

As a robot, I must be able to interpret the command 'R', and turn 90 degrees to
the right so that I can change direction should there be a stray martian rock in
my path.

As a robot, I must be able to interpret the command 'L', and turn 90 degrees to
the left so that I can change direction in case I come across a scary looking
alien on my travels.

As a robot, I must be able to interpret a string of instructions, so that I can
reach my final destination.

As a robot, if my travels take me off the edge of the grid, I must leave my
scent 'LOST', on my last grid point, so as to help future robots.

As a robot, if I receive an instruction to move off the edge of the planet (ie a
gridpoint scented by a previous robot), then I must ignore this command, so as
to not behave like an earthly lemming.

As a robot, I must transmit my final grid position and orientation back to
planet earth so that my ground control knows where I am.
```

![Jasmine Tests](/images/Jasmine-tests.png)

### Further Work
I plan to refactor the 'move forward method'. Originally I intended to use
'index of' to make the comparison, however I learnt that this does not work on
2D arrays, so used a nested for loops, that I am not happy about.  This has
also forced me to use a dummy value (outside of possible coordinates) for
defaulting the 'robot lost history' array in a way that it can be used for
looping through.  My current thinking is that if i process the robot lost data
into strings, I will then be able to use 'index of', cleaning up the above
points.
