# Setup TypeScript with React

## Prerequisites

- Good understanding of React
- Familiarity with TypeScript Types (2ality's guide is helpful. If you’re an absolute beginner in TypeScript, - check out chibicode’s tutorial.)
- Having read the TypeScript section in the official React docs.
- Having read the React section of the new TypeScript playground (optional: also step through the 40+ examples under the playground's Examples section)

This guide will always assume you are starting with the latest TypeScript and React versions. 

## VS Code Extensions

- Refactoring help https://marketplace.visualstudio.com/items?itemName=paulshen.paul-typescript-toolkit
- R+TS Code Snippets (there are a few...)
https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript
https://www.digitalocean.com/community/tutorials/the-best-react-extension-for-vs-code
- TypeScript official extension https://code.visualstudio.com/docs/languages/typescript
- JavaScript and TypeScript Nightly https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next

## React + TypeScript Starter Kits
### Cloud setups:

- TypeScript Playground with React just if you are debugging types (and reporting issues), not for running code
- CodeSandbox - cloud IDE, boots up super fast
- Stackblitz - cloud IDE, boots up super fast

### Local dev setups:

- Next.js: npx create-next-app@latest --ts will create in your current folder
- Create React App: npx create-react-app name-of-app --template typescript will create in new folder
- Vite: npm create vite@latest my-react-ts-app -- --template react-ts
- Meteor: meteor create --typescript name-of-my-new-typescript-app
- Ignite for React Native: ignite new myapp
- TSDX: npx tsdx create mylib for Creating React+TS libraries. (in future: TurboRepo)

____
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
