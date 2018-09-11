import React from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/questions';

import './guessForm.css';

//{ question: 'Hola', answer: 'hello' }

export class GuessForm extends React.Component {
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

  render() {
    console.log('PROPS', this.props);
    return (
      <div className = "form-container">
        <div className = "guess-question">
          <h1>{(!this.props.currQuestion) ? 'Loading' : this.props.currQuestion.question } </h1>
          <form>
            <input type = "text"/>
            <input type ="submit" value = "Submit Answer"/>
          </form>
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