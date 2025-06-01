import * as React from "react";
import Walet from "../../assests/Images/waallet.png";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"
import { useWallet } from '../../Context/wallet_context';
import A1 from "../../assests/Images/W1.png";
import A2 from "../../assests/Images/W2.png";
import A3 from "../../assests/Images/W3.png";
import A4 from "../../assests/Images/W4.png";
import A5 from "../../assests/Images/W5.png";
import { toast } from 'react-toastify';
// import user from "../../assets/images/user.png";
// import trash from "../../assets/images/trash.png";
// import add from "../../assets/images/add.png";

import AppButton from "../AppButton";
export interface AppProps {
  menuicon?: any;
  name?: any;
  namesize?: any;
  priceimg1?: any;

}
export default function ModalWallet({ menuicon,name,namesize ,priceimg1}: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {account,connect,disconnect} = useWallet();
  const connectMetamask = ()=>{
    if(account){
      toast.warning("you are connected now!");
    }else{
      connect("METAMASK");
    }
  }
  const connectBinance = ()=>{
    if(account){
      toast.warning("you are connected now!");
    }else{
      connect("BSC_CONNECT");
    }
  }
  const connectTrustWallet = ()=>{
    if(account){
      toast.warning("you are connected now!");
    }else{
      connect("TRUST_CONNECT");
    }
  }
  const WalletConnect = ()=>{
    console.log("1212awall")
    if(account){
      toast.warning("you are connected now!");
    }else{
      connect("WALLET_CONNECT");
    }
  }
  const handleDisconnect = () => {
    disconnect();
  };

  const data = [
    {
      logo: A1,
      name: "Flash Wallet",
      url: "",
      connecter:()=>{
        
      }
    },
    // {
    //   logo: A2,
    //   name: "Binance Wallet",
    //   url: ""
    // },
    {
      logo: A3,
      name: "Metamask",
      url: "",
      connecter:()=>{
        connectMetamask()
      }
    },
    {
      logo: A4,
      name: "Trust Wallet",
      url: "",
      connecter:()=>{
        connectTrustWallet()
      }
    },
    {
      logo: A5,
      name: "Wallet Connect",
      url: "",
      connecter:()=>{
        WalletConnect()
      }
    },

  ];

  return (
    <div>
          <AppButton
          title={"Connect Your Wallet"}
                  backgroundColor={"#5D5FEF"}
                   fontSize={{xs:"12px",md:"18px"}}
               
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"#fff"}
                  height=" 56px"

                  textTransform="none"
                  maxWidth={"100%"}
                  margin="0px 0px 10px 0px"
                  // padding={"17px 41px"}
                  borderRadius={"9px"}
                  onClick={handleOpen}


                  startIcon={
                    <img
                      src={Walet}
                      alt="image"
                    />
                       
                    }
                    />
                  

      {/* <IconButton >
        {menuicon}
      </IconButton> */}
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
              position: "absolute",
              height: { md: "378px", xs: "278px" },
              top: { md: "275px", xs: "190px" },
              left: { md: "78%", xs: "60%" },
              transform: "translate(-50%, -50%)",
              width: { md: "412px", xs: "267px" },
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
                sx={{
                  display: { md: "flex", xs: "none" },
                }}
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

                cursor:"pointer",
                marginTop: { md: "10px", xs: "-1px" },
                // paddingTop: {md:"0px",xs:"20px"},

                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{
                display: { md: "flex", xs: "none" },

                textAlign: "center",
                padding: "0px 0px 10px  0px",
                fontWeight: "800  !important",
                fontSize: "24px  !important",
                lineHeight: "32px  !important",
                fontFamily: "Inter !important",
              }}>
                Wallet
              </Typography>
              {data.map((i) => {
                return (
                  <Box
                  onClick={i.connecter}
                    sx={{
                      borderTop: "0.5px solid #6A6A6A",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      // justifyContent: "center",
                      padding: { md: "13px 10px", xs: "18px 10px" },
                    }}
                  >
                    <img src={i.logo}  />
                    <Typography
                      sx={{
                        padding: "0px 15px",
                        fontWeight: "400  !important",
                        fontSize: "16px  !important",
                        lineHeight: "24px  !important",
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
    </div>
  );
}
