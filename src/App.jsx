import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/layout/Dashboard";
import UserGateway from "./components/layout/UserGateway";

function App() {
  return (
    <>
      <Navbar />
      <h2>Current Year: {new Date().getFullYear()}</h2>
      <UserGateway />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;