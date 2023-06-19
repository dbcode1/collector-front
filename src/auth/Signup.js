import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../main/Layout";
import axios from "axios";
import "dotenv/config";
import { isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";
import Button from "./../styledComponents/Button";
import DataForm from "./../styledComponents/DataForm";
import DataField from "./../styledComponents/DataField";
import FormWrapper from "../styledComponents/FormWrapper";
import Submit from "../styledComponents/Submit";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(response.data.message);
        console.log("signup successful");
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response);
      });
  };

  const signupForm = () => (
    <DataForm>
      <DataField>
        <label>Name</label>
        <input type="text" value={name} onChange={handleChange("name")}></input>
      </DataField>
      <DataField>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={handleChange("email")}
        ></input>
      </DataField>
      <DataField>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange("password")}
        ></input>
      </DataField>
      <DataField>
        <Submit onClick={handleSubmit}>{buttonText}</Submit>
      </DataField>
      <br></br>
      <Link to="/auth/password/forgot">Forgot Password</Link>
    </DataForm>
  );

  return (
    <Layout>
      <FormWrapper>
        <ToastContainer />
        {isAuth() ? <Redirect to="/" /> : null}
        {signupForm()}
      </FormWrapper>
    </Layout>
  );
};

export default Signup;
