# BMO Interview Test
[![Build Status](https://travis-ci.org/danielbrog/bmotest.svg?branch=master)](https://travis-ci.org/danielbrog/bmotest)

BMO Interview Test to search for restaurants by city. See it live [here.](https://danielbrog.github.io/bmotest/) 

![Imgur Image](https://i.imgur.com/aLUSHxE.png)



# About
Application to allow users to find a restaurant in their area.  It has two input fields, the first one is for the user to find restaurants in a given city, and the second is to refine the search by either name, address, or area.

# Description of Technologies
The application is built using React as well as Redux for state.

For testing jest was used for snapshot testing and testing with mock state data.  Jest-axe was used for accessibility testing, ensuring best practices were used.

Travis CI was included for tests to be run every push.

# Installation
For this application you will ned nodejs installed to version 12.

1. Clone the master branch of the repository, you can download the zip [here](https://github.com/danielbrog/bmotest/archive/master.zip).
2. Install all packages by running:
```
npm install
```
3. You can either build the project, or run the project in development mode.  

For development mode run the command:
```
npm run dev-server
```
then you can navigate to http://localhost:8080/ to view it running

For building the project run the command:
```
npm run build:prod
```
The build files is located in the public folder.
