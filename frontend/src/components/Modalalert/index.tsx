import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"

import { useEffect, useState } from "react"
import A1 from "../../assests/Images/icongreen.png";
import A2 from "../../assests/Images/iconred.png";
import A3 from "../../assests/Images/iconblue.png";
import A4 from "../../assests/Images/iconblue.png";

import { useAlertProvider } from "../../Context/alert_context";
import { getNotification } from "../../Services/auth";
import AlertItem from "./alertItem";
export interface AppProps {
  menuicon?: any;


}
export interface itemType {
  logo: any;
  border: any;
  text: any;
  date: any;
  color: any;
  para: any;
  url: any;
  createdAt: any;
  description: any;
}

export function Modelnotification({ menuicon }: AppProps) {

  const [open, setOpen] = useState(false);

  const [notifications, setNotifications]: any = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  const { alertList } = useAlertProvider();
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const Getdata = async () => {

    await getNotification().then((res) => {

      setNotifications(res)
      console.log("alerts", res)
    })
  }

  // const data = [
  //   {
  //     logo: A1,
  //     border: "4px solid #34D399",
  //     text: "Payment sent!",
  //     date: "10 minutes ago",
  //     color: "black",
  //     para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.French",
  //     url: ""
  //   },
  //   {
  //     logo: A2,
  //     border: "4px solid #C5221F",
  //     color: "#C5221F",
  //     date: "10 minutes ago",
  //     text: "Payment Declined!",
  //     para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.French",
  //     url: ""
  //   },
  //   {
  //     logo: A3,
  //     border: "4px solid #5D5FEF",
  //     color: "black",
  //     date: "10 minutes ago",
  //     text: "Payment sent!",
  //     para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.French",
  //     url: ""
  //   },
  //   {
  //     logo: A4,
  //     border: "4px solid #5D5FEF",
  //     color: "black",
  //     date: "10 minutes ago",
  //     text: "Payment sent!",
  //     para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.French",
  //     url: ""
  //   },


  // ];
  useEffect(() => {
    Getdata()
  }, [open])
  return (
    <div>
      <Button onClick={handleOpen} >
        {menuicon}
      </Button>
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
              left: "71%",
              top: { md: "306px" },
              transform: "translate(-50%, -50%)",
              overflowY: "auto"
            }}
          >
            <Box sx={{
        
              transform: "scale(0.83)",
              width: { md: "412px", xs: "412px" },
              height: "520px",
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 30px",
              overflowY: "auto",
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

              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{
                  mb: "8px ",

                  textAlign: "center",
                  padding: "0px 0px 10px  0px",
                  fontWeight: "800  !important",
                  fontSize: "24px  !important",
                  lineHeight: "48px  !important",
                  fontFamily: "Inter !important",
                  borderBottom: "0.5px solid #6B7280",
                }}>
                  Alerts
                </Typography>

                {/* {alertList ?
                  <Box>

                    {
                      alertList.map((item: itemType, index: any) => {
                        return (
                          <Box m="8px 0px" sx={{ cursor: "pointer" }} >
                            <Box


                              sx={{
                                borderLeft: `${index == 0 ? "4px solid #34D399" : index == 1 ? "4px solid #C5221F" : "4px solid  #5D5FEF"}`,
                                // borderLeft: `${index.border}`,
                                display: "flex",
                                alignindexs: "center",
                                flexDirection: "row",
                                padding: "10px 10px",
                              }}
                            >
                              <Box>
                                {index == 0 ?
                                  <img src={A1} style={{
                                    marginRight: "20px",
                                  }} /> : index == 1 ?
                                    <img src={A2} style={{
                                      marginRight: "20px",
                                    }} /> : <img src={A3} style={{
                                      marginRight: "20px",
                                    }} />}

                              </Box>
                              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", }}>
                                <Typography sx={{

                                  fontWeight: "300  !important",
                                  fontSize: "10px  !important",
                                  lineHeight: "20px  !important",
                                  fontFamily: "Inter !important",
                                }}>
                                  {item.createdAt}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: `${item.color}`,
                                    fontWeight: "500  !important",
                                    fontSize: "14px  !important",
                                    lineHeight: "20px  !important",
                                    fontFamily: "Inter !important",

                                  }}
                                >
                                  {item.description}
                                </Typography>
                                <Typography sx={{
                                  fontWeight: "400  !important",
                                  fontSize: "14px  !important",
                                  lineHeight: "20px  !important",
                                  fontFamily: "Inter !important",
                                  color: "#6B7280"
                                }}>
                                  {item.description}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>

                        );
                      })
                    }

                  </Box>
                  : "No Data"} */}
                  {
                    alertList.map((item,index)=><AlertItem item ={item} index={index}/>)
                  }
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div >
  );
}

