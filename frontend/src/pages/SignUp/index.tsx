import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm'
import "../../font.css/index.css"


const SignUp = () => {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  })
  return (
    <>
      {isAuth ? null :
        <SignUpForm />
      }
    </>
  )
}

export default SignUp
