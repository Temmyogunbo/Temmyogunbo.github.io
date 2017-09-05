import React from 'react';
import Navigation from './Navigation.jsx';
import { Link } from 'react-router-dom';

const WelcomeMessage = () =>
  (
    <div>
      <Navigation about='About us' contact='Contact us' signup='Log in' />
      <div className='welcome-message-container'>
        <h1>Welcome to HelloBooks</h1>
        <p className='welcome-message'>
          Your platform to up to date books.<br/>
            You can borrow, and read <br/>
              books online.
        </p>
        <div className='welcome-container-div-button'>
          <button className='welcome-container-button' data-action='sign-up-form'>
            <Link to='/signin'> Sign up</Link>
          </button>
          <button className='welcome-container-button'><p>sign up with</p>
            <Link to='/signup'>
            <img width='30' height='30' src='https://lh3.googleusercontent.com/N-AY2XwXafWq4TQWfua6VyjPVQvTGRdz9CKOHaBl2nu2GVg7zxS886X5giZ9yY2qIjPh=w300'/>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
export default WelcomeMessage;
