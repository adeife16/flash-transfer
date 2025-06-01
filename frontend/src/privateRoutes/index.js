import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, []);
  return (
    <>
      <div>{isAuth ? <Component /> : null}</div>
    </>
  );
};

export default PrivateRoute;
