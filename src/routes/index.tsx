import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error";
import Home from "../pages/home";
import AllUsers from "../pages/users";

const IndexPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="/users"
          element={<AllUsers />}
          errorElement={<ErrorPage />}
        />
        <Route path="/last-quarter" element={<ErrorPage />} />
        <Route path="/current-month" element={<ErrorPage />} />
        <Route path="/social-engagement" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default IndexPage;
