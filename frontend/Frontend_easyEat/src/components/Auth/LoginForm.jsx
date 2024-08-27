import { Typography ,TextField, Button} from "@mui/material";
import React from "react";
import { Form, Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import {useDispatch} from "react-redux"

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch=useDispatch();

  const handleSubmit = (values) => {

    dispatch(loginUser({userData:values,navigate}))
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
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
          />

          <Button sx={{mt:2 , padding:"1rem"}} fullWidth type="submit" variant="contained">Login</Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{mt:3}}>
        Don't have an account?
        <Button size="small" onClick={()=>navigate("/account/register")}>register</Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
