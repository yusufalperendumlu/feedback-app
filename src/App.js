import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";

import IFeedbackData from "./data/IFeedbackData";

import Card from "./components/shared/Card";

import Header from "./components/Header";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Post from "./components/Post";

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>

        <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
