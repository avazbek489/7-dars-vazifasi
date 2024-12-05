import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Valyuta from "./components/Valyuta";
import Repozitory from "./components/Repozitory";
import Books from "./components/Books";

function App() {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" end className="p-2 rounded hover:bg-blue-500">
            Valyuta Konvertori
          </NavLink>
          <NavLink to="/repozitory" className="p-2 rounded hover:bg-green-500">
            GitHub Repozitoriyalari
          </NavLink>
          <NavLink to="/books" className="p-2 rounded hover:bg-yellow-500">
            Kitoblar Kutubxonasi
          </NavLink>
        </div>
      </div>
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Valyuta />} />
          <Route path="/repozitory" element={<Repozitory />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
