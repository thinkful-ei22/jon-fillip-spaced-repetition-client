import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';


import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2 className ="title">Welcome to iLearn! Register or Login to begin your journey.</h2>
      <div className="home">
        <LoginForm />
        <Link to="/register">Register</Link>
      </div>
    </div>
    );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
