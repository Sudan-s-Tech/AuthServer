import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
 const [email, setemail] = useState('');
 const [password, setpassword] = useState('');
 const signin = ()=>{
    let content = {
      email: email,
      password: password
    }
    axios({
      method: "post",
      url: "http://localhost:5000/users/login",
      data:content,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
 }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} placeholder="Email" />
        <Input type="password" value={password} onChange={(e) =>{
          setpassword(e.target.value)
        }} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={signin}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Don't have an accoun?
        <BoldLink  onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
