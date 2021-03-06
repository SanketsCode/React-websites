import React, { useState } from "react";
import { connect } from "react-redux";
import { googleSignInStart,EmailSignInStart } from "../../Redux/User/user.actions";
import CustomButton from "../CustomButton/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";


const SignIn = ({ EmailSignInStart,googleSignInStart}) => {
  const [userCredentials,setUserCredentials] = useState({email:'',password:''});

  const {email,password} = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    // const { EmailSignInStart} = this.props;
    EmailSignInStart(email,password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };

  
    // const { googleSignInStart } = this.props;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} inGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  EmailSignInStart : (email,password) => dispatch(EmailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
