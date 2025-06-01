import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import UseNFTDetailByIDFromOpenSea from "../../hooks/useNFTDetailByIDFromOpenSea";
import { useMemo } from 'react';
const NFTItem:React.FC<{tokenId:number}> = ({tokenId})=>{
    const metadata = UseNFTDetailByIDFromOpenSea(tokenId);
    const generateUrl = (image:string):string=>{
        if(image!==""){
            const partUrl = image.slice(7);
            const url = "https://ipfs.io/ipfs/"+partUrl
            return url;
        }
        return ""
    }
    const imageUrl = useMemo(()=>{
        if(metadata && metadata.image!==""){
            return generateUrl(metadata.image);
        }else return "";
    },[metadata])
    console.log("imageurl",imageUrl);
    return (
        <Box
        sx={{
          borderTop: "0.5px solid #656568",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: "6px 0px",
        }}
      >
        <img width={30} height={40}   src={imageUrl}/>
        <Typography
          sx={{
            padding: "0px 5px",
            fontWeight: "400  !important",
            fontSize: "16px  !important",
            lineHeight: "24px  !important",
            fontFamily: "Inter !important",
          }}
        >
          {metadata?.name}
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
    )
}
export default NFTItem;