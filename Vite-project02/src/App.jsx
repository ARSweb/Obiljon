import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Admin/Components/Slidebar";

function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
