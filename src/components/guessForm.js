import React from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/questions';

import './guessForm.css'

export class GuessForm extends React.Component {
    componentDidMount() {
      this.props.dispatch(getQuestions());
    }
    render() {
      return (
        <div className = "form-container">
          <div className = "guess-question">
            <h1>{this.props.questions}</h1>
            <form>
              <input type = "text"/>
              <input type ="submit" value = "Submit Answer"/>
            </form>
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  
  return {
      questions:state.questions.question
   
  };
};

export default (connect(mapStateToProps)(GuessForm));