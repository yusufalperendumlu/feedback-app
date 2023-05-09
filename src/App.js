import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";

import { FeedbackProvider } from "./context/FeedbackContext";

// import IFeedbackData from "./data/IFeedbackData";

import Card from "./components/shared/Card";

import Header from "./components/Header";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Post from "./components/Post";

function App() {
  // const [feedback, setFeedback] = useState(IFeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="comment">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
            <Route path="/*" element={<p>Not found</p>} />
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
    </FeedbackProvider>
  );
}

export default App;
