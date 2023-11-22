import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./containers";
import { WelcomeUser } from "./layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"login"} />} />

      <Route path="/" element={<WelcomeUser />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
