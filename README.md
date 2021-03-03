# Quiz Game
[![CircleCI](https://circleci.com/gh/chornaya-com/quiz/tree/master.svg?style=svg&circle-token=63f6f27e841f7eff22bbd348eaee6daf742f2c66)](https://circleci.com/gh/chornaya-com/quiz/tree/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

Quiz Game is a web app based on Open Trivia Database API.
Implemented with React (incl. React Context Hook), Firebase and Circle CI integration, stylized with CSS.

[**Live demo**](https://quiz-10829.web.app/)

![Preview](https://user-images.githubusercontent.com/61564546/109504764-d0fdb080-7a93-11eb-8c69-343c1f28a543.png)
## Features
- [x] firebase setup
- [x] circle ci setup
- [x] axios for fetching data
- [x] material ui for loader
- [x] useSound for onClick sound effects

## How To
### Install Dependencies
```
yarn install
```
### Development
to start development server run:
```
yarn start
```
### Tests
to run unit tests execute:
```
yarn test
```
### Deployment
- create production build:
```
yarn build
```
- deploy to firebase:
```
yarn deploy
```