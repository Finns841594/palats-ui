import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { DeleteIcon } from './components/DeleteIcon';
import { Modal } from './components/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" label="click here" />
        <Button type="secondary" label="click here" Icon={DeleteIcon} />
        <Modal type="success" state={2} buttonOneLabel="First" />

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
