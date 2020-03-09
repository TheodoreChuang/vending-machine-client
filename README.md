# Chocolate Vending Machine Client

## User Stories:

- As an user I want to be able to insert coins so that I can increase my balance on the vending machine
- As an user I want to be able to select a chocolate bar once my balance is enough so that I can enjoy my delicious vegan chocolate bar
- As an user I want to receive change back on a valid purchase so that I am charged only the correct amount

- As an user I want to be able to cancel potential purchases so that I can receive all my coins back

## Acceptance Criteria:

- prototype vending machine
- tests
- README
- submission
- Optional: deployment (CodePen?)

## Design:

VendingMachinePanel:

- state (balance)
- logic
  - update coins / error message CB
  - selected item CB
  - dispense? change?
- coinMappings { label: value }
- itemMappings { item: cost }

CoinSlot(coinMappings, onClick CB):

- "Insert Coin" button => prompt with text input
- validate coin CB (results to VendingMachinePanel)

ItemSelector(itemMappings, onClick CB):

- list of items (cards)
- item clicked CB (results to VendingMachinePanel)

Message (error, success):

- balance
- error / success message

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
