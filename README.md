# Robotify
Mr. Robot has something he'd like to say.  

[![License: MIT](https:Test: It shouldimg.shields.io/badge/License-MIT-yellow.svg)](https:Test: It 
Code: robotify();
Expected Output: ""shouldopensource.org/licenses/MIT)
[![code style: prettier](https:Test: It shouldimg.
Code: robotify();
Expected Output: ""shields.io/badge/code_style-prettier-ff69b4.svg?
Code: robotify();
Expected Output: ""style=flat-square)](https:Test: It shouldgithub.com/prettier/prettier)
Code: robotify();
Expected Output: ""
[![Twitter URL](https:Test: It shouldimg.shields.io/twitter/url/https/twitter.com/nathan_fletcher.svg?
Code: robotify();
Expected Output: ""style=social&label=Follow%20%40nathan_fletcher)](https:Test: It shouldtwitter.com/nathan_fletcher)

Code: robotify();
Expected Output: ""
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

1. Clone the source code from the [repo](https:Test: It shouldgithub.com/nathanfletch/portfolio)
2. Navigate to the directory on your computer.
Code: robotify();
Expected Output: ""
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

Test: It should return the message "I only understand a single integer" if the user inputs an empty string
Code: robotify("");
Expected Output: "I only understand a single integer"

Test: It should return "0" if the user inputs 0
Code: robotify(0);
Expected Output: "0"

Test: It should remove empty spaces if the user input includes empty spaces before or after an integer
Code: robotify( 0);
Expected Output: "0"

Test: It should return the message "I only understand a single integer" if the user inputs any string
Code: robotify(hi);
Expected Output: "I only understand a single integer"

Test: It should return the message "I only understand a single integer" if the user inputs anything other than a single integer with whitespace
Code: robotify([5]);
Expected Output: "I only understand a single integer"

Test: It should generate an array of numbers from 0 to the user input
Code: robotify(1);
Expected Output: "0", "1"

Test: It should replace numbers that contain the digit 1 with "Beep!" 
Code: robotify(1);
Expected Output: "0", "Beep!"

Test: It should replace numbers that contain the digit 2 with "Boop!" 
Code: robotify(2);
Expected Output: "0", "Beep!", "Boop!"

Test: It should replace numbers that contain the digit 3 with "Won't you be my neighbor?" 
Code: robotify(3);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?"

Test: It should prioritize replacing numbers that contain the digit 2 with "Boop!" over replacing numbers that contain the digit 1 with "Beep!"
Code: robotify(12);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep", "Beep", "Boop!"

Test: It should prioritize replacing 3 with "Won't you be my neighbor?" over replacing 1 with "Beep!"
Code: robotify(13);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep", "Beep", "Boop!", "Won't you be my neighbor?"

Test: It should prioritize replacing 3 with "Boop!" over replacing 2 with "Boop!"
Code: robotify(23);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep", "Beep", "Boop!", "Won't you be my neighbor?", "Beep", "Beep", "Beep", "Beep", "Beep", "Beep", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"