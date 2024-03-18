import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
