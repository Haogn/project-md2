import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import AdProduct from "./components/page/AdProduct";
import AdUser from "./components/User/AdUser";

function App() {
  return (
    <div>
      <Layout></Layout>
      <Routes>
        <Route path="/" element={<AdProduct />}></Route>
        <Route path="/user" element={<AdUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
