import { FaEdit, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(item.id);
        }}
        className="close"
      >
        <FaTimes style={{ color: "purple", cursor: "pointer" }} />
      </button>
      <button
        className="edit"
        onClick={() => {
          editFeedback(item.text);
        }}
      >
        <FaEdit style={{ color: "purple" }} />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.defaultProps = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
