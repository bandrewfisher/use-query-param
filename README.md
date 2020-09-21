# useQueryParam

This project demonstrates the use of a hook that makes it easy to manage URL parameters. It was created with [Create React App](https://create-react-app.dev/docs/getting-started/) and also uses TypeScript.

## Most Relevant Files

- [useQueryParam.ts](src/useQueryParam.ts) - the code for the `useQueryParam` hook
- [App.tsx](src/App.tsx) - a component utilizing the `useQueryParam` hook

## Install and Run the Project

If you don't want to download the project, you can see it in action on [Code Sandbox](https://codesandbox.io/s/use-query-param-9fnnw?file=/src/App.tsx).

Run the following commands to clone the project, install dependencies, and start the project.

```
$ git clone https://github.com/bandrewfisher/use-query-param.git
$ cd use-query-param
$ yarn install
$ yarn start
```

You should now be able to view the project in your browser at http://localhost:3000. You will see an input box that demonstrates how a React state variable can be kept in sync with the URL query parameter.

## Usage

Import the `useQueryParam` hook in the file you want to use it in:

```js
import useQueryParam from "./path/to/useQueryParam.ts";
```

Then in a React component, use it like so:

```js
const [param, setParam] = useQueryParam("paramName", "defaultVal");
```

If `paramName` exists in the URL, the `param` will be initialized to that value. Otherwise, it will be initialized to "defaultVal". When calling `setParam("newVal")`, `param` will be updated to "newVal". `paramName` in the URL will also be updated to "newVal".
