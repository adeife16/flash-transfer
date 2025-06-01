import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useStyles } from '../../Styles';
import FlashLogo from '../../assests/Images/Flashlogo.png';
import AmericanFlag from '../../assests/Images/AmericanFlag.svg';
import LD from '../../assests/Images/LD.png';
import '../../font.css/index.css';
import orange from '../../assests/Images/orangeLogo.svg';

import logoflash from '../../assests/Images/mobileflash.png';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as FLashO } from '../../assests/Images/flashOrange.svg';

import AppButton from '../AppButton';
import MobileDrawer from '../MobileDrawer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ModalCountry from '../Modalcountry';
import { Modelnotification } from '../Modalalert';
import ModalProfile from '../ModalProfile';
import ModalProfile2 from '../ModalProfile2';
import ModalNft from '../ModalNft';

import ModalSetting from '../Modalsetting';
import ModalWallet from '../ModalWallet';
import ModalWalet2 from '../ModalWalet2';
import ModalPrice from '../ModalPrice';
import { useWallet } from '../../Context/wallet_context';
import { useAuth } from '../../Context/globaltContext';
import { toast } from 'react-toastify';
import { signOut, getAuth } from 'firebase/auth';
export interface AppProps {
	nft?: any;
	img1?: any;
	img2?: any;
	img3?: any;
	img4?: any;
	name?: any;
	login?: any;
	Signup?: any;
	priceimg1?: any;
	priceimg2?: any;
	namesize?: any;
	login2?: any;
	Signup2?: any;
	Binanceimg?: any;
	name2?: any;
	walletmini?: any;
	ModelNotifications?: any;
}
const CommonNav = ({
	walletmini,
	Binanceimg,
	nft,
	name2,
	login2,
	Signup2,
	namesize,
	img1,
	img2,
	img3,
	img4,
	name,
	login,
	Signup,
	priceimg1,
	priceimg2,
}: AppProps) => {
	// const listData :any = userData
	// const data = JSON.parse(listData)
	// console.log(userData)

	const isAuth = localStorage.getItem('token');

	const classes = useStyles();
	const navigate = useNavigate();
	const { account, connect, disconnect } = useWallet();

	const connectMetamask = () => {
		if (account) {
			toast.warning('you are connected now!');
		} else {
			connect('METAMASK');
		}
	};
	const connectBinance = () => {
		if (account) {
			toast.warning('you are connected now!');
		} else {
			connect('BSC_CONNECT');
		}
	};
	const handleDisconnect = () => {
		disconnect();
	};

	const navLinks = [
		{
			link_item: 'Send',
			path: '/',
		},
		// {
		//   link_item: "Receive",
		//   path: "/"
		// },
		{
			link_item: 'Find locations',
			path: '/findLocation',
		},
		{
			link_item: 'Track a transfer',
			path: '/trackmyorder',
		},
		{
			link_item: 'Help',
			path: '/questions/answers',
		},
	];
	return (
		<>
			<Box component={'div'} className={classes.main_nav_container}>
				<Box
					component={'div'}
					sx={{
						transform: {
							md: 'scale(0.76)',
							xl: 'scale(0.9)',
							xs: 'none',
						},
						width: { sm: '95%', xs: '95%' }
					}}
					className={classes.sub_nav_container}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: { lg: 'start' },
						}}>
						<Box className={classes.FlashLogo_container}>
							<Box
								sx={{
									display: { xs: 'flex', md: 'none' },
									marginRight: { xs: '-20px', md: '0px' },
								}}>
								{/* <MobileDrawer /> */}
								<IconButton>
									<ModalProfile2
										menuicon={
											<MenuIcon
												fontSize="large"
												sx={{ color: 'white' }}
											/>
										}
									/>
								</IconButton>
							</Box>
							<Box
								sx={{
									display: { lg: 'flex', xs: 'none' },
									marginRight: { md: '0px', xs: '-10px' },
								}}>
								<Link to="/" style={{ textDecoration: 'none' }}>
									<img
										src={FlashLogo}
										alt="image"
										width={'100%'}
									/>
								</Link>
							</Box>
							<Box
								mt="5px"
								sx={{
									display: { lg: 'none', xs: 'flex' },
									marginRight: { md: '0px', xs: '10px' },
								}}>
								<Link to="/" style={{ textDecoration: 'none' }}>
									{/* <FLashO/> */}
									<img
										src={orange}
										alt="image"
										style={{
											height: '32px',
											marginTop: '-5px',
										}}
									/>
								</Link>
							</Box>
						</Box>
						<Box
							className={classes.nav_Item_box}
							sx={{
								margin: {
									xl: '0px 100px 0px 85px',
									md: '0px',
									xs: '0px',
								},
							}}>
							{navLinks.map((items) => {
								return (
									<Link
										to={items.path}
										style={{ textDecoration: 'none' }}>
										<Typography
											className={classes.nav_items}
											key={Math.random()}>
											{items.link_item}
										</Typography>
									</Link>
								);
							})}
						</Box>
					</Box>

					{/* container login and sign up button */}
					<Box className={classes.login_button_Box}>
						{/* {isAuth ? null : (
							<Box
								sx={{
									display: { md: 'flex', xs: 'none' },
									marginLeft: {
										md: '-28px',
										sm: '20px',
										xs: '10px',
										xl: '0px',
										xxl: '380px',
									},
								}}>
								<AppButton
									fontSize={namesize ? namesize : '24px'}
									title={name2}
									color={'#FFFFFF'}
									width="117px"
									backgroundColor={'#FCBF07'}
									borderRadius={'8px'}
									height="49.63px"
									padding="11px 8px"
									textTransform={'none'}
									boxShadow={
										'0px 1px 2px rgba(0, 0, 0, 0.05)'
									}
									fontWeight={'700px'}
									lineHeight={'32px'}
									startIcon={
										<img src={Binanceimg} alt="image" />
									}
								/>
							</Box>
						)} */}
						<Box
							sx={{
								display: { md: 'flex', xs: 'none' },
								marginLeft: {
									md: '15px',
									sm: '20px',
									xs: '10px',
									xl: ' 40px',
								},
							}}>
							{isAuth ? (
								<ModalPrice
									name={name}
									namesize={namesize}
									priceimg1={priceimg1}
								/>
							) : (
								<ModalWalet2
									name={name}
									width="117px"
									namesize={namesize}
									priceimg1={priceimg1}
								/>
							)}
						</Box>
						{/* ////////////----- */}
						<Box
							sx={{
								display: { md: 'none', xs: 'none' },
								alignItems: 'center',
								marginLeft: { md: '60px', xs: '0px' },
							}}>
							{img1 ? (
								<ModalWallet
									menuicon={
										<img
											style={{ marginLeft: '35px' }}
											width="30px"
											height="30px"
											src={img1}
											alt={'image'}
										/>
									}
								/>
							) : null}
							<IconButton
								sx={{
									color: '#FFFFFF',
									width: { lg: '92px', xs: '67' },
									height: '33px',
									textTransform: 'none',
									backgroundColor: '#5D5FEF',
									borderRadius: '6px',
									padding: '9px 17px 9px 0px',
									boxShadow:
										'0px 1px 2px rgba(0, 0, 0, 0.05)',
									fontSize: { md: '16px', xs: '12px' },
									fontWeight: '500px',
									lineHeight: '16px',
								}}>
								<ModalWallet
								// menuicon={
								//   <img
								//     src={priceimg1}
								//     alt="image"
								//   />
								// }
								/>
								<Box>
									<img
										src={walletmini}
										style={{
											width: '17px',
											height: '17px',
											marginRight: '5px',
											marginTop: '-2px',
										}}
									/>
								</Box>
								Connect Wallet
							</IconButton>
							{img1 ? (
								<ModalProfile
									menuicon={
										<img
											style={{
												borderRadius: '100px',
												marginTop: '0px',
												marginLeft: '0px',
											}}
											width="30px"
											height="30px"
											src={img4}
											alt={'image'}
										/>
									}
								/>
							) : null}
						</Box>
						<Box
							sx={{
								display: { md: 'flex', xs: 'none' },
								flexDirection: 'row',
								alignItems: 'center',
								margin: {
									md: '0px 80px 0px 74px',
									lg: '0px 80px 0px 74px',
								},
							}}>
							{nft ? (
								<ModalNft
									menuicon={<img src={nft} alt={'image'} />}
								/>
							) : null}
							{img1 ? (
								<ModalWallet
									menuicon={<img src={img1} alt={'image'} />}
								/>
							) : null}
							{img2 ? (
								<Modelnotification
									menuicon={
										<img
											src={img2}
											alt={'image'}
											style={{ marginLeft: '-10px' }}
										/>
									}
								/>
							) : null}
							{img3 ? (
								<ModalSetting
									menuicon={
										<img
											src={img3}
											alt={'image'}
											style={{ marginLeft: '-10px' }}
										/>
									}
								/>
							) : null}
							{img4 ? (
								<Box>
									<ModalProfile
										menuicon={
											<img
												src={img4}
												alt={'image'}
												style={{
													width: '43px',
													borderRadius: '100px',
													height: '43px',
													marginBottom: '0px',
													marginLeft: '0px',
												}}
											/>
										}
									/>
								</Box>
							) : null}
						</Box>
						{!isAuth ? (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								{login2 ? (
									<Link
										to="/signin"
										style={{ textDecoration: 'none' }}>
										<Box
											sx={{
												display: {
													md: 'flex',
													xs: 'flex',
												},
												margin: {
													md: '0px 20px 0px 60px',
													xs: '0px 5px 0px -5px',
													xl: '0px 30px 0px 140px',
												},
											}}>
											<IconButton
												sx={{
													'&:hover': {
														backgroundColor: '#cb9b09',
														border: "none",
														color: "white",
													},
													color: '#FFFFFF',
													backgroundColor: '#FCBF07',
													borderRadius: '6px',
													// width: "63px",
													width: 'auto',
													height: {
														lg: '44px',
														xs: '30px',
													},
													textTransform: 'none',
													padding: {
														md: '9px 17px',
														xs: '7px 11px',
													},
													boxShadow:
														'0px 1px 2px rgba(0, 0, 0, 0.05)',
													fontSize: {
														md: '16px',
														xs: '12px',
													},
													fontWeight: '500px',
													lineHeight: {
														lg: '24px',
														xs: '16px',
													},
												}}>
												{login2}
											</IconButton>
										</Box>
									</Link>
								) : null}

								{Signup2 ? (
									<Link
										to="/signup"
										style={{ textDecoration: 'none' }}>
										<Box
											sx={{
												display: {
													md: 'flex',
													xs: 'flex',
												},
												marginRight: {
													xs: '110px',
													md: '170px',
													xl: '50px',
												},
											}}>
											<IconButton
												sx={{
													'&:hover': {
														backgroundColor: '#4143c9',
														border: "none",
														color: "white",
													},
													color: '#FFFFFF',
													width: 'auto',
													// width: { lg: "92px", xs: "67px" },
													height: {
														lg: '44px',
														xs: '30px',
													},
													textTransform: 'none',
													backgroundColor: '#5D5FEF',
													borderRadius: '6px',
													padding: {
														md: '9px 17px',
														xs: '7px 11px',
													},
													boxShadow:
														'0px 1px 2px rgba(0, 0, 0, 0.05)',
													fontSize: {
														md: '16px',
														xs: '12px',
													},
													fontWeight: '500px',
													lineHeight: {
														lg: '24px',
														xs: '16px',
													},
												}}>
												{Signup2}
											</IconButton>
										</Box>
									</Link>
								) : null}
							</Box>
						) : (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								{login ? (
									<Link
										to="/signin"
										style={{ textDecoration: 'none' }}>
										<Box
											sx={{
												display: {
													md: 'none',
													xs: 'none',
												},
												margin: {
													md: '0px 24px 0px 60px',
													xs: '0px 5px 0px 5px',
													xl: '0px 30px 0px 140px',
												},
											}}>
											<IconButton
												sx={{
													color: '#FFFFFF',
													backgroundColor: '#FCBF07',
													borderRadius: '6px',
													width: '63px',
													height: {
														lg: '44px',
														xs: '30px',
													},
													textTransform: 'none',
													padding: {
														md: '9px 17px',
														xs: '7px 11px',
													},
													boxShadow:
														'0px 1px 2px rgba(0, 0, 0, 0.05)',
													fontSize: {
														md: '16px',
														xs: '12px',
													},
													fontWeight: '500px',
													lineHeight: {
														lg: '24px',
														xs: '16px',
													},
												}}>
												{login}
											</IconButton>
										</Box>
									</Link>
								) : null}

								{Signup ? (
									<Link
										to="/signup"
										style={{ textDecoration: 'none' }}>
										<Box
											sx={{
												display: {
													md: 'none',
													xs: 'none',
												},
												marginRight: {
													xs: '100px',
													md: '27px',
													xl: '50px',
												},
											}}>
											<IconButton
												sx={{
													color: '#FFFFFF',
													width: {
														lg: '92px',
														xs: '67',
													},
													height: {
														lg: '44px',
														xs: '30px',
													},
													textTransform: 'none',
													backgroundColor: '#5D5FEF',
													borderRadius: '6px',
													padding: {
														md: '9px 17px',
														xs: '7px 11px',
													},
													boxShadow:
														'0px 1px 2px rgba(0, 0, 0, 0.05)',
													fontSize: {
														md: '16px',
														xs: '12px',
													},
													fontWeight: '500px',
													lineHeight: {
														lg: '24px',
														xs: '16px',
													},
												}}>
												{Signup}
											</IconButton>
										</Box>
									</Link>
								) : null}
							</Box>
						)}
						{/* {login ? <Link to="/signin" style={{ textDecoration: "none", }}>
              <Box sx={{ display: { md: "flex", xs: "flex" }, margin: { md: "0px 24px 0px 60px", xs: "0px 5px 0px 5px", xl: "0px 30px 0px 140px" } }} >
                <IconButton
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#FCBF07",
                    borderRadius: "6px",
                    width: "63px",
                    height: { lg: "44px", xs: "30px" },
                    textTransform: "none",
                    padding: { md: "9px 17px", xs: "7px 11px" },
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    fontSize: { md: "16px", xs: "12px" },
                    fontWeight: "500px",
                    lineHeight: { lg: "24px", xs: "16px" },
                  }}
                >
                  {login}
                </IconButton>
              </Box>
            </Link> : null}

            {Signup ? <Link to="/signup" style={{ textDecoration: "none", }}>
              <Box sx={{ display: { md: "flex", xs: "flex" }, marginRight: { xs: "0px", md: "27px", xl: "50px" } }}>

                <IconButton
                  sx={{
                    color: "#FFFFFF",
                    width: { lg: "92px", xs: "67" },
                    height: { lg: "44px", xs: "30px" },
                    textTransform: "none",
                    backgroundColor: "#5D5FEF",
                    borderRadius: "6px",
                    padding: { md: "9px 17px", xs: "7px 11px" },
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    fontSize: { md: "16px", xs: "12px" },
                    fontWeight: "500px",
                    lineHeight: { lg: "24px", xs: "16px" },
                  }}
                >
                  {Signup}
                </IconButton>
              </Box>
            </Link> : null} */}

						{/* mobileView  start//////////*/}
						{/* {login2 ? <Link to="/signin" style={{ textDecoration: "none", }}>
            <Box sx={{ display: { md: "flex", xs: "none" }, margin: { md: "0px 20px 0px 100px", xs: "0px 5px 0px 5px" } }} >

              <AppButton
                title={login2}
                color={"#FFFFFF"}
                backgroundColor={"#FCBF07"}
                borderRadius={"6px"}
                width="92px"
                height="44px"
                textTransform="none"
                padding={"9px 17px"}
                boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                fontSize="16px"
                fontWeight={"500px"}
                lineHeight={"16px"}
              />
            </Box>
          </Link> : null}

          {Signup2 ? <Link to="/signup" style={{ textDecoration: "none", margin: " 0px 27px 0px 0px" }}>
            <Box sx={{ display: { md: "flex", xs: "none" }, }}>


              <AppButton
                title={Signup2}
                color={"#FFFFFF"}
                width="92px"
                height="44px"

                textTransform="none"
                backgroundColor={"#5D5FEF"}
                borderRadius={"6px"}
                padding={"7px 11px"}
                boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}
                fontSize="16px"

                fontWeight={"500px"}
                lineHeight={"16px"}
                onClick={() => navigate("signUp")}
              />
            </Box>
          </Link> : null} */}
						{/* mobileView end//////////////*/}
						{/* <Box sx={{ display: { md: "flex", xs: "none" }, alignItems: "center", justifyCntent: "center", marginLeft: { md: "0px", } }}>
              <img
                src={LD}
                alt={"image"}

              />
              <ModalCountry
                menuicon={
                  <img
                    src={AmericanFlag}
                    alt={"image"}
                    style={{ marginLeft: "23px", width: "42px", height: "42px" }}

                  />
                }
              />

            </Box> */}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CommonNav;
