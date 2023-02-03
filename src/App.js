import { Routes, Route } from 'react-router-dom';
import Firebase from './Firebase';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Chat from './Pages/Chat';
import "./styles/styles.scss";

function App() {

  
  return (
    <div className="App">
      <Chat />
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes> */}
    </div>
  );
}

export default App;
