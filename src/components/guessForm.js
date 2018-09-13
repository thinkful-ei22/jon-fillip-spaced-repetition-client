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
      <div className = "form-container">
        <div className = "guess-question">
          <h2 className="streak">You have gotten: {this.state.correct} / {this.state.total} correct</h2>
          <h3 className="streak">Your current streak is: {this.state.streak}</h3>
          <h1>{(!this.props.currQuestion) ? 'Loading' : this.props.currQuestion.question } </h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type = "text" name="answer" id="answer"/>
            <input type ="submit" id="submit-answer" value="Submit Answer" disabled={this.state.response}/>
            <input type ="button" id="next" value="Next" disabled={!this.state.response} onClick={() => this.handleNext()}/>
          </form>
          <span className="user-response">
            {this.state.response}
          </span>
        </div>
          <Popup trigger={<button>Progress</button>} position="right center">
            <div>You overall progress is: {this.props.totalCorrect}/{this.props.overallTotal}.
            You are {Math.floor(this.props.totalCorrect/this.props.overallTotal*100)}% accurate.</div>
          </Popup>
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