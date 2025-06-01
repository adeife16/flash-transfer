import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../assests/Images/close.png";
import "../../font.css/index.css"

import A1 from "../../assests/Images/nft1.png";
import A2 from "../../assests/Images/nft2.png";
import A3 from "../../assests/Images/nft3.png";
import A4 from "../../assests/Images/nft4.png";
import A5 from "../../assests/Images/W5.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import UseNFTIDs from '../../hooks/useNFTIDs';
import NFTItem from "./nftitem";
export interface AppProps {
  menuicon?: any;

}
export default function ModalWallet({ menuicon }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [curPage, setCurPage] = React.useState(1);
  const [modalOpen, setModalOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var ids = UseNFTIDs();
  console.log("ids:", ids)
  const curIds = React.useMemo(() => {
    if (ids.length) {
      let firstIndex = (curPage - 1) * 10;
      return ids.slice(firstIndex, firstIndex + 10);
    } else { return [] }
  }, [curPage, ids])
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
              cursor: "pointer",
              position: "absolute",
              height: "378px",
              top: "273px",
              left: "66%",
              transform: "translate(-50%, -50%)",
              width: { md: "412px", xs: "412px" },
              bgcolor: "background.paper",
              boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.15) ",
              padding: "0px 19px",

              borderRadius: "14px",
            }}
          >
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
                textAlign: "center",
                padding: "0px 0px 16px  0px",
                fontWeight: "800  !important",
                fontSize: "24px  !important",
                lineHeight: "32px  !important",
                fontFamily: "Inter !important",
              }}>
                NFT
              </Typography>
              <Box sx={{ overflow: "auto", maxHeight: "250px" }}>
                {curIds.map((i: any) => {
                  return (
                    <NFTItem tokenId={i} />
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
