import "./index.css";
import StatusCard from "./components/StatusCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLink from "./components/NavLink";

/* =========================
   MAIN APP (All Exercises)
========================= */

function App() {
  return (
    <>
      <h1>Week 3 Tasks</h1>

      {/* Exercise 1 */}
      <button className="btn">Click Me</button>

      {/* Exercise 2 */}
      <StatusCard type="success" />
      <StatusCard type="error" />

      {/* Exercise 3 */}
      <Header />
      <Footer />

      {/* Exercise 4 */}
      <NavLink />
    </>
  );
}

export default App;