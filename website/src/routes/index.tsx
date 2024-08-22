import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/homepage" />} />
      </Routes>
    </BrowserRouter>
  );
};
