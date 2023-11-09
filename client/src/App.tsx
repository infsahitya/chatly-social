import { Route, Routes } from 'react-router-dom';
import { Login } from './containers';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<h1>Hello Signup</h1>} />
    </Routes>
  );
};

export default App;
