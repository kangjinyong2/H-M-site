import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Nav from "./component/Nav";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Nav login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/Login" element={<Login setLogin={setLogin} />} />
        <Route path="/" element={<ProductAll />} />
        <Route path="/Product/:id" element={<PrivateRoute login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
