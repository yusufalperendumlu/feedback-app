import FeedbackItem from './FeedbackItem' 


function FeedbackList ( {feedback} ) {
    if (!feedback || feedback.lenght ===0)
    {
        return (
            <div>
                No feedback to show
            </div>
        )
    }
    return (
        <div className="comment">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}


export default FeedbackList