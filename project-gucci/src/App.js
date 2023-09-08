import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Page/Home";
import Gifts from "./components/Page/Gifts";
import What from "./components/Page/What";
import Handbags from "./components/Page/Handbags";
import Travel from "./components/Page/Travel";
import Women from "./components/Page/Women";
import Men from "./components/Page/Men";
import Mx from "./components/Page/Mx";
import ChildrenPage from "./components/Page/ChildrenPage";
import Whatches from "./components/Page/Whatches";
import Decor from "./components/Page/Decor";
import Beauty from "./components/Page/Beauty";
import Vault from "./components/Page/Vault";
import LoginPage from "./components/Login/LoginPage";
import Bag from "./components/Cart/Bag";
import HomePage from "./components/layout/HomePage";
import ProductDetails from "./components/Products/ProductDetails";
import SignPage from "./components/SignIn/SignPage";
import History from "./components/User/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/gifts" element={<Gifts />}></Route>
          <Route path="/what's" element={<What />}></Route>
          <Route path="/handbags" element={<Handbags />}></Route>
          <Route path="/travel" element={<HomePage />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/mx" element={<Mx />}></Route>
          <Route path="/chidren" element={<ChildrenPage />}></Route>
          <Route path="/watches" element={<Whatches />}></Route>
          <Route path="/decor" element={<What />}></Route>
          <Route path="/beauty" element={<Beauty />}></Route>
          <Route path="/vault" element={<What />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/sign" element={<SignPage />}></Route>
          <Route path="/bag" element={<Bag />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route
            path="/products/details/:id"
            element={<ProductDetails />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
