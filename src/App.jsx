import React from "react";
import AuthRoutes from "./components/route/AuthRoutes";
import './App.css'
import {Route, Routes} from "react-router-dom";

const  App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </>
  )
}

export default App
