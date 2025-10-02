import React, { useState } from "react";
import { Link, } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {CssBaseline,Container, FormLabel, FormControl, Box, Button, Card, Typography, TextField, Stack, Paper } from '@mui/material' ;
export default function Login(){

  const API_URL = import.meta.env.VITE_API_URL;
  const DASH_URL = import.meta.env.VITE_DASH_URL;
    
    const [inputValue, setInputValue] = useState({
        mobileNumber : "",
        password : "",
    });

    const {mobileNumber, password} = inputValue ;

    const handleOnChange = (e)=>{
        const {name, value} = e.target ;
        setInputValue({...inputValue, [name] : value,}) ;
    };

    const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

     const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(()=>{
               window.location.href = `${DASH_URL}/dashboard/summary` ;
            }, 1000) ;
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      mobileNumber: "",
      password: "",
    });
  };


    return (
    <Box sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f0ff 0%, #fafcff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <CssBaseline />
      <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
           <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ mb: 3, fontWeight: 700, color: "#1984d7" }}
          >
            Login
          </Typography>
          <Box component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}>
               <FormControl>
              <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
              <TextField
                error={false}
                type="text"
                name="mobileNumber"
                value={mobileNumber}
                placeholder="Enter mobile number"
                variant="outlined"
                onChange={handleOnChange}
                fullWidth
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={false}
                name="password"
                value={password}
                placeholder="Enter Password"
                type="password"
                variant="outlined"
                onChange={handleOnChange}
                fullWidth
                required
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
              Log in
            </Button>
            </Box>
             <Typography align="center" sx={{ mt: 3 }}>
            Don't have an account ?{" "}
            <Link to="/signup" style={{ color: "#1984d7", textDecoration: "none", fontWeight: 500 }}>
              Signup
            </Link>
          </Typography>
      </Paper>
      </Container>
      <ToastContainer />
    </Box>
    
      
    
  );
};

