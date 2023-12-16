# Pentaclock
A binary clock in the form of a pentagram

You start with the outer ring on top and read binary clockwise to read the hours.
Then you start in the middle and go down, then clockwise for the minutes.

## Interactive functions 
Pressing `h` flips the pentagram.  
Pressing `p` flips the pentagram back.  

Adding `?hex=y` to the url will flip the pentagram.  

Mouse click toggles the explanation text.

Identify field 1-11 by pressing keys `1` `2` `3` `4` `5` `6` `7` `8` `9` `0` `+`

### Hours
- Field 1 -> Hour 1
- Field 2 -> Hour 2
- Field 3 -> Hour 4
- Field 4 -> Hour 8
- Field 5 -> Hour 16

### Minutes
- Field 6 -> Minute 1
- Field 7 -> Minute 2
- Field 8 -> Minute 4
- Field 9 -> Minute 8
- Field 10 -> Minute 16
- Field 11 -> Minute 32

### Example

![Pentaclock 13:37 example](https://github.com/panzerpandaninja/pentaclock/blob/master/1337.png?raw=true)

This image shows hour-fields 1, 4 and 8.

   `1 + 4 + 8 = 13`

    
And minute-fields 1, 4 and 32.

   `1 + 4 + 32 = 37`


