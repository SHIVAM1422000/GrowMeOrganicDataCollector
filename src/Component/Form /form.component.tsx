import React, { Fragment } from "react";
import { useState, useEffect } from 'react';
import "./form.styles.css";
import { useNavigate } from 'react-router-dom';

export interface UserDetailsInterface {
  name: string;
  phoneNumber: number;
  email: string;
}

const FormComponent: React.FC = (): JSX.Element => {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<UserDetailsInterface>({
    name: "",
    phoneNumber: NaN,
    email: "",
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...userDetails, [event.target.name]: event.target.value };
    setUserDetails(newData);
  };

  

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("Form Submitted With value : ", userDetails);
    localStorage.setItem('userDetails',JSON.stringify(userDetails))
    setUserDetails({ name: "", phoneNumber: NaN, email: "" });
    navigate('/display')
  };


  return (
    <div className="formContainer">
      <h1>Please Enter Your Details</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          required
          value={userDetails.name}
          onChange={onChangeHandler}
        />
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          name="phoneNumber"
          required
          value={userDetails.phoneNumber || " "}
          onChange={onChangeHandler}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
          value={userDetails.email}
          onChange={onChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
