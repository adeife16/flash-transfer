import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"

import A1 from "../../assests/Images/A1.png";
import A2 from "../../assests/Images/A2.png";
import A3 from "../../assests/Images/A3.png";
import A4 from "../../assests/Images/A4.png";
import A5 from "../../assests/Images/A5.png";
import A6 from "../../assests/Images/A6.png";
import A7 from "../../assests/Images/A7.png";
import A8 from "../../assests/Images/A8.png";
import A9 from "../../assests/Images/A9.png";
import A10 from "../../assests/Images/A10.png";
import A11 from "../../assests/Images/A11.png";
import A12 from "../../assests/Images/A12.png";
import A13 from "../../assests/Images/A13.png";

// import user from "../../assets/images/user.png";
// import trash from "../../assets/images/trash.png";
// import add from "../../assets/images/add.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
export interface AppProps {
  menuicon?: any;

}
export default function Modal4({ menuicon }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      logo: A1,
      name: "French",
      url: ""
    },
    {
      logo: A2,
      name: "Germany",
      url: ""
    },
    {
      logo: A3,
      name: "Spanish",
      url: ""
    },
    {
      logo: A4,
      name: " Italian",
      url: ""
    },
    {
      logo: A5,
      name: "Netherlands ",
      url: ""
    },
    {
      logo: A6,
      name: "Portuguese",
      url: ""
    },
    {
      logo: A7,
      name: " Arabic",
      url: ""
    },
    {
      logo: A8,
      name: "Russian ",
      url: ""
    },
    {
      logo: A9,
      name: "Chinese",
      url: ""
    },
    {
      logo: A10,
      name: "indian",
      url: ""
    },
    {
      logo: A11,
      name: "Vietnamese",
      url: ""

    },

    {
      logo: A12,
      name: "Thai",
      url: ""
    },
    {
      logo: A13,
      name: "Japanese",
      url: ""
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
        hideBackdrop={true}
        BackdropProps={{
          timeout: 500,

        }}
      >
        <Fade in={open}>
          <Box
            sx={{

              position: "absolute",
              height: "688px",
              top: "66%",
              left: "88%",
              transform: "translate(-50%, -50%)",
              width: { md: "262px", xs: 300 },
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 30px",
              // display: "flex",
              // flexDirection: "row-reverse",
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
              {data.map((i) => {
                return (
                  <Box
                    sx={{
                      borderBottom: "0.5px solid #6A6A6A",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                      padding: "10px 10px",
                    }}
                  >
                    <img src={i.logo} />
                    <Typography
                      sx={{
                        width: "170px",
                        padding: "0px 15px",
                        fontWeight: "700  !important",
                        fontFamily:"Inter !important",
                        fontSize: "16px  !important",
                        lineHeight: "16px  !important",
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
    </div>
  );
}
