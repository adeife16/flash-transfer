import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"
import { signOut, getAuth } from "firebase/auth";
import arrow from "../../assests/Images/headarrow.png";

import A1 from "../../assests/Images/user1.png";
import A2 from "../../assests/Images/user2.png";
import A3 from "../../assests/Images/transact.png";
import A4 from "../../assests/Images/details.png";
import A5 from "../../assests/Images/my_res.png";
import A6 from "../../assests/Images/settings.png";
import A7 from "../../assests/Images/logout.png";
import { useNavigate } from "react-router-dom"


import { Link, Navigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useAuth } from "../../Context/globaltContext";
import LevelBar from "./progressBar";
export interface AppProps {
  menuicon?: any;

}
export default function ModalProfile({ menuicon }: AppProps) {
  const Navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handleLogOut }: any = useAuth()

  const data = [
    {
      logo: A1,
      name: "My Profile",
      url: "/profile",
      border: " 0.5px solid #6A6A6A",
    },
    {
      logo: A2,
      name: "Refer A Friend",
      url: "",
      border: " 0.5px solid #6A6A6A",
    },

    {
      logo: A3,
      name: "History",
      url: "/History",
      border: " 0.5px solid #6A6A6A",
    },

    // {
    //   logo: A4,
    //   name: "My details",
    //   url: "",
    //   border: " 0.5px solid #6A6A6A",
    // },

    {
      logo: A5,
      name: "My Recipients",
      url: "/bpayment",
      border: " 0.5px solid #6A6A6A",
    },

    {
      logo: A6,
      name: "Settings",
      url: "/settings",
      border: " 0.5px solid #6A6A6A",
    },

    {
      logo: A7,
      name: " Logout",
      url: "/",
      fun: handleLogOut
      // border: " 0.5px solid #6A6A6A",},

    }
  ];


  return (
    <div>
      <IconButton onClick={handleOpen} >
        {menuicon}
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        open={open}
        BackdropComponent={Backdrop}
        // hideBackdrop={true}
        
        onClick={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,

        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: { md: "328px", xs: "267px" },
              left: { md: "79%", xs: "68%" },
              transform: "translate(-50%, -50%)",

            }}
          >
            <Box sx={{
              cursor: 'pointer',
              transform: { md: "scale(0.78)", xs: "scale(0.7)" },
              height: "618px",
              width: { md: "287px", xs: "287px" },
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 10px",
              borderRadius: "14px",
            }}>


<Box sx={{
                pt:"10px",
                display: "flex",
                justifyContent: "end",
                alignItems: "center"

              }}
              >
                <img src={arrow} width="45px"height="45px"/>
                <Box sx={{ ml:"10px",borderRadius: "20px", backgroundColor: "green", width: "184px", height: "15px" }}>
                </Box>
                <Button
                  onClick={handleClose}
                  endIcon={
                    <img
                      src={close}
                      style={{ marginTop: "0px" }}
                    />
                  }
                />
              </Box>

              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0px 15px"
                }}
              >

                <Typography sx={{
                  fontWeight: "800  !important",
                  fontSize: "24px  !important",
                  lineHeight: "48px  !important",
                  fontFamily: "Inter !important",
                  borderBottom: "0.5px solid #6A6A6A",
                }}>
                  Welcome
                </Typography>
                {data.map((i) => {
                  return (

                    <Box
                      sx={{
                        borderBottom: `${i.border}`,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        padding: "26px 0px",
                      }}
                      onClick={i.fun}
                    >


                      <img src={i.logo} />
                      <Typography
                        sx={{
                          padding: "0px 15px",
                          fontWeight: "500  !important",
                          fontSize: "18px  !important",
                          lineHeight: "28px  !important",
                          fontFamily: "Inter !important",
                        }}

                      >
                        <Link
                          to={i.url}
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}

                        >
                          {i.name}

                        </Link>
                      </Typography>

                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div >
  );
}
