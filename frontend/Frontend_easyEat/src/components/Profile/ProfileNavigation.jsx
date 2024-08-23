import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

const menu = [
  {
    title: "Orders",
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Favorites",
    icon: <FavoriteIcon />,
  },
  {
    title: "Address",
    icon: <HomeIcon />,
  },
  {
    title: "Payments",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    title: "Notifiactions",
    icon: <NotificationsActiveIcon />,
  },
  {
    title: "Events",
    icon: <EventIcon />,
  },
  {
    title: "Log-Out",
    icon: <LogoutIcon />,
  },
];

const ProfileNavigation = ({open, handleClose}) => {

  const isSmallScreen=useMediaQuery("(max-width:900px)")
  

  return(

  <div>

    <Drawer variant={"permanent"} 
    onClose={handleClose}  
    open={isSmallScreen ? open:true}
    anchor="left" 
    sx={{ zIndex: -1,position:'sticky'}}>

      <div className="w=[50vw] mt-3 lg:w-[20vw] h-[100-vh] flex flex-col justify-center text-xl  gap-8 pt-20 ">
        {menu.map((item,i)=><React.Fragment key={i}>
        <div className="px-4 flex items-center space-x-5 cursor-pointer">
          {item.icon}
          <span>{item.title}</span>
        </div>
        {i!==menu.length-1 && <Divider/>}
        </React.Fragment>)}

      </div>

    </Drawer>


  </div>
  );
};

export default ProfileNavigation;
