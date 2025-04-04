import {createTheme} from "@mui/material";

export const DarkTheme = createTheme({

  colorSchemes: {
    dark: true,
  },
  components: {
     MuiInput: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
      }
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          border: '2px solid red',
          background: 'red',
          borderBottom: 'none',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          // border: '2px solid red',
          // background: 'red',
          // borderBottom: 'none',
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {

          background: 'linear-gradient(117deg, #3f424d 0%, #323337 60%)',
          boxShadow: 'inset #FFF3 0px 1px 0px 0px,#000A 0px 1px 21px -5px',

          borderBottom: 'none',
          borderRadius: '10px',
          '&:before': {
            borderBottom: 'none',
            display:'none',
          },


          '&.Mui-focused': {

          },
          '&.Mui-focused:after': {
            display: 'none',
          },
        },
      },
    },


    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#1976d2",
        },
      },
    },

  },
});
