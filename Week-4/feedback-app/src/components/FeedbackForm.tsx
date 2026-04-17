import { useState } from "react";
import { addFeedback } from "../actions/feedback";

/* =========================
   Feedback Form Component
========================= */

const FeedbackForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (formData: FormData) => {
    await addFeedback(formData);
    setStatus("Feedback submitted!");
  };

  return (
    <form action={handleSubmit}>
      <h2>Give Feedback</h2>

      {/* Message Input */}
      <input
        type="text"
        name="message"
        placeholder="Enter feedback"
        required
      />

      {/* Rating Input */}
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        placeholder="Rating (1-5)"
        required
      />

      <button type="submit">Submit</button>

      {/* formStatus */}
      {status && <p>{status}</p>}
    </form>
  );
};

export default FeedbackForm;