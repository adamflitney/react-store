import React from 'react'

import SignInForm from '../../components/sign-in/sign-in'
import SignUpForm from '../../components/sign-up/sign-up'

import './sign-in-up.scss'

const SignInUpPage = () => (
    <div className="sign-in-up">
        <SignInForm />
        <SignUpForm />
    </div>
)

export default SignInUpPage;