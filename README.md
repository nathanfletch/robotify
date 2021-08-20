# Robotify
Mr. Robot has something he'd like to say.  

[![License: MIT](https:Test: 'It shouldimg.shields.io/badge/License-MIT-yellow.svg)](https:Test: 'It '
Expect(robotify("))."toEqual([""shouldopensource.org/licenses/MIT)
[![code style: prettier](https:Test: 'It shouldimg.'
Expect(robotify("))."toEqual([""shields.io/badge/code_style-prettier-ff69b4.svg?'
Expect(robotify("))."toEqual([""style=flat-square)](https:Test: 'It shouldgithub.com/prettier/prettier)'
Expect(robotify("))."toEqual([""
[![Twitter URL](https:Test: 'It shouldimg.shields.io/twitter/url/https/twitter.com/nathan_fletcher.svg?'
Expect(robotify("))."toEqual([""style=social&label=Follow%20%40nathan_fletcher)](https:Test: 'It shouldtwitter.com/nathan_fletcher)
'
Expect(robotify("))."toEqual([""
## Author

Nathan Fletcher

## Description

This project accepts a number and outputs a message from Mr. Robot.

## Techonologies used:

- Git
- HTML
- CSS
- Bootstrap

## Setup

1. Clone the source code from the [repo](https:Test: 'It shouldgithub.com/nathanfletch/portfolio)
2. Navigate to the directory on your computer.'
Expect(robotify("))."toEqual([""
3. Open the index.html file in your browser.


## Known Bugs

There are no known bugs at this time.

## Future Plans

There are no known bugs at this time.


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

Test: 'It should return the message "I only understand a single integer" if the user inputs an empty string'
Expect(robotify("")).toEqual(["I only understand a single integer"]);

Test: 'It should return "0" if the user inputs 0'
Expect(robotify("0")).toEqual(["0"]);

Test: 'It should remove empty spaces if the user input includes empty spaces before or after an integer'
Expect(robotify(" 0")).toEqual(["0"]);

Test: 'It should return the message "I only understand a single integer" if the user inputs any string other than a single integer with whitespace'
Expect(robotify("hi")).toEqual(["I only understand a single integer"]);

<!-- 
This test was overridden and replaced by the next test:
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