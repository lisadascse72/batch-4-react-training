// Simple in-memory storage (no backend)
let feedbacks: { message: string; rating: number }[] = [];

// Server action to add feedback
export async function addFeedback(formData: FormData) {
  const message = formData.get("message") as string;
  const rating = Number(formData.get("rating"));

  if (!message || !rating) return;

  feedbacks.push({ message, rating });
}

// Function to get feedbacks
export function getFeedbacks() {
  return feedbacks;
}