// Modules
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

// Components
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Chat from './Pages/Chat';
import Error from './Pages/Error';

// Styles
import "./styles/styles.scss";

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/Login" />
    }

    return children
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route 
            index 
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } 
          />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
