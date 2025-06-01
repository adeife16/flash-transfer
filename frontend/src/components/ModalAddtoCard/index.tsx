import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import close from "../../assests/Images/close.png";
import "../../font.css/index.css"

import A1 from "../../assests/Images/user1.png";
import A2 from "../../assests/Images/user2.png";
import A3 from "../../assests/Images/transact.png";
import A4 from "../../assests/Images/details.png";
import A5 from "../../assests/Images/my_res.png";
import A6 from "../../assests/Images/settings.png";
import A7 from "../../assests/Images/logout.png";
import wall1 from "../../assests/Images/wall1.png";
import wall2 from "../../assests/Images/wall2.png";
import qa from "../../assests/Images/Question.png";


// import user from "../../assets/images/user.png";
// import trash from "../../assets/images/trash.png";
// import add from "../../assets/images/add.png";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel, Grid, IconButton, Radio, TextField } from "@mui/material";
import AppButton from "../AppButton";
export interface AppProps {
  BtnWallet?: any;


}

export default function ModalProfile({ BtnWallet }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      {/* <IconButton> */}
      <AppButton
        textTransform="none"
        title={"Add New Card"}
        backgroundColor={"#5D5FEF"}
        color={"#fff"}
        height="60px"
        padding={"16px 26px"}
        maxWidth={"229px"}
        startIcon={
          <img src={BtnWallet} alt={"image"} style={{ color: "#fff" }} />

        }
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        open={open}
        BackdropComponent={Backdrop}
        // hideBackdrop={true}
        // onClick={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,

        }}
      >
        <Fade in={open}>
          <Box

            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

            }}
          >
            <Grid container
            >

              <Grid item md={12}
                sx={{

                  transform: { md: "scale(0.78)", xs: "scale(0.8)" },
                  height: "528px",
                  width: { md: "742px", xs: "380px" },
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

                <Grid
                  container sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    m: "16px 0px 0px 0px",
                  }}
                >
                  <Grid item md={12} sx={{
                    width: { md: "100%", xs: "330px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "0.5px solid #6A6A6A",

                  }}>
                    <Typography sx={{
                      fontWeight: "800  !important",
                      fontSize: "24px  !important",
                      lineHeight: "48px  !important",
                      fontFamily: "Inter !important",

                    }}>
                      Add new Card
                    </Typography>
                  </Grid>
                  <Grid item md={12} sx={{

                    width: { md: "100%", xs: "330px" },
                  }}>
                    <Typography m="16px 0px 4px 0px" sx={{
                      fontWeight: "500  !important",
                      fontSize: "14px  !important",
                      lineHeight: "20px  !important",
                      fontFamily: "Inter !important",
                    }}>
                      Card Number
                    </Typography>
                    <Box sx={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      padding: "9px 13px !important",
                    }}>


                      <TextField
                        sx={{
                          width: { md: "100%", xs: "330px" },
                          backgroundColor: "white",
                          textAlign: "center",

                        }}
                        placeholder="1234 0000 0000 0000"
                        // disableUnderline={true}
                        variant="standard"
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                      <Box>

                        <img src={wall2} />
                      </Box>
                    </Box>

                  </Grid>
                  <Grid sx={{
                    width: { md: "100%", xs: "330px" },
                    display: "flex", flexDirection: "row", alignItems: "space-between"
                  }}>

                    <Grid item md={12} sx={{
                      width: { md: "40%", xs: "330px" },
                      marginRight: "20px"
                    }}>
                      <Typography m="16px 0px 4px 0px" sx={{
                        fontWeight: "500  !important",
                        fontSize: "14px  !important",
                        lineHeight: "20px  !important",
                        fontFamily: "Inter !important",
                      }}>
                        Expiry Date
                      </Typography>
                      <Box sx={{
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        padding: "9px 13px !important",
                      }}>


                        <TextField
                          sx={{
                            //  width: { md: "100%", xs: "330px" },
                            backgroundColor: "white",
                            textAlign: "center",

                          }}
                          placeholder="MM / YY"

                          // disableUnderline={true}
                          variant="standard"
                          fullWidth
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                        <Box>

                          <img src={wall1} />
                        </Box>
                      </Box>

                    </Grid>
                    <Grid item md={12} sx={{
                      width: { md: "40%", xs: "330px" },
                    }}>
                      <Typography m="16px 0px 4px 0px"
                        sx={{
                          fontWeight: "500  !important",
                          fontSize: "14px  !important",
                          lineHeight: "20px  !important",
                          fontFamily: "Inter !important",
                        }}>
                        CVC/CVV
                      </Typography>

                      <Box sx={{
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        padding: "9px 13px !important",
                      }}>


                        <TextField
                          sx={{
                            //  width: { md: "100%", xs: "330px" },
                            backgroundColor: "white",
                            textAlign: "center",

                          }}
                          placeholder="***"
                          // disableUnderline={true}
                          variant="standard"
                          fullWidth
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                        <Box>

                          <img src={qa} />
                        </Box>
                      </Box>

                    </Grid>

                  </Grid>
                  <Grid item md={12} sx={{
                    width: { md: "100%", xs: "330px" },
                  }}>
                    <Typography m="16px 0px 4px 0px" sx={{
                      fontWeight: "500  !important",
                      fontSize: "14px  !important",
                      lineHeight: "20px  !important",
                      fontFamily: "Inter !important",
                    }}>
                      Cardholder Name
                    </Typography>
                    <TextField
                      sx={{
                        backgroundColor: "white",
                        textAlign: "center",
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        padding: "9px 13px !important",
                        // height: "42px"
                      }}
                      placeholder="Full name here"
                      // disableUnderline={true}
                      variant="standard"
                      fullWidth
                      InputProps={{
                        disableUnderline: true,
                      }}

                    />
                  </Grid>
                  <Grid
                    item md={12} sx={{
                      width: { md: "100%", xs: "330px" },
                      flexDirection: "row",
                      display: "flex"


                    }}>
                    <Box mr="10px">
                      <FormControlLabel control={
                        <Checkbox
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon />}
                        />
                      } label="Save Card" />

                    </Box>

                  </Grid>
                  <Grid item md={12} sx={{
                    width: { md: "100%", xs: "330px" },
                  }}>

                    <AppButton
                      title={"Add Card"}
                      color={"white"}
                      width="100%"
                      backgroundColor={"#4F46E5"}
                      padding={"17px 0px 17px 0px"}
                      fontSize={"18px"}

                      textTransform="none"
                      fontWeight={"500"}
                      lineHeight={"28px"}
                      height="62px"
                      borderRadius="6px"
                    // endIcon={<ArrowForwardIcon />}

                    />

                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div >
  );
}
