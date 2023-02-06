// // Modules
// import Firebase from './Firebase';
// import { Routes, Route } from 'react-router-dom';

// // Components
// import Login from './Pages/Login';
// import Registration from './Pages/Registration';
import Chat from './Pages/Chat';

// Styles
import "./styles/styles.scss";

function App() {

  return (
    <div className="App">
      <Chat />
      {/* <Routes>
        <Route path="/">
          <Route index element={<Chat />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
