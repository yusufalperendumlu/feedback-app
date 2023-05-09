//import PropTypes from "prop-types"; // obj
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  const [animationParent] = useAutoAnimate();

  if (!feedback || feedback.length === 0) {
    return <div>No feedback to show</div>;
  }
  return (
    <div className="comment" ref={animationParent}>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
