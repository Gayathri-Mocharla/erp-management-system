import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/employees"
          element={<Employees />}
        />

        <Route
          path="/inventory"
          element={<Inventory />}
        />
        <Route
    path="/sales"
    element={<Sales />}
/>
        <Route
    path="/reports"
    element={<Reports />}
/>
      </Routes>

      

    </BrowserRouter>

  );

}

export default App;