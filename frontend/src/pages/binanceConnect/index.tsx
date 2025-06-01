import { Grid, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import { useStyles } from '../../Styles';
import '../../font.css/index.css';
import BinanceComp from './binance';
const Notifications = () => {
	const classes = useStyles();
	return (
		<>
			<Layout>
				<Grid
					container
					sx={{
						display: 'flex',
						background: { md: '#F7FDFF ', xs: 'white' },
						minHeight: '100vh',
						justifyContent: 'center',
					}}>
					<Grid
						item
						xs={11}
						md={11}
						sx={{
							display: 'flex',
							minHeight: '100vh',
							flexDirection: 'column',
							mt: { md: '71px', xs: '50px' },
							justifyContent: 'center',
							mb: '20px',
						}}>
						{/* <Typography className={classes.setting_text}>
							Binance connect x Flash
						</Typography> */}
						<BinanceComp
							src={
								'https://www.binancecnt.com/en/pre-connect?merchantCode=flash_tech'
							}
						/>
					</Grid>
				</Grid>
			</Layout>
		</>
	);
};

export default Notifications;
