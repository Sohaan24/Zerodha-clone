import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {CssBaseline,Container, FormLabel, FormControl, Box, Button, Card, Typography, TextField, Stack, Paper } from '@mui/material' ;

function Signup(){
    const navigate = useNavigate() ;
    const [inputValue, setInputValue] = useState({
        mobileNumber: "",
        username : "",
        password : "",
    });

    const {mobileNumber, username, password} = inputValue ;
    const handleOnChange = (e)=>{
        const {name, value} = e.target ;
        setInputValue({...inputValue, [name] : value}) ;
    };

    const handleError = (err)=>
        toast.error(err, {
            position : "bottom-left",
        });

    const handleSuccess = (msg)=>
        toast.success(msg,{
            position : "bottom-right",
        });
    
   const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:3002/signup",
      {
        ...inputValue,
      },
      { withCredentials: true }
    );
    const { success, message } = data;
    if (success) {
      handleSuccess(message);
      // Clear the form only on success
      setInputValue({
        mobileNumber: "",
        username: "",
        password: "",
      });
      setTimeout(() => {
        // Correctly redirect to the separate dashboard app
        window.location.href = "http://localhost:5174/summary";
      }, 1000);
    } else {
      // If the backend returns `success: false`, use its message
      handleError(message);
    }
  } catch (error) {
    console.error("Signup failed:", error);
    // Use the error message from the server's response
    if (error.response && error.response.data && error.response.data.message) {
      handleError(error.response.data.message);
    } else {
      // Fallback for unexpected errors
      handleError("An unexpected error occurred. Please try again.");
    }
  }
};
    
    return(
      
     <Box
     sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f0ff 0%, #fafcff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>       
    <CssBaseline/>
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3}}>
        <Typography 
        component="h1"
            variant="h4"
            sx={{ mb : 3, color: "#1984d7", fontWeight: 600, }}
           >
            Sign in
           </Typography> 
        <Box component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 3,
            }}
        >
          <FormControl>
              <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
              <TextField
                error={false}
                type="text"
                name="mobileNumber"
                value = {mobileNumber}
                placeholder="Enter mobile number"
                variant="outlined"
                onChange={handleOnChange}
                fullWidth
              />
            </FormControl>

             <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                error={false}
                name="username"
                value = {username}
                placeholder="Enter Username"
                type="text"
                variant="outlined"
                fullWidth
                onChange={handleOnChange}
              />
            </FormControl>
             <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={false}
                name="password"
                value = {password}
                placeholder="Enter Password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={handleOnChange}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
               sx={{
                mt: 2,
                backgroundColor: "#1984d7",
                fontWeight: 600,
                fontSize: "1.1rem",
                "&:hover": { backgroundColor: "#156bb2" },
              }}
            >
              Sign in
            </Button>
        </Box>
              <Typography align="center" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#1984d7", textDecoration: "none", fontWeight: 500 }}>
              Login
            </Link>
          </Typography>
      </Paper>
    </Container>
    <ToastContainer/>
    </Box>
      
    );
}
export default Signup ;