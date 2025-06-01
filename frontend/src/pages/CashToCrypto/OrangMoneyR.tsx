import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import MiniHeader from "../../components/MiniHeader";

import "../../font.css/index.css";

import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/gray4.png";
import two from "../../assests/Images/two.png";
import three from "../../assests/Images/gray3.png";
import carve from "../../assests/Images/carve.png";
import Tabhs from "../../components/TabhCard";
import orangeMoneyImg from "../../assests/Images/orange.png";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ListSelectorSvg from '../../assests/Images/listselector.svg'
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../../components/AppButton";

export default function OrangeMoneyR(){
    const native = useNavigate()
    return (
        <div className="bg-[#f7fdff]">
            <Layout>
                <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}>
                    <MiniHeader />
                </Box>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{
                            backgroundColor: "#F7FDFF",
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid  #D1D5DB",
                            borderBottom: "1px solid  #D1D5DB",
                        }}
                    >
                        <Grid
                            item
                            md={10.2}
                            xs={12}
                            sx={{
                                marginBottom: { lg: "-4px", xs: "0px" },

                                transform: { lg: "scale(0.9)", xs: "scale(none)" },
                                borderRight: "1px solid  #D1D5DB",
                                borderLeft: "1px solid  #D1D5DB",
                                // borderHeight:"5px",
                                display: "flex",
                                flexDirection: { md: "row", sm: "row", xs: "column" },
                            }}
                        >
                            <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                                <Tabhs
                                    img={carve}
                                    imgright={right}
                                    color="black"
                                    text="Reciver’s info"
                                />
                            </Grid>
                            <Grid
                                md={3}
                                sx={{
                                    borderBottom: "3px solid  #4F46E5",
                                    display: { md: "flex", xs: "flex" },
                                }}
                            >
                                <Tabhs
                                    img={carve}
                                    imgright={two}
                                    color="black"
                                    text="Payment Method"
                                />
                            </Grid>
                            <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                                <Tabhs
                                    img={carve}
                                    imgright={three}
                                    color="black"
                                    text="Review & Confirm"
                                />
                            </Grid>
                            <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                                <Tabhs
                                    img={carve}
                                    imgright={right2}
                                    text="reCeipt"
                                    color="#4F46E5"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="gridPadding">
                    <Grid container
                     sx={{
                        display: 'flex',
                        flexDirection: { md: "row", xs: "column" }
                    }}
                    >
                        <Grid item md={4} sm={12} xs={12}>
                            <Box
                                sx={{
                                    padding: { xs: "20px" },
                                    display: "flex",
                                    flexDirection: "Column",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {md: "38px", sm:"22px"},
                                        color: "black",
                                        fontWeight: "700 !important",
                                        lineHeight: "1.2 !important",
                                      }}
                                >
                                    Orange money payment method
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {md: "14px", sm:"12px"},
                                        color: {md: "black", sm: "#9DAFBD"},
                                        marginTop: "1.5rem !important"
                                      }}

                                >
                                    Choose money payment method in mobile money, bank deposit, cash pickup.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} sx={{padding: '20px', width: 'full'}}>
                            <Box
                            sx={{
                                padding: "0.5rem 1.5rem",
                                display: "flex",
                                backgroundColor: "#ffe1e1",
                                alignItems: "center",
                                borderRadius: '8px',
                              }}
                            >
                                <ErrorOutlineIcon htmlColor="#ff1c1c" sx={{ fontSize: 18 }} />
                                <Typography
                                sx={{
                                    fontSize: '12px',
                                }}
                                >
                                    Select Delivery method
                                </Typography>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '2rem',
                                padding: '1.5rem',
                                border: 'solid',
                                borderWidth: '1px',
                                backgroundColor: 'white',
                                borderColor: '#d1d5db',
                                display: "flex",
                                flexDirection: 'column'
                              }}
                            >
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                }}
                                >
                                    Choose Method Payment for Orange Money
                                </Typography>
                                <Box
                                sx={{
                                    mt: '0.25rem',
                                    px: '1rem',
                                    py: '0.5rem',
                                    borderRadius: '8px',
                                    borderWidth: '1px',
                                    borderColor: '#d1d5db',
                                    alignItems: 'center',
                                    display: 'flex',
                                    border: 'inherit'
                                }}
                                >
                                    <img src={orangeMoneyImg} width={20} height={20} />
                                    <Box sx={{ typography: 'subtitle2', ml: '0.5rem' }}>Mobile Money</Box>
                                    <Box sx={{ ml: 'auto', mr: '0' }}>
                                    <img src={ListSelectorSvg} width={18} />
                                    </Box>
                                </Box>
                                <Box sx={{ mt: '1.5rem'}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{fontSize: '14px', color: '#6A6A6A' }}>You Sent</Typography>
                                        <Typography sx={{fontSize: '14px', color: 'black'}}>0,0050 BTC = 100 $</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{fontSize: '14px', color: '#6A6A6A' }}>Orange money phone number of Flash Transfer</Typography>
                                        <Typography sx={{fontSize: '14px', color: 'black'}}>+337487587487</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{fontSize: '14px', color: '#6A6A6A' }}>Blockchain</Typography>
                                        <Typography sx={{fontSize: '14px', color: 'black'}}>Bitcoin</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{fontSize: '14px', color: '#6A6A6A' }}>Transfer Rate</Typography>
                                        <Typography sx={{fontSize: '14px', color: 'black'}}><span style={{color: 'red', fontWeight: '700' }}>0,000050</span> = $1</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                marginRight: { lg: "0px", xs: "10px" },
                                marginTop: { lg: "58px", xs: "100px" },
                                marginBottom: { xs: "50px", md: "0" },
                                display: "flex",
                                justifyContent: "end",
                                }}
                            >
                                {" "}
                                <Link
                                to="/addnewtwoR"
                                style={{ textDecoration: "none", width: "142px" }}
                                >
                                <AppButton
                                    title={"Cancel"}
                                    textTransform="none"
                                    color={"#FFFFFF"}
                                    maxWidth={"142px"}
                                    width={"142px"}
                                    backgroundColor={"#6A6A6A"}
                                    fontSize={"14px"}
                                    fontWeight={"500"}
                                    lineHeight={"20px"}
                                    padding="9px 17px"
                                    border="1px solid #6A6A6A"
                                    borderRadius="6px"
                                    height="38px"
                                    margin={"0px 0px 0px 10px"}
                                />
                                </Link>
                                <Link
                                to='/reviewanddetailR'
                                style={{ textDecoration: "none", width: "142px" }}
                                >
                                <Box sx={{ marginLeft: { md: "10px", xs: "10px" } }}>
                                    <AppButton
                                    title="Continue"
                                    color={"#FFFFFF"}
                                    maxWidth="142px"
                                    textTransform="none"
                                    padding="9px 17px"
                                    width="142px"
                                    backgroundColor={"#5D5FEF"}
                                    fontSize={"14px"}
                                    fontWeight={"500"}
                                    lineHeight={"20px"}
                                    height="38px"
                                    borderRadius="6px"
                                    margin={"0px 0px 0px 10px"}
                                    />
                                </Box>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        </div>
    )
}