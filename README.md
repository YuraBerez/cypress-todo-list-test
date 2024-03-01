# cypress-todo-list-test
This is a Cypress test suite for the TodoMVC application.

## Installation
1. Clone the repository:
```
git clone https://github.com/YuraBerez/cypress-todo-list-test.git
```

2. Install dependencies:
```
cd cypress-todo-list-test
npm install
```

## Running Tests
### Opening the Cypress Test Runner
To open the Cypress Test Runner and interactively run tests:
```
npx cypress open
```
Select the desired spec file (todo_mvc.cy.js) to run the tests.

### Running Tests in Headless Mode
To run Cypress tests in headless mode (non-interactive) and generate reports:
```
npx cypress run
```

## Test Structure
cypress/e2e/todo_mvc.cy.js: Contains the test cases for the TodoMVC application.
