import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";

import IFeedbackData from "./data/IFeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(IFeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    const newFeedback = feedback.filter((feedback) => feedback.id !== id);
    setFeedback(newFeedback);
  };

  return (
    <Router>
      <Header />

      <div className="comment">
        <Route exact path="/">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </Route>

        <Routes>
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
