import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import isEmpty from 'lodash/isEmpty';

import { signupAction } from '../../actions/userActions';
import signUpValidation from '../../../utils/signUpValidation';

const propTypes = {
  history: PropTypes.object.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired
};
/**
 *
 *@returns {object} jsx
 * @class SignupPage
 * @extends {React.Component}
 */
class SignUpPage extends React.Component {
  /**
   * Creates an instance of SignUpPage.
   * @param {any} props
   * @memberof SignUpPage
   */
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      userName: '',
      password: '',
      email: '',
      confirmPassword: '',
      isLoading: false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGoogleCallback = this.onGoogleCallback.bind(this);
  }
  /**
 * @param {any} nextProps
 * @memberof SignUpPage
 * @returns {undefined}
 */
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.replace('/collections');
    }
    if (!isEmpty(nextProps.success)) {
      this.setState({
        fullName: '',
        userName: '',
        password: '',
        email: '',
        confirmPassword: '',
        isLoading: false,
        errors: {}
      });
    }
  }
  /**
   * @returns {void}
   *
   * @param {any} response
   * @memberof SignUpPage
   */
  onGoogleCallback(response) {
    this.setState({
      fullName: response.profileObj.name,
      userName: response.profileObj.givenName,
      password: response.profileObj.googleId,
      email: response.profileObj.email,
      confirmPassword: response.profileObj.googleId
    });
    document.getElementById("for-google-signup").click();
  }
  /**
   *
   * @returns {void}
   * @param {any} event
   * @memberof SignUpPage
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   *
   *
   * @returns {Boolean} isValid
   * @memberof SignUpPage
   *
   */
  validateForm() {
    const { errors, isValid } = signUpValidation(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   *
   * @return {void} - dispatches the action
   * @param {void} event - null
   * @memberof SignupPage
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.signup(this.state);
    }
  }
  /**
* @description Renders content to the screen
 * @return {void}
 */
  render() {
    const { errors, isLoading } = this.state;
    return (
      <div>
        <div className="image"/>
        <div className="row">
          <form
            className="col s6 push-s3 div-container-form"
            onSubmit={this.onSubmit}
          >
            <h4 className="sign-title">Sign up to HelloBooks:</h4>
            <div className="row">
              <div className="input-field col.s5">
                <label htmlFor="first_name">Full Name</label>
                <input
                  name="fullName" id="first_name" type="text"
                  className="validate"value={this.state.name}
                  onChange={this.handleChange} />
                <span className="error-block">
                  {errors.fullName}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col.s5">
                <label htmlFor="first_name">Username</label>
                <input
                  name="userName" id="user_name" type="text"
                  className="validate" value={this.state.name}
                  onChange={this.handleChange} />
                <span className="error-block">
                  {errors.userName}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col.s5">
                <label htmlFor="email">Email</label>
                <input
                  name="email" id="email" type="email"
                  className="validate" value={this.state.name}
                  onChange={this.handleChange} />
                <span className="error-block">
                  {errors.email}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col.s5">
                <input
                  name="password" type="password" className="validate"
                  value={this.state.name} id="password"
                  onChange={this.handleChange} />
                <span className="error-block">
                  {errors.password}
                </span>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col.s5">
                <input
                  name="confirmPassword" type="password"
                  className="validate" value={this.state.name}
                  id="confirm_password" onChange={this.handleChange} />
                <span className="error-block">
                  {errors.confirmPassword}
                </span>
                <label htmlFor="password">Confirm password</label>
              </div>
            </div>
            <div className="row">
              <button
                id="for-google-signup"
                className="col s12 m3 signup-button" type="submit"
                disabled={isLoading}>
              Sign up
              </button>
              <div className="col s12 m9">
                <GoogleLogin
                  className="right google-button"
                  clientId=
                    "36899049581-4qhfcq6i9qjvauc42ba6hjf33nk22c3k.apps.googleusercontent.com"
                  onSuccess={this.onGoogleCallback}
                >
                  <div className="left">Sign up with</div>
                  <img
                    className="right google-icon"
                    width="30"
                    height="30"
                    role="google fonts"
                    src="https://lh3.googleusercontent.com/N-AY2XwXafWq4TQWfua6VyjPVQvTGRdz9CKOHaBl2nu2GVg7zxS886X5giZ9yY2qIjPh=w300"
                  />
                </GoogleLogin>
              </div>
            </div>
            <br />

          </form>

        </div>

      </div>
    );
  }
}
SignUpPage.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  success: state.errorReducer.error
});
const mapDispatchToProps = dispatch => ({
  signup: signupCredentials => dispatch(signupAction(signupCredentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUpPage));
