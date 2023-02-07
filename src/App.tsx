import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import IndexPage from "./routes";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <IndexPage />;
}

export default App;
