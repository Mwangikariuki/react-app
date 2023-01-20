import "./App.css";
import MainHeader from "./components/header";
import LandingPage from "./components/landing/landing";
import MainLayout from "./components/layout/layout";

function App() {
  return (
    <MainLayout>
      <MainHeader />
      <LandingPage />
    </MainLayout>
  );
}

export default App;
