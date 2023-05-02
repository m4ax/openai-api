import logo from './logo.svg';
import './App.css';
import App from "./App/main.js"

function RenderApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App />
      </header>
    </div>
  );
}

export default RenderApp;
