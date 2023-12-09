import React,{useState} from 'react'
import './App.css'
const FeedBackForm = ({onSubmit}) => {
    const [score, setScore]=useState("10")
    const [comment, setComment]=useState('')
    const isDisabled=Number(score)<5&&comment.length<=10

    const textAreaPlaceholder=isDisabled?"please write down why you didn't like our service make sure that the length of your character is greater than 10":"optional feedback"

    const handleSubmit=(e)=>{
        e.preventDefault()
        onSubmit({score,comment})

    }
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback form</h2>
        <div className="Field">
          <label htmlFor="score">Score: {score} ⭐</label>
          <input
            id="score"
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
            type="range"
            min="0"
            max="10"
          />
        </div>
        <div className="Field">
          <label htmlFor="comment">Comments:</label>
          <textarea
            id="comment"
            placeholder={textAreaPlaceholder}
            name="comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <button type="submit" disabled={isDisabled}>
          Submit
        </button>
      </fieldset>
    </form>
  </div>
  )
}

export default FeedBackForm