import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import "../../font.css/index.css"

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export interface burgerColor {
  burgercolor?: any;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function MobileDrawer({ burgercolor }: burgerColor) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const pages = [
    {
      page: "Sign In",
      path: "/",
    },
    {
      page: "Sign Up",
      path: "/signup",
    },

    // {
    //   page: "My Details",
    //   path: "/mydetails",
    // },
    {
      page: "Track My Order",
      path: "/trackmyorder",
    },
    {
      page: "Faq",
      path: "/faq",
    },
    {
      page: "ReferFriend",
      path: "/referfriend",
    },
    {
      page: "Blogs",
      path: "/blogs",
    },

    {
      page: "FindLocation",
      path: "/findlocation",
    },
    {
      page: "Profile",
      path: "/profile",
    },
    {
      page: "FindLocationProcess2",
      path: "/findLocationprocess2",
    },
    {
      page: "pageNotFound",
      path: "/pagenotfound",
    },
    {
      page: "Registration For Merchat",
      path: "/registrationformerchat",
    },

    {
      page: "Contact Us",
      path: "/contactus",
    },
    {
      page: "Notifications",
      path: "/notifications",
    },
    {
      page: "Personal Verification",
      path: "/personalVerification",
    },
    {
      page: "App Info",
      path: "/appInfo",
    },

    {
      page: "Settings",
      path: "/settings",
    },
    {
      page: "Payment Method",
      path: "/paymentmethod",
    },
    {
      page: "App New",
      path: "/addNew",
    },
    {
      page: "About Us",
      path: "/About",
    },
    {
      page: "Transaction",
      path: "/Transaction",
    },
    {
      page: "History",
      path: "/history",
    },
    {
      page: "Privacy Policy",
      path: "/privacypolicy",
    },
    {
      page: "Terms And Condition",
      path: "/termsAndConditions",
    },
    {
      page: "Currency Update",
      path: "/currencyupdate",
    },
    {
      page: "Payment Done",
      path: "/paymentdone",
    },
    {
      page: "Reviewand Detail",
      path: "/reviewanddetail",
    },
    {
      page: "Add New ",
      path: "/addnew",
    },
    {
      page: "B payment ",
      path: "/bpayment",
    },
    {
      page: "Use Existing ",
      path: "/useexisting",
    },
    {
      page: "Flash Token ",
      path: "/flashtoken",
    },


  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }), color: "rgb(176, 41, 34)" }}
      >
        <MenuIcon fontSize="large" sx={{ color: burgercolor || "white" }} />
      </IconButton>

      {/* <DrawerHeader /> */}

      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ alignSelf: "center" }}>
          {pages.map((items, index) => (
            <ListItem key={Math.random()} disablePadding>
              <ListItemButton onClick={() => navigate(items.path)}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={items.page} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
