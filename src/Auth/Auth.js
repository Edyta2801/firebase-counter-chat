import React from 'react'

import { auth } from '../firebaseConfig'

import Forms from './Forms'

class Auth extends React.Component {
  state = {
    email: '',
    password: '',
    isUserLoggedIn: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          this.setState({ isUserLoggedIn: true })
        } else {
          this.setState({ isUserLoggedIn: false })
        }
      }
    )
  }

  onEmailChangeHandler = event => {
    this.setState({ email: event.target.value })
  }
  onPasswordChangeHandler = event => {
    this.setState({ password: event.target.value })
  }

  onLogInClick = () => {
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(console.log)
      .then(console.log)

  }
  onLogInByGoogleClick = () => { }

  render() {
    return (
      this.state.isUserLoggedIn ?
        this.props.children
        :
        <Forms
          email={this.state.email}
          onEmailChangeHandler={this.onEmailChangeHandler}
          password={this.state.password}
          onPasswordChangeHandler={this.onPasswordChangeHandler}
          onLogInClick={this.onLogInClick}
          onLogInByGoogleClick={this.onLogInByGoogleClick}
        />
    )
  }
}
export default Auth