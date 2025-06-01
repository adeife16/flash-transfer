import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import  {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { verification } from '../../Services/auth'
import { Link } from "react-router-dom";


const Index = () => {

  const [loader, setLoader] = useState(false);
 
  let { userId } = useParams<'userId'>()
  const id = userId

  
  useEffect(()=>{

    const data = {
      userId: id,
    }


  setLoader(true)
  debugger
  verification(data).then(res => {
    if(res.data){
      setLoader(false)
    }
  })


  },[])

  
  return (
    <Grid container>


      <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100vh" }}>
       
      {loader === true ?
              (
                <div className="loader" >
                  <svg className="circular" viewBox="25 25 50 50"
                  >
                    <circle
                      className="path"
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              )

              :  <Box>

              <Typography sx={{ fontSize: "30px", }}>
                You  are successfully Verified
              </Typography>
    
    
            </Box>
            }
       
       <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              backgroundColor: "#FCBF07",
              color: "#FFFFFF",
              fontSize: "20px",
              textTransform: "none",
              fontWeight: "500",
              lineHeight: "30px",
              height: "65px",
              margin: "40px 0px",
              borderRadius: "6px",
              letterSpacing: "0.02em",
              padding: "18px 170px",


            }}
            
    
          >
           Go To Login
          </Button>

          </Link>
      </Grid>


      </Grid >


  )
}
export default Index;     