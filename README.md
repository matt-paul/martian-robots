## Martian Robots

### Getting started
In a suitable direcitory, type ```git clone https://github.com/matt-paul/martian-robots``` in a terminal window.

To run the jasmine unit tests, open```SpecRunner.html``` in a browser.

### Some User Stories I have Created From The Brief.
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

The last feature that I have not had a chance to complete is for the robots to not move off the edge of the world. I would also like to refactor the 'moveforward' method using a lookup table rather than 'if else', which I believe is better practice. Thirdly, I would like to look further at how best to mock the robots within my Grid tests.  Finally I would like refactor using ES6 conventions and try a modular pattern rather than using prototypes.  I would be very interested to see other examples! 
