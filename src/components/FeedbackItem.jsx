import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  const [rating, setRating] = useState();
  const [text, setText] = useState();

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
        className="close"
      >
        <FaTimes style={{ color: "purple", cursor: "pointer" }} />
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
