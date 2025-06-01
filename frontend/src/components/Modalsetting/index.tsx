import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"
import kyc from "../../assests/Images/kyc.svg";
import A1 from "../../assests/Images/card.png";
import A2 from "../../assests/Images/bell.png";
import A3 from "../../assests/Images/lang.png";

import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export interface AppProps {
  menuicon?: any;

}
export default function ModalSetting({ menuicon }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      logo: kyc,
      name: "Kyc",
      url: "/personalverification",
      border: " 0.5px solid #6A6A6A",
    },
    {
      logo: A1,
      name: "Manage my card",
      url: "",
      border: " 0.5px solid #6A6A6A",
    },
    {
      logo: A2,
      name: "Notifications",
      url: "/notifications",
      border: " 0.5px solid #6A6A6A",
    },
    {
      logo: A3,
      name: "Language",
      url: "",
    },


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
              cursor: "pointer",
              position: "absolute",
              height: "360px",
              top: "265px",
              left: "75%",
              transform: "translate(-50%, -50%)",
              width: { md: "296px", xs: "296px" },
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 30px",
              borderRadius: "14px",
            }}
          >
            <Box sx={{
              display: "flex",
              justifyContent: "end"
            }}
            >
              <Button
                onClick={handleClose}
                endIcon={
                  <img
                    src={close}
                    style={{ marginTop: "22px" }}
                  />
                }
              />
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",

              }}
            >

              {data.map((i, index) => {
                return (
                  <Link to={i.url}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: `${i.border}`,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        padding: "15px 0px",
                      }}
                    // onClick={i.url}
                    >
                      <img src={i.logo} />
                      <Typography
                        sx={{
                          padding: "0px 13px",
                          fontWeight: "500  !important",
                          fontSize: "18px  !important",
                          lineHeight: "28px  !important",
                          fontFamily: "Inter !important",
                        }}
                      >
                        {i.name}


                      </Typography>
                      {index == 0 ?
                        < Box sx={{ borderRadius: "100px", backgroundColor: "#FF0000B8", width: "13px", height: "13px" }}>

                        </Box>
                        : null}
                    </Box>


                  </Link>
                );
              })}
            </Box>
          </Box>
        </Fade>
      </Modal >
    </div >
  );
}
