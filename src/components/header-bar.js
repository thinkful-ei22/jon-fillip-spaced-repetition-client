import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';

import {clearAuthToken} from '../local-storage';
import './header-bar.css';
import { updateDatabase } from '../actions/questions';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(updateDatabase());
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout-button" onClick={() => this.logOut()}>Log Out</button>
      );
    }
    return (
      <div className="header-bar">
        <h1>iLearn</h1>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
