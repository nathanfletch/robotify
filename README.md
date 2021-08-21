# Robotify
Robot77 wants to chat.

## Author

Nathan Fletcher

## Description

This project accepts a number and outputs a message from Robot77.

## Techonologies used:

- Git
- HTML
- CSS
- Bootstrap

## Setup

1. Clone the source code from the [repo](https:Test: 'It shouldgithub.com/nathanfletch/portfolio)
2. Navigate to the directory on your computer.
3. Open the index.html file in your browser.


## Known Bugs

There are no known bugs at this time.

## Future Plans

-Add more styling
-Add animations
-Add a blackscreen on the 77 error message
-Add name input
-Add word input for custom replacement


## Contact

The best way to reach me is by [email](mailto:nathan.fletcher@gmail.com).

## License

The MIT License (MIT)

Copyright (c) 2021 Nathan Fletcher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

Describe: robotify()

Test: 'It should return the message "I only understand a single positive integer" if the user inputs an empty string'
Expect(robotify("")).toEqual(["I only understand a single positive integer"]);

Test: 'It should return "0" if the user inputs 0'
Expect(robotify("0")).toEqual(["0"]);

Test: 'It should remove empty spaces if the user input includes empty spaces before or after an integer'
Expect(robotify(" 0")).toEqual(["0"]);

Test: 'It should return the message "I only understand a single positive integer" if the user inputs any string other than a single positive integer with whitespace'
Expect(robotify("hi")).toEqual(["I only understand a single positive integer"]);

<!-- 
This test was overridden and replaced once special cases were introduced:
Test: 'It should generate an array of numbers from 0 to the user input'
Expect(robotify("1")).toEqual(["0", "1"]); 
-->

Test: 'It should replace numbers that contain the digit 1 with "Beep!" '
Expect(robotify("1")).toEqual(["0", "Beep!"]);

Test: 'It should replace numbers that contain the digit 2 with "Boop!"'
Expect(robotify("2")).toEqual(["0", "Beep!", "Boop!"]);

Test: 'It should replace numbers that contain the digit 3 with "Won't you be my neighbor?"'
Expect(robotify("3")).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?"]);

Test: 'It should prioritize replacing numbers that contain the digit 2 with "Boop!" over replacing numbers that contain the digit 1 with "Beep!"'
Expect(robotify("12")).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep", "Beep", "Boop!"]);

Test: 'It should prioritize replacing numbers that contain the digit 3 with "Won't you be my neighbor?" over replacing numbers that contain the digit 1 with "Beep!"'
Expect(robotify("13")).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep", "Beep", "Boop!", "Won't you be my neighbor?"]);

Test: 'It should prioritize replacing numbers that contain the digit 3 with "Boop!" over replacing numbers that contain the digit 2 with "Boop!"'
Expect(robotify("23")).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep", "Beep", "Boop!", "Won't you be my neighbor?", "Beep", "Beep", "Beep", "Beep", "Beep", "Beep", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]);

Test: 'It should return a special message repeating "WHY ARE YOU HURTING ME!?" until the robot dies'
Expect(robotify("77")).toEqual(["WHY ARE YOU HURTING ME!?", "WHY ARE YOU HURTING ME!?", "WHY ARE YOU HURTING ME!?", "WHY ARE YOU HURTING ME!?", "EXPERIENCING TERMINAL FAILURE!!"]);

Test: 'It should add the input name to the end of "Won't you be my neighbor?" if it is given a 2nd parameter'
Expect(robotify("3", "bob")).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor, bob?"]);

Describe: teach()

Test: 'It should replace every element in the array output by robotify() that contains the digit input by the user to be the phrase input by the user'
Expect(teach(["0", "Beep!"], "abc4", "0")).toEqual(["abc4", "Beep!"]);