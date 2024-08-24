import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import {
  Grid,
  Box,
  Button,
  Card,
  Divider,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import CartItem from "./CartItem";
import { Form, Field, Formik } from "formik";
// import * as Yup from "yup"

const items = [1, 2];
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

// const validationSchema= Yup.object.shape({

//   streetAddress:Yup.string().required("Streeet Address is required"),
//   state:Yup.string().required("State is required"),
//   pincode:Yup.string().required("Pincode is required"),
//   city:Yup.string().required("City is required")
// })

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};

  const handleOpenAdressModal = () => {
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleSubmit = (value) => {
    console.log(value)
  };

  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item) => (
            <CartItem key={item} />
          ))}

          <Divider />

          <div className="billdetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹599</p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>₹50</p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges </p>
                <p>₹33</p>
              </div>
              <Divider />

              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>₹850</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Deliverry Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 2, 3, 4, 5].map((item) => (
                <AddressCard
                  key={item}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}

              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAdressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(value)=>handleSubmit(value)}
          >
            <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  // error={!ErrorMessage("strretAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg) => <span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="state"
                  label="State"
                  fullWidth
                  variant="outlined"
                  // error={!ErrorMessage("strretAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg) => <span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  fullWidth
                  variant="outlined"
                  // error={!ErrorMessage("strretAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg) => <span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="pincode"
                  label="Pincode"
                  fullWidth
                  variant="outlined"
                  // error={!ErrorMessage("strretAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg) => <span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }
                />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit" color="primary">Deliver Here</Button>

              </Grid>


           
              
            </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
