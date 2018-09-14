import React from 'react';
import {connect} from 'react-redux';
import {getQuestions, submitAnswer} from '../actions/questions';
import Popup from "reactjs-popup";

import './guessForm.css';

export class GuessForm extends React.Component {

  state = {
    response: null,
    streak: 0,
    total: 0,
    correct: 0
  }


  componentDidMount() {
    this.props.dispatch(getQuestions(this.props.username));
  }


  handleSubmit(e) {
    e.preventDefault();
    const answer = this.props.currQuestion.answer;
    let result = false;
    if (answer === e.target.answer.value.toLowerCase()) {
      result = true;
      this.setState({
        response: 'Answer is correct',
        streak: this.state.streak + 1,
        correct: this.state.correct + 1,
        total: this.state.total + 1

      })
    } else {
      this.setState({
        response: `Answer is wrong. Correct response was ${answer}`,
        streak: 0,
        total: this.state.total + 1
      })
    }
    e.target.answer.value = '';
    this.props.dispatch(submitAnswer(result, this.props.username, this.state.correct + 1, this.state.total + 1));
  }

  handleNext() {
    this.setState({
      response: ""
    })
    this.props.dispatch(getQuestions(this.props.username));
  }
  
  render() {
    return (
      <div className="button-container">
        <Popup trigger={<button className="button"> Instructions </button>} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> Instructions </div>
                <div className="content">
                  {" "}
                    <p>To begin, write your response the area provided. If answered correctly, your streak will increase. If answered incorrectly,your streak will go back down to 0. The same words will reappear at certain intervals, depending on whether it was answered correctly or not. 
                    </p>
                    <p>If you don't know the answer, click submit and the answer will be provided. The next button will be enabled after every submitted answer. Click next to move to the next question.
                    </p>
                  <p>Clicking the progress button will show your overall progress. You will be able to see the total questions you answered correct as well as the total questions answered. Good luck and study hard!
                  </p>
                  
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ')
                      close()
                    }}
                  >
                    Close
                  </button>
              </div>
              </div>
            )}
          </Popup>
          <Popup trigger={<button className="button"> Progress </button>} modal>
              {close => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="header"> Instructions </div>
                  <div className="content">
                You overall progress is: {this.props.totalCorrect}/{this.props.overallTotal}.
                <br/>
                You are {Math.floor(this.props.totalCorrect/this.props.overallTotal*100)}% accurate.
                  </div>
                  <div className="actions">
                    <button
                      className="button"
                      onClick={() => {
                        console.log('modal closed ')
                        close()
                      }}
                    >
                      Close
                    </button>
                </div>
                </div>
              )}
            </Popup>
        <div className = "form-container">
          <div className = "guess-question">
            <h2 className="streak">You have gotten: {this.state.correct} / {this.state.total} correct</h2>
            <h3 className="streak">Your current streak is: {this.state.streak}</h3>
            <h1 className = "question-word">{(!this.props.currQuestion) ? 'Loading' : this.props.currQuestion.question } </h1>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type = "text" name="answer" id="answer" autoComplete="off" aria-label="Enter your answer"/><br/>
              <input type ="submit" id="sub-button" className="button" value="Submit Answer" disabled={this.state.response}/>
              <input type ="button" id="next-button" className="button" value="Next" disabled={!this.state.response} onClick={() => this.handleNext()}/>
            </form>
            <span className="user-response">
              {this.state.response}
            </span>
          </div>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    currQuestion: state.questions.currQuestion,
    totalCorrect: state.questions.totalCorrect,
    overallTotal: state.questions.overallTotal
  };
};

export default (connect(mapStateToProps)(GuessForm));