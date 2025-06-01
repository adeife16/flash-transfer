import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/SignInForm";
import "../../font.css/index.css"

const SignIn = () => {
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
        <SignInForm />
      }
    </>
  );
};

export default SignIn;
