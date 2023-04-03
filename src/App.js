import { useState, useRef } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import IFeedbackData from "./data/IFeedbackData";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(IFeedbackData);

  const deleteFeedback = (id) => {
    const newFeedback = feedback.filter((feedback) => feedback.id !== id);
    setFeedback(newFeedback);
  };

  return (
    <>
      <Header />

      <div className="comment">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
