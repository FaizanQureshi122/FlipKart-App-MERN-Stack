import React, { useState, useContext } from 'react'
import { Button,Box, TextField, styled, Dialog, Typography } from '@mui/material'

import { authenticateSignup, authenticateLogin } from '../../service/api'
import {DataContext} from '../../context/DataProvider' 


const Component = styled(Box)`
height: 70vh;
   width: 90vh;
  `
  const Image = styled(Box)`
   background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
   height: 84.3%;
   width: 28%;
   padding: 45px 35px;
   & > p, & > h5 {
    color: #fff;
    font-weight: 600;
   }
  `
  const Wrapper = styled(Box)`
   display: flex;
   flex-direction: column;
   padding: 25px 35px;
   flex: 1;
   & > div, & > button, & > p {
       margin-top: 20px;
    }
    `
    const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    `
    const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb( 0 0 0/ 20%);
    `
    const Text = styled(Typography)`
    font-size: 14px;
    color: #878787;
    `
    const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
    
    `
    const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
    `

    const accountInitialValues = { //if user login then otherwise signup fileds shows
        login: {
            view: 'login',
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendation'
        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here!",
            subHeading: 'Sign up with your mobile number to get started'

        }
    }
    const signupInitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''
    }
    const loginInitialValues =  {
      username: '',
      password: ''
    }
    const LoginDialog = ({ open, setOpen }) => {
     const [account, toggleAccount] = useState(accountInitialValues.login)
      const [signup, setSignup] = useState(signupInitialValues) //get all field this state
      const [ login, setLogin] = useState(loginInitialValues)
     const [error, setError] = useState(false)

      //  yaha ham value nikle ge using context in DAtaProvider 
      const { setAccount }= useContext(DataContext)

      const handleClose = () =>{ //if click btn not open signup 
        setOpen(false);
        toggleAccount(accountInitialValues.signup)
         setError(false)
      }
      const toggleSignup = ()=> { //if click singup open signup
        toggleAccount(accountInitialValues.signup)
      }
      const onInputChange = (e)=> { //get all signup field values
        setSignup({...signup, [e.target.name]: e.target.value})
    console.log(signup)  
    }

   const signUpUser = async () => { //if user click btn its call api post all fields in DB
     let response = await authenticateSignup(signup)
      if(!response) return ;
      handleClose();
      setAccount(signup.firstname)
    }
   const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name] : e.target.value})
   }
   const loginUser = async() => {
    let response = await authenticateLogin(login)
   console.log(response)
   if(response.status === 200){
    handleClose()
    setAccount(response.data.data.firstname)
  } 
  else{
    setError(true)
  }
  
  
  }
    return (
    <Dialog open={open}
    onClose={handleClose} PaperProps={{ sx: { maxWidth:'unset'}}}>
      <Component>
        <Box style={{ display:'flex', height: '100%'}}>
        <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 20}}>{ account.subHeading }</Typography>
        </Image>
        {
            account.view === 'login' ? 
        <Wrapper>
            <TextField onChange={(e) => onValueChange(e)} name='username' variant='standard' label="Enter username"/>
     {  error &&  <Error>Please enter valid username or Password</Error> }
            <TextField onChange={(e) => onValueChange(e)} name='password' variant='standard' label="Enter Password"/> 
            <Text>By continuing, you agree to FlipKart's Terms of Use and Privacy Policy.</Text>
            <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
            <Typography style={{ textAlign: 'center'}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={()=> toggleSignup() }>New to FlipKart? Create an account</CreateAccount>
        </Wrapper>
     : 
     <Wrapper>
     <TextField onChange={(e) => onInputChange(e)} name='firstname'  variant='standard' label="Enter FirstName"/>
     <TextField onChange={(e) => onInputChange(e)} name='lastname' variant='standard' label="Enter LastName"/> 
     <TextField onChange={(e) => onInputChange(e)} name='email' variant='standard' label="Enter username"/> 
     <TextField onChange={(e) => onInputChange(e)} name='username' variant='standard' label="Enter Email"/> 
     <TextField onChange={(e) => onInputChange(e)} name='password' variant='standard' label="Enter Password"/> 
     <TextField onChange={(e) => onInputChange(e)} name='phone' variant='standard' label="Enter Phone"/>   
     <LoginButton onClick={()=> signUpUser()}>Continue</LoginButton>
 </Wrapper>
}
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog
