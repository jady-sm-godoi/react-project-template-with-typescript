import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/adding-typescript/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-b5451d8/blog/wp-content/uploads/sites/2/2022/07/React-Typescript-.jpg" alt="" />
          <p>Learn React with TS</p>
        </a>
        <a 
          className="App-link"
          href="https://react-typescript-cheatsheet.netlify.app/docs/basic/setup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Setup TypeScript with React</p>
        </a>
      </header>
    </div>
  );
}

export default App;
