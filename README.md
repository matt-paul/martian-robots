## Martian Robots

While in a suitable direcitory, type ```git clone https://github.com/matt-paul/martian-robots``` in a terminal window.

To run the jasmine unit tests, open```SpecRunner.html``` in a browser.

```
## User stories

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
to not behave like a lemming.

As a robot, I must transmit my final grid position and orientation back to
planet earth so that my masters know where I am.
```

![Jasmine Tests](/images/Jasmine-tests.png)
