import React from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/questions';

import './guessForm.css';

//{ question: 'Hola', answer: 'hello' }

export class GuessForm extends React.Component {

  state = {
    response: null,
    streak: 0
  }


  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  // method() {
  //   if  (this.props.currQuestion === null || this.props.currQuestion === undefined) {
  //     return <h1>Loading</h1>;
  //   } else {
  //     return <h1>{this.props.currQuestion.question}</h1>;
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const question = this.props.currQuestion.question;
    const answer = this.props.currQuestion.answer;
    // console.log('handle submit running');
    console.log(e.target.answer.value);
    if (answer === e.target.answer.value.toLowerCase()) {
      this.setState({
        response: 'Answer is correct',
        streak: this.state.streak + 1
      })
    } else {
      this.setState({
        response: `Answer is wrong. Correct response was ${answer}`,
        streak: 0
      })
    }
    e.target.answer.value = '';
  }

  handleNext() {
    this.setState({
      response: ""
    })
    this.props.dispatch(getQuestions());
  }
  
  render() {
    console.log('PROPS', this.props);
    return (
      <div className = "form-container">
        <div className = "guess-question">
          <h3>Your current streak is: {this.state.streak}</h3>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    currQuestion: state.questions.currQuestion
  };
};

export default (connect(mapStateToProps)(GuessForm));