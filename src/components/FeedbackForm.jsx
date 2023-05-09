import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RantingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("0");

  const { addFeedback, feedbackEdit } = useContext(FeedbackContext);

  const clearInputs = () => {
    setText("");
    setRating(10);
    setbtnDisabled(true);
    setMessage("0");
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(e.target.value.length);
    } else if (text && text.trim().length <= 10) {
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
    if (text.length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      addFeedback(newFeedback);

      setText("");
      clearInputs();
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
