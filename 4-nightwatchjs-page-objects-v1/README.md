# Nightwatchjs-Training-Page-Objects

##  Install NodeJS packages
```
npm i -D
```

###  Run the simple tests
```
./node_modules/.bin/nightwatch
or
npm run test
```
### Run by individual test
```
./node_modules/.bin/nightwatch tests/google/google.js
```
### Run the tests by environment
```
./node_modules/.bin/nightwatch --env firefox
or
npm run test-chrome-headless
```
### Run the tests by environment and tag
```
./node_modules/.bin/nightwatch --env firefox --tag google
```
### Run the tests by environment and group
```
./node_modules/.bin/nightwatch --env chrome --group google
```