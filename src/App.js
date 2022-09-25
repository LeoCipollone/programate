import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText='Encuentra tu camino con PrograMate'
        placeholderText='Escribe aquí...'
      />
      </header>
    </div>
  );
}

export default App;