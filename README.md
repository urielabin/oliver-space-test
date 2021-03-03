# Code Project 

Automated tests for Oliver Space WebApp.

## Tools

-   [WebdriverIO](https://webdriver.io/)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

## Setup

Install npm node dependencies

```
$ npm install
```
## Tests Description

The tests are written using *WebdriverIO*, the spec files are under the `test/specs/` folder and the commands used for the actions over the page elements are under `test/pages/**.page.ts`.

All the test data used to fill the different forms is inside the `test/data/` folder.

## Test Execution
The tests are configured to be executed using the chromedriver service, so is necessary to have installed the latest Chrome version in the local machine.

Execute tests by command line:

- **Linter**
```
$ npm run lint
```
-   **Wdio**

```
$ npm test
```

The tests can be executed headless by uncomment this line in the wdio.conf.js file.

```
      'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // args: ['--headless', '--disable-gpu'],
      },
```
