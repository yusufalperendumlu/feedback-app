import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem' 
import { useAutoAnimate } from '@formkit/auto-animate/react'


function FeedbackList ( {feedback, handleDelete} ) {

    const [animationParent] = useAutoAnimate()

    if (!feedback || feedback.length === 0 ) 
    {
        return (
            <div>
                No feedback to show
            </div>
        )
    }
    return (
        <div className="comment" ref={animationParent}>
            {feedback.map((item) => (
                <FeedbackItem 
                key={item.id} 
                item={item} 
                handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}


export default FeedbackList