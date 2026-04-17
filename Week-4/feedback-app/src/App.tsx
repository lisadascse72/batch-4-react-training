import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

/* =========================
   MAIN APP
========================= */

function App() {
  return (
    <>
      <h1>Smart Feedback App</h1>

      {/* Feedback Form */}
      <FeedbackForm />

      {/* Feedback List */}
      <FeedbackList />
    </>
  );
}

export default App;