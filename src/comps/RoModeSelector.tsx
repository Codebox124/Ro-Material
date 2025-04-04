import {useState} from "react";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import blue from "@mui/material/colors/blue";
import grey from "@mui/material/colors/grey";
import ListSubheader from '@mui/material/ListSubheader';

const ModeSelectorTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: grey[900],
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white',
          },
        }
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: '12px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: blue[800],
          boxShadow: 'inset #FFF3 0px 1px 0px 0px,#000A 0px 1px 21px -5px',
          borderRadius: '10px',
          color: 'white',
          '&.Mui-focused': {
            backgroundColor: blue[700],
          },
          '&:hover': {
            backgroundColor: blue[600],
          },
          '&:active': {
            backgroundColor: blue[900],
            transition: 'background-color 0s',
          },
          '&.Mui-focused:after': {
            display: 'none',
          },
          '&:before': {
            borderBottom: 'none',
            display:'none',
          },
        },
      },
    },
  },
});

function RoModeSelector() {
  const [mode, setMode] = useState('single-site-radar');


  return (
    <ThemeProvider theme={ModeSelectorTheme}>

      <FormControl variant="filled" fullWidth>
        <InputLabel id="mode-select-label">Weather Data</InputLabel>
        <Select
          labelId="mode-select-label"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value);
          }}
          variant={'filled'}
        >
          <ListSubheader>Radar</ListSubheader>
          <MenuItem value={'single-site-radar'}>Single Site Radar</MenuItem>
          <MenuItem value={'national-radar'}>National Radar (CONUS)</MenuItem>
          <ListSubheader>Satellite</ListSubheader>
          <MenuItem value={'global'}>Global</MenuItem>
          <MenuItem value={'regional'}>Regional</MenuItem>
          <MenuItem value={'storm-based'}>Storm-Based</MenuItem>
          <ListSubheader>Models</ListSubheader>
          <MenuItem value={'convection-allowing'}>Convection-Allowing</MenuItem>
          <MenuItem value={'regional'}>Regional</MenuItem>
          <MenuItem value={'global'}>Global</MenuItem>
          <MenuItem value={'tropical'}>Tropical</MenuItem>
          <ListSubheader>
            Forecasts
          </ListSubheader>
          <MenuItem value={'ndfd'}>NDFD</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
export default RoModeSelector;
