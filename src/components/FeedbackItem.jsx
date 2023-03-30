import { useEffect, useState } from "react";
import Card from "./shared/Card";

function FeedbackItem( {item} ) {

    const[rating, setRating] = useState()
    const[text, setText] = useState('This is an example of a feedback item.')

    const handleClick = () => {
        //setRating(rating + 1);
        if (item.rating < 10)
        {
            item.rating = item.rating + 1;
            setRating(item.rating);
        }
    }

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button onClick={handleClick}>Click</button>
        </Card>
    )
}

export default FeedbackItem;