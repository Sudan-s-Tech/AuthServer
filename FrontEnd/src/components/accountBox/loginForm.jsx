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

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
 const [email, setemail] = useState('');
 const [password, setpassword] = useState('');

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
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Don't have an account?
        <BoldLink  onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Forgot Password?
      </MutedLink>
    </BoxContainer>
  );
}
