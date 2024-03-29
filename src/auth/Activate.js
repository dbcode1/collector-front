import React, { useState, useEffect } from "react";
import Layout from "../main/Layout";
import axios from "axios";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    console.log(token, name)
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const { name, token, show } = values;
  console.log(token);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "Post",
      url: `${process.env.REACT_APP_API}/api/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error);

        toast.error(error);
      });
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5 ">Hey {name}, ready to activate your account?</h1>
      <button className="btn btn-outline-primary" onClick={handleSubmit}>
        Activate
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />

        <h1 className="p-5 text-center">Activate Account</h1>
        {activationLink()}
      </div>
    </Layout>
  );
};

export default Activate;
