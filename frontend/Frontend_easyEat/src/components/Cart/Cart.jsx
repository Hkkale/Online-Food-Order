import { Divider } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {Button }from "@mui/material";
import {Card} from "@mui/material";

const items = [1, 2];

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};

  const handleOpenAdressModal =()=>{

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
              {[1,2,3,4,5].map((item) => (
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
                  <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                                  
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
    </div>
  );
};

export default Cart;
