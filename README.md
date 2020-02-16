An app to understand the basic concept of high order component (HOC)

## Why Higher Order Components (HOC) ?

To share common functionality between components.

A pattern where a function takes a component as an argument and returns a new component

```
const NewComponent = higherOrderComponent(OriginalComponent);
const EnhancedComponent = higherOrderComponent(OriginalComponent);

const IronMan = withSuit(TonySpark);
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

