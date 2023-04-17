import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RantingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("0");

  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(e.target.value.length);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage(e.target.value.length);
    } else {
      setbtnDisabled(false);
      setMessage(e.target.value.length);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);

      setText("");
    }
  };

  const colorValue =
    message < 10 ? "#FF0000" : message > 255 ? "#FF0000" : "#00FF00";
  const charInfoStyle = {
    color: colorValue,
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RantingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <span className="char-info" style={charInfoStyle}>
          {message}/255
        </span>
      </form>
    </Card>
  );
};

export default FeedbackForm;
