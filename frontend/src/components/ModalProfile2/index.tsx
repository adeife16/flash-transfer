import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"

import A1 from "../../assests/Images/i1.png";
import A2 from "../../assests/Images/i2.png";
import A3 from "../../assests/Images/i3.png";
import A4 from "../../assests/Images/i4.png";
import A5 from "../../assests/Images/my_res.png";
import A6 from "../../assests/Images/settings.png";
import A7 from "../../assests/Images/logout.png";


// import user from "../../assets/images/user.png";
// import trash from "../../assets/images/trash.png";
// import add from "../../assets/images/add.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
export interface AppProps {
  menuicon?: any;

}
export default function ModalProfile({ menuicon }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      logo: A1,
      name: "Send",
      url: "/",
      border: " 0.5px solid #6A6A6A",
    },
    {
      logo: A2,
      name: "Find Location",
      url: "/findlocation",
      border: " 0.5px solid #6A6A6A",
    },

    {
      logo: A3,
      name: "Track transfer",
      url: "/trackmyorder",
      border: " 0.5px solid #6A6A6A",
    },

    {
      logo: A4,
      name: "Help",
      url: "/questions/answers",
      border: "none",
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
              position: "absolute",
              top:  {md:"150px",xs:"155px"},
              left: {md:"85%",xs:"24%"},
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box sx={{
              transform:{md:"scale(0.78)",xs:"scale(0.7)"},
              height: "292px",  
              width: { md: "263px", xs: "263px" },
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 30px",
              // display: "flex",
              // flexDirection: "row-reverse",
              borderRadius: "14px",
            }}>


              <Box sx={{
                display: "flex",
                justifyContent: "end"
              }}
              >
                {/* <Button
                  onClick={handleClose}
                  endIcon={
                    <img
                      src={close}
                      style={{ marginTop: "22px" }}
                    /> */}
                  {/* }
                /> */}
              </Box>

              <Box
                sx={{
                  // marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0px 0px "
                }}
              >
               
                {data.map((i) => {
                  return (
                    <Box
                      sx={{
                        borderBottom: `${i.border}`,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        // justifyContent: "center",
                        padding: "20px 0px",
                      }}
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
