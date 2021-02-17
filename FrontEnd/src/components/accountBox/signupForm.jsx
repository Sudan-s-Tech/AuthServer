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

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  //  const [cnfpassword, setconfpassword] = useState('');
const signup = ()=>{
  axios({ 
    method: 'post', 
    url: 'http://localhost:5000/users/signup', 
    body: {  name: name,
      email : email,
      phone : phone,
      password : password}, 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    }) 
    .then(res => { 
      if (res.status === 200) {
        console.log(res)
      } 
    }).catch(err => { 
      console.error(err);
    });
  }
  // const signup = () => {
  //   axios.post("http://localhost:5000/users/signup",{
  //      name: name,
  //      email : email,
  //      phone : phone,
  //      password : password
  //      }).then((res) =>{
  //        console.log(res)
  //      }).catch((err)=>{
  //        console.log(err)
  //      });
  // };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Full Name"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <Input
          type="number"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
          placeholder="Number"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        {/* <Input type="password" value={cnfpassword} onChange={(e) =>{
          setconfpassword(e.target.value)
        }} placeholder="Confirm Password" /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signup}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Already have an account?
        <BoldLink  onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
