import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";



export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
