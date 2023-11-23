import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { DeleteIcon } from './components/DeleteIcon';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" label="here" />
        <Button type="secondary" label="here" />
        <Modal type="primary" state={1} />
        {/* <Button type="primary" label="icon" icon={<DeleteIcon />} /> */}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
