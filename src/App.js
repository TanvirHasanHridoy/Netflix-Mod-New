import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Redirect from "./components/Redirect";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={
                <Redirect>
                  <SignUp />
                </Redirect>
              }
            />
            <Route
              path="/signin"
              element={
                <Redirect>
                  <SignIn />
                </Redirect>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
