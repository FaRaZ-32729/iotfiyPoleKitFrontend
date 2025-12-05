import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import Venue from "./pages/venue";
import UserManagement from "./pages/UserManagement";
import OrganizationManagement from "./pages/OrgnaizationManagement";
import DeviceManagement from "./pages/DeviceManagement";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected / Layout Routes */}
        <Route element={<AppLayout />}>
          <Route index element={<Home />} /> {/* default / */}
          <Route path="venue" element={<Venue />} />
          <Route path="user" element={<UserManagement />} />
          <Route path="organization" element={<OrganizationManagement />} />
          <Route path="device" element={<DeviceManagement />} />
          <Route path="*" element={<PageNotFound />} /> {/* Page Not Found */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
