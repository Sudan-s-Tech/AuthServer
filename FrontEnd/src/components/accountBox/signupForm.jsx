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
// import axios from "axios";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
 const [password, setpassword] = useState('');
 const [cnfpassword, setconfpassword] = useState('');

 const signup = () =>{
   console.log('clicked')
 }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" value={name} onChange={(e) =>{
          setname(e.target.value)
        }} placeholder="Full Name" />
        <Input type="email" value={email} onChange={(e) =>{
          setemail(e.target.value)
        }} placeholder="Email" />
        <Input type="number" value={number} onChange={(e) =>{
          setnumber(e.target.value)
        }} placeholder="Number" />
        <Input type="password" value={password} onChange={(e) =>{
          setpassword(e.target.value)
        }} placeholder="Password" />
        <Input type="password" value={cnfpassword} onChange={(e) =>{
          setconfpassword(e.target.value)
        }} placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signup}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
