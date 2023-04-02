import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import IFeedbackData from "./data/IFeedbackData";


function App() {

    const[feedback, setFeedback] = useState(IFeedbackData)

    // const title = "Blog Post";
    // const body = "This is my blog post";
    // const comments = [
    //     {id: 1, text: 'Comment one'},
    //     {id: 2, text: 'Comment two'},
    //     {id: 3, text: 'Comment three'},
    // ]

    // const loading = false
    // const showComments = false // conditional

    // if (loading) 
    // {
    //     return <h1>Loading...</h1>
    // }

    // const commentBlock = (<div className="comments">
    //         <h3>Comments ({comments.length})</h3>
    //         <ul>
    //             {comments.map((comment, index) => (
    //                 <li key={index}>{comment.text}</li>
    //             ))}
    //         </ul>
    //     </div>)

    const deleteFeedback = (id) => {
        // const newFeedback = feedback.filter((feedback) => feedback.id !== id)
        if (window.confirm("Are you sure you want to delete?"))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }
        

    return (
        <>
            <Header />
            
            <div 
            className="comment" 
            > 
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                feedback={feedback}
                handleDelete={deleteFeedback} 
                />
            </div>


            

        </>
    );
}

export default App;