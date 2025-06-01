import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"

import A1 from "../../assests/Images/polygon.png";
import A2 from "../../assests/Images/bitcoin.png";
import A3 from "../../assests/Images/ethi.png";


import A4 from "../../assests/Images/Ac.png";
import A5 from "../../assests/Images/BB.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
export interface AppProps {
  menuicon?: any;

}
export default function Priceone({ menuicon }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      logo: A5,
      name: "BNB Chain ",
      url: "",
      border: "none"


    },
    {
      logo: A1,
      name: "Polygon",
      url: "",
      border: " 0.5px solid #6A6A6A"

    },
    {
      logo: A3,
      name: "Ethereum",
      url: "",
      border: " 0.5px solid #6A6A6A"

    },
    {
      logo: A4,
      name: "Avax",
      url: "",
      border: " 0.5px solid #6A6A6A"

    },
    {
      logo: A2,
      name: "Bitcoin",
      url: "",
      border: " 0.5px solid #6A6A6A"

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
        onClick={handleClose}
        BackdropComponent={Backdrop}
        // hideBackdrop={true}
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
              height: "402px",
              top: "289px",
              left: { md: "54%", xl: "57%" },
              transform: "translate(-50%, -50%)",
              width: { md: "270px", xs: "270px" },
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
                // padding: "0px 5px"
              }}
            >

              {data.map((i) => {
                return (
                  <Box
                    sx={{
                      borderTop: `${i.border} `,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      // justifyContent: "center",
                      padding: "15px 0px",
                    }}
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
                      {/* <Link
                        to={i.url}
                        style={{
                          textDecoration: "none",
                          color: `${i.color}`,
                          fontSize: "",
                        }}
                      >
                       
                      </Link> */}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div >
  );
}
