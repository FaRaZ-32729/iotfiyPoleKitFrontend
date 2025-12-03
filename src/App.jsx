import React from "react";
import { Routes, Route } from "react-router-dom"; // just Routes & Route
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import Venue from "./pages/venue";

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
      <Route path="/venue" element={<AppLayout><Venue /></AppLayout>} />
    </Routes>
  );
};

export default App;
