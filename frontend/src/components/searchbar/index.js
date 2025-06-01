import {
  Divider,
  TextField,
  IconButton,
  Grid,
  Typography,
  MenuItem,
  Select,
  Checkbox,
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
//   logo: BUSDlogo,
//     },
//     {
//       title: "arif",
//   logo: BUSDlogo,
//     },
//     {
//       title: "name2",
//   logo: BUSDlogo,
//     },
//     {
//       title: "name3",
//   logo: BUSDlogo,
//     },

//     {
//       title: "sarif",
//   logo: BUSDlogo,
//     },
//     {
//       title: "kanez",
//   logo: BUSDlogo,
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

// import BUSDlogo from "../../assests/Logo/BUSDlogo.svg";
// import React, { createContext, useState } from "react";

// // import TextField from '@mui/material/TextField';
// import Stack from "@mui/material/Stack";
// import Autocomplete from "@mui/material/Autocomplete";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
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

// // const context = createContext()

// const Index = ({ setCValue }) => {
//   const [value, setValue] = useState("");
//   const menu1 = [
//     {
//       title: "FLASH",
//       logo: mu1,
//     },

//     {
//       title: "BNB",
//       logo: mu2,
//     },
//     {
//       title: "MATIC",
//       logo: mu3,
//     },

//     {
//       title: "USDT  ",
//       logo: mu4,
//     },
//     {
//       title: " DAI",
//       logo: mu5,
//     },
//     {
//       title: " ETHEREUM",
//       logo: mu6,
//     },

//     {
//       title: "  PAX GOLD",
//       logo: mu7,
//     },
//     {
//       title: "BITCOIN",
//       logo: mu8,
//     },
//     {
//       title: "LUNC",
//       logo: mu9,
//     },
//     {
//       title: "SHIBA INU",
//       logo: mu10,
//     },
//     {
//       title: "DOGECOIN",
//       logo: mu11,
//     },
//   ];
//   const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
//   const checkedIcon = <CheckBoxIcon fontSize="small" />;

//   const data = value[0]
//   console.log("data.....", data);
//   return (
//     <Stack spacing={2} sx={{ width: 300 }}>
//       {/* <div>{`inputValue: '${data.title}'`}</div> */}
//       <Autocomplete
//         // value={value}
//         multiple
//         id="free-solo-demo"
//         freeSolo
//         onChange={(event, newInputValue) => {
//           setValue(newInputValue);
//         }}
//         getOptionLabel={(option) => option.title}
//         disableCloseOnSelect

//         renderOption={(props, option) => (
//           <div {...props}>
//             {/* <Checkbox
//               icon={icon}
//               checkedIcon={checkedIcon}
//               style={{ marginRight: 8 }}

//             /> */}
//             <Box>
//               <img src={option.logo} style={{ marginRight: "10px" }} />
//             </Box>

//             {option.title}
//           </div>
//         )}
//         options={menu1}
//         renderInput={(params) => (
//           <TextField
//             sx={{
//               backgroundColor: "white",
//               textAlign: "center",
//               padding: "0px 10px",
//               fontSize: "20px",
//             }}
//             placeholder="   Search Country"
//             variant="standard"
//             InputProps={{ disableUnderline: true }}
//             {...params}

//             // value={value}
//           />
//         )}
//       />
//     </Stack>
//   );
// };

// export default Index;

import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  // width: 300px;
  // border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  // background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    // border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    // box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = () => [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

const Index = () => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [top100Films()[1]],
    multiple: true,
    options: top100Films(),
    getOptionLabel: (option) => option.title,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        {/* <Label {...getInputLabelProps()}>Customized hook</Label> */}
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};


export default Index;

