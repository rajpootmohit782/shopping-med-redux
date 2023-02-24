import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Account } from "./pages/account/Account";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/regsiter" element={<Regsiter />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  );
};
export default App;
