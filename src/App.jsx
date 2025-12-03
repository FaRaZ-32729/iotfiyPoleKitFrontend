import React from "react";
import { Routes, Route } from "react-router-dom"; // just Routes & Route
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";

const App = () => {
  return (
    <Routes>
      {/* Pages without NavigationBar */}
      <Route path="/login" element={<Login />} />

      {/* Pages with NavigationBar */}
      <Route
        path="/"
        element={
          <AppLayout>
            <Home />
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default App;
