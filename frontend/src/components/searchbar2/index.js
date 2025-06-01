import {
  Divider,
  TextField,
  IconButton,
  Grid,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
// import React, { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";

// import mu1 from "../../assests/Images/mu1.svg";
// import mu2 from "../../assests/Images/mu2.svg";
// import mu3 from "../../assests/Images/mu3.svg";
// import mu4 from "../../assests/Images/mu4.svg";
// import mu5 from "../../assests/Images/mu5.svg";
// import mu6 from "../../assests/Images/mu6.svg";
// import mu7 from "../../assests/Images/mu7.svg";
// import mu8 from "../../assests/Images/mu8.svg";
// import mu9 from "../../assests/Images/mu9.svg";
// import mu10 from "../../assests/Images/mu10.svg";
// import mu11 from "../../assests/Images/mu11.svg";

// import m1 from "../../assests/Images/m1.svg";
// import m2 from "../../assests/Images/m2.svg";
// import m3 from "../../assests/Images/m3.svg";
// import m4 from "../../assests/Images/m4.svg";
// import m5 from "../../assests/Images/m5.svg";
// import m6 from "../../assests/Images/m6.svg";
// import m7 from "../../assests/Images/m7.svg";
// import m8 from "../../assests/Images/m8.svg";
// import m9 from "../../assests/Images/m9.svg";
// import m10 from "../../assests/Images/m10.svg";
// import m11 from "../../assests/Images/m11.svg";
// import m12 from "../../assests/Images/m12.svg";
// import m13 from "../../assests/Images/m13.svg";
// import m14 from "../../assests/Images/m14.svg";
// import m15 from "../../assests/Images/m15.svg";
// import m16 from "../../assests/Images/m16.svg";
// import m17 from "../../assests/Images/m17.svg";
// import m18 from "../../assests/Images/m18.svg";
// import m19 from "../../assests/Images/m19.svg";
// import m20 from "../../assests/Images/m20.svg";
// import m21 from "../../assests/Images/m21.svg";
// import m22 from "../../assests/Images/m22.svg";
// import m23 from "../../assests/Images/m23.svg";
// import m24 from "../../assests/Images/m24.svg";
// import m25 from "../../assests/Images/m25.svg";
// import m26 from "../../assests/Images/m26.svg";
// import m27 from "../../assests/Images/m27.svg";
// import m28 from "../../assests/Images/m28.svg";
// import m29 from "../../assests/Images/m29.svg";
// import m30 from "../../assests/Images/m30.svg";
// import m31 from "../../assests/Images/m31.svg";
// import m32 from "../../assests/Images/m32.svg";
// import m33 from "../../assests/Images/m33.svg";

// import m34 from "../../assests/Images/m34.svg";
// import m35 from "../../assests/Images/m35.svg";
// import m36 from "../../assests/Images/m36.svg";
// import m37 from "../../assests/Images/m37.svg";
// import m38 from "../../assests/Images/m38.svg";
// import m39 from "../../assests/Images/m39.svg";
// import m40 from "../../assests/Images/m40.svg";
// import m41 from "../../assests/Images/m41.svg";
// import m42 from "../../assests/Images/m42.svg";
// import m43 from "../../assests/Images/m43.svg";
// import m44 from "../../assests/Images/m44.svg";
// import m45 from "../../assests/Images/m45.svg";
// import m46 from "../../assests/Images/m46.svg";
// import m47 from "../../assests/Images/m47.svg";
// import m48 from "../../assests/Images/m48.svg";
// import m49 from "../../assests/Images/m49.svg";
// import m50 from "../../assests/Images/m50.svg";
// import m51 from "../../assests/Images/m51.svg";
// import m52 from "../../assests/Images/m52.svg";
// import m53 from "../../assests/Images/m53.svg";
// import m54 from "../../assests/Images/m54.svg";
// import m55 from "../../assests/Images/m55.svg";
// import m56 from "../../assests/Images/m56.svg";
// import m57 from "../../assests/Images/m57.svg";
// import m58 from "../../assests/Images/m58.svg";
// import m59 from "../../assests/Images/m59.svg";
// import m60 from "../../assests/Images/m60.svg";
// import m61 from "../../assests/Images/m61.svg";
// import m62 from "../../assests/Images/m62.svg";
// import m63 from "../../assests/Images/m63.svg";
// import m64 from "../../assests/Images/m64.svg";
// import m65 from "../../assests/Images/m65.svg";
// import m66 from "../../assests/Images/m66.svg";
// import m67 from "../../assests/Images/m67.svg";
// import m68 from "../../assests/Images/m68.svg";
// import m69 from "../../assests/Images/m69.svg";
// const Index = () => {
//   const [filterdData, setfilterdData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   // const [value, setValue] = useState("");

//   // const onChange = (event) => {
//   //   setValue(event.target.value);
//   // };

//   // const onSearch = (searchTerm) => {
//   //   setValue(searchTerm);
//   //   // our api to fetch the search result
//   //   console.log("search ", searchTerm);
//   // };

//   const handleFilter = (e) => {
//     const searchWorld = e.target.value;
//     setWordEntered(searchWorld);

//     const newData = menu1.filter((values) => {
//       return values.title.toLowerCase().includes(searchWorld.toLowerCase());
//     });
//     console.log("event========", newData);

//     if (searchWorld === "") {
//       setfilterdData([]);
//     } else {
//       setfilterdData(newData);
//     }
//     // setfilterdData(newData);
//   };
//   const menu1 = [
//     {
//       title: "name1",
//       //   logo: BUSDlogo,
//     },
//     {
//       title: "arif",
//       //   logo: BUSDlogo,
//     },
//     {
//       title: "name2",
//       //   logo: BUSDlogo,
//     },
//     {
//       title: "name3",
//       //   logo: BUSDlogo,
//     },

//     {
//       title: "sarif",
//       //   logo: BUSDlogo,
//     },
//     {
//       title: "kanez",
//       //   logo: BUSDlogo,
//     },
//   ];
//   const clearInput = () => {
//     setfilterdData([]);
//     setWordEntered("");
//   };
//   const [value, setValue] = React.useState(options[0]);
//   const options = ['Option 1', 'Option 2'];

//   const [inputValue, setInputValue] = React.useState('');

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column" }}>
//       <Box sx={{ display: "flex", flexDirection: "row" }}>
//         <Autocomplete
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           inputValue={inputValue}
//           onInputChange={(event, newInputValue) => {
//             setInputValue(newInputValue);
//           }}
//           id="controllable-states-demo"
//           // options={options}
//           sx={{ width: 300 }}
//           renderInput={(params) => (
//             <TextField {...params} label="Controllable" />
//           )}
//         />
//         {/* <TextField
//           sx={{
//             backgroundColor: "white",
//             textAlign: "center",
//           }}
//           placeholder="france (EUR - €)"
//           variant="standard"
//           fullWidth
//           InputProps={{
//             disableUnderline: true,
//           }}
//           type="text"
//           // value={value}

//           onChange={handleFilter}
//         /> */}
//         <div>
//           {filterdData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </Box>
//       {/* <Box> */}

//       <Box
//         sx={
//           {
//             //   position: "absolute",
//             //   marginTop: "60px",
//             //   height: "200px",
//             //   width: "80px",
//             //   overflow: "auto",
//           }
//         }
//       >
//         {/* {menu1.filter((item) => {
//             const searchTerm = value.toLowerCase();
//             const name = item.name.toLowerCase();

//             return (
//               searchTerm &&
//               name.startsWith(searchTerm) &&
//               name !== searchTerm
//             );
//           })
//           .slice(0, 10)
//           .map((item) => (
//             <div
//               onClick={() => onSearch(item.name)}

//               key={item.name}
//             >
//               {item.name}
//             </div>
//           ))} */}
//         {filterdData.length != 0 && (
//           <Box
//             sx={{
//               height: "200px",
//               width: "80px",
//               overflow: "auto",
//               backgroundColor: "white",
//             }}
//           >
//             {menu1.slice(0, 5).map((i, key) => {
//               return (
//                 <Box>
//                   <Typography>{i.title} </Typography>
//                 </Box>
//               );
//             })}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Index;

import * as React from "react";
import BUSDlogo from "../../assests/Logo/BUSDlogo.svg";

// import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const Index = () => {
  const menu1 = [
    {
      title: "Taïwan - TWD",
      logo: BUSDlogo,
    },

    {
      title: "Lithuania - LTL",
      //   logo: BUSDlogo,
    },
    {
      title: "Togo - XOF ",
      //   logo: BUSDlogo,
    },

    {
      title: "Sudan - SDG      ",
      //   logo: BUSDlogo,
    },
    {
      title: " Benin - XOF      ",
      //   logo: BUSDlogo,
    },
    {
      title: " Ghana - GHS      ",
      //   logo: BUSDlogo,
    },
    {
      title: " Tchad - XOF      ",
      //   logo: BUSDlogo,
    },
    {
      title: " Guinea - GNF      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Belarus - BYN      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Niger  - XOF      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Greece - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Burkina Faso - XOF      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Salvador - SVC      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Liechtenstein  - CHF      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Georgia - GEL      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Estonia - EEK      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Malta - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Tanzania - TZS      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Kenya - KES      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Slovenia  - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Senegal  - XOF      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Somalia  - SOS      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Zimbabwe  - ZWD      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Romania  - RON      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Sweden  - SEK  ",
      //   logo: BUSDlogo,
    },
    {
      title: "Finland  - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Denmark  - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Belgium  - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Netherlands  - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Ireland  - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Germany - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Pakistan - PKR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "India - INR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Honk Kong - HKD      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Brazil - BRL      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Canada - CAD      ",
      //   logo: BUSDlogo,
    },
    {
      title: "France - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Argentina - ARS      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Colombia - COP      ",
      //   logo: BUSDlogo,
    },
    {
      title: "USA - USD      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Austria - EUR      ",
      //   logo: BUSDlogo,
    },
    {
      title: "UAE - AED      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Switzerland - CHF      ",
      //   logo: BUSDlogo,
    },
    {
      title: "Mexico - MXN      ",
      //   logo: BUSDlogo,
    },
  ];

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={menu1.map((i) => {
          return i.title;
        })}
        renderInput={(params) => (
          <TextField
            sx={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "0px 10px",
              fontSize: "20px",
            }}
            placeholder="   Search Country"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...params}
          />
        )}
      />
    </Stack>
  );
};

export default Index;
