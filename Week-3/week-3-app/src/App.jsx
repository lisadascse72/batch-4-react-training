import "./index.css";
import StatusCard from "./components/StatusCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLink from "./components/NavLink";

function App() {
  return (
    <>
      {/* Header at TOP */}
      <Header />

      <h1>Week 3 Tasks</h1>

      {/* Exercise 4 */}
      <NavLink />

      {/* Exercise 1 */}
      <button className="btn">Click Me</button>

      {/* Exercise 2 */}
      <StatusCard type="success" />
      <StatusCard type="error" />

      {/* Footer at BOTTOM */}
      <Footer />
    </>
  );
}

export default App;