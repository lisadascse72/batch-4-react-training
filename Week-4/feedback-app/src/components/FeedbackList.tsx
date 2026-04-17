import { getFeedbacks } from "../actions/feedback";

/* =========================
   Feedback List Component
========================= */

const FeedbackList = () => {
  const feedbacks = getFeedbacks();

  return (
    <div>
      <h2>Feedback List</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <ul>
          {feedbacks.map((item, index) => (
            <li key={index}>
              {item.message} - Rating: {item.rating}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;