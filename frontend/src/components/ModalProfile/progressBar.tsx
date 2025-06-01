import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";
import P1 from "../../assests/grade/Grade1.png";
import P2 from "../../assests/grade/Grade2.png";
import P3 from "../../assests/grade/Grade3.png";
import P4 from "../../assests/grade/Grade4.png";
import P5 from "../../assests/grade/Grade5.png";
import P6 from "../../assests/grade/Grade6.png";
import P7 from "../../assests/grade/Grade7.png";
import P8 from "../../assests/grade/Grade8.png";
import P9 from "../../assests/grade/Grade9.png";
import P10 from "../../assests/grade/Grade10.png";
import { styled } from '@mui/material/styles';
import { useAuth } from '../../Context/globaltContext';
import { useCallback, useMemo } from 'react';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width:150,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
const LevelBar = ()=>{
    const ImgData = [P1,P2,P3,P4,P5,P6,P7,P8,P9,P10];
    const {level,levelProgress}:any = useAuth();
    const selImg  = useMemo(()=>{
        if(!level)return P1;
        else return ImgData[level-1];
    },[level])

    return(
        <div style={{display:"flex",alignItems:"center",marginTop:"22px"}}>
           
           <img width={40} height={40} src={selImg} />
            <BorderLinearProgress variant="determinate" value={levelProgress?levelProgress:0} />
            
        </div>
        
    )
}
export default LevelBar;