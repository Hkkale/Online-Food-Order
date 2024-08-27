import React from "react";
import { Typography, TextField, Button, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Form, Field, Formik } from "formik";
import MenuItem from '@mui/material/MenuItem';
import {useDispatch} from "react-redux"

import { registerUser } from "../../State/Authentication/Action";


const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};
const RegisterForm = () => {
  const navigate = useNavigate();

  const dispatch=useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerUser({userData:values,navigate}))

  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="full name"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          />

          
            
            <Field fullWidth margin="normal"
            as={Select}
              labelId="role-simple-select-label"
              id="demo-simple-select"
              name="role"
              // value={initialValues.role}
              l
              // onChange={handleChange}
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              
            </Field>
          

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        If have an account already ?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Register
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
