import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import GuessForm from './guessForm';
import './dashboard.css';

export class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard-name">Hello {this.props.username}!</h1>
        <div className="dashboard-username">
                    Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        < GuessForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
