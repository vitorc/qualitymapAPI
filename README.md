# qualitymap
---
# Qualitymap API Automation Test
---

## Summary

- [About project](#about-project)
- [Configuration](#configuration)
- [Install](#install)
- [How to Test](#how-to-test)
---
## About Project

In this project I create some test cases to test the API inside [ServerRest](https://serverest.dev/)  using [playwright](https://playwright.dev/) framework to do these tests.
I have create 7 tests cases separeted by features and HTTP verbs.
1 - Post a new User
2 -Get an user by ID
3 - Get an user by email
4 - Get and user by name
5 - Update an user name By ID
6 - Update an user password By ID
7 - Delete an user By ID

---

## Configuration

- [Install Node.js @latest](https://nodejs.org/)
- [Install Playwright @latest](https://playwright.dev/docs/intro#installing-playwright)

## Install

**Clone the project**

`https://github.com/vitorc/qualitymapAPI.git`

Access path qualitymap:

`cd ../qualitymapAPI`

Playwright install:

`npx playwright install`  

Dependencies install:

`npm install`

---

## How to Test:

Testing Locally:

`npm run test`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2024 © <a href="https://www.linkedin.com/in/vitor-cardoso-" target="_blank">Vitor Cardoso</a>.
