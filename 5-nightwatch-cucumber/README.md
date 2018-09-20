# Nightwatchjs-Training-Cucumber

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
./node_modules/.bin/nightwatch features/google-search.feature
or
npm run test features/yahoo-search.feature 
```
## Run single scenario by its line number
```
npm run test features/google-search.feature:4
```
### Run the tests by environment
```
./node_modules/.bin/nightwatch --env firefox
or
npm run test-chrome-headless
```
### Run the tests by environment and tag
```
./node_modules/.bin/nightwatch --env firefox --tag google-search
```
### Run the tests by environment and group
```
./node_modules/.bin/nightwatch --env chrome --group google
```
