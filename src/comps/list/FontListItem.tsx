import { MenuItem, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  fontSize: number;
  setFontSize: (value: number | ((prevVar: number) => number)) => void;
  font: string;
  setFont: (value: string | ((prevVar: string) => string)) => void;
}

export default function FontListItem({
  fontSize,
  setFontSize,
  font,
  setFont,
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile)
    return (
      <>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >

          <Typography>Font</Typography>
          <Stack direction={"row"} gap={1}>
            <TextField
              label=""
              type="number"
              defaultValue={fontSize}
              fullWidth
              variant="standard"
              style={{ width: "100px" }}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
            
            <TextField
              select
              fullWidth
              defaultValue={font}
              onChange={(e) => setFont(e.target.value)}
              variant="standard"
              sx={{
                "& .MuiInputBase-root": {
                  color: "white",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "1px solid white",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid white",
                },
              }}
              MenuProps={{
                disablePortal: false,
                PaperProps: {
                  style: {
                    zIndex: 2000,
                  },
                },
              }}
            >

              <MenuItem value="Arial Unicode MS">Arial Unicode MS</MenuItem>
              <MenuItem value="Alegreya">Alegreya</MenuItem>
              <MenuItem value="Alegreya SC">Alegreya SC</MenuItem>
              <MenuItem value="Asap">Asap</MenuItem>
              <MenuItem value="Barlow">Barlow</MenuItem>
              <MenuItem value="DIN Pro">DIN Pro</MenuItem>
              <MenuItem value="EB Garamond">EB Garamond</MenuItem>
              <MenuItem value="Faustina">Faustina</MenuItem>
              <MenuItem value="Frank Ruhl Libre">Frank Ruhl Libre</MenuItem>
              <MenuItem value="Heebo">Heebo</MenuItem>
              <MenuItem value="Inter">Inter</MenuItem>
              <MenuItem value="Lato">Lato</MenuItem>
              <MenuItem value="League Mono">League Mono</MenuItem>
              <MenuItem value="Montserrat">Montserrat</MenuItem>
              <MenuItem value="Manrope">Manrope</MenuItem>
              <MenuItem value="Noto Sans CJK JP">Noto Sans CJK JP</MenuItem>
              <MenuItem value="Open Sans">Open Sans</MenuItem>
              <MenuItem value="Poppins">Poppins</MenuItem>
              <MenuItem value="Raleway">Raleway</MenuItem>
              <MenuItem value="Roboto">Roboto</MenuItem>
              <MenuItem value="Roboto Mono">Roboto Mono</MenuItem>
              <MenuItem value="Rubik">Rubik</MenuItem>
              <MenuItem value="Source Code Pro">Source Code Pro</MenuItem>
              <MenuItem value="Source Sans Pro">Source Sans Pro</MenuItem>
              <MenuItem value="Spectral">Spectral</MenuItem>
              <MenuItem value="Ubuntu">Ubuntu</MenuItem>
            </TextField>
          </Stack>
        </Stack>
      </>
    );
  else
    return (
      <>
        <Grid
          container
          alignItems={"center"}
          spacing={2}
          style={{ marginLeft: "15px", marginRight: "15px", height: "56px" }}
        >
          <Grid size={{ xs: 4 }}>
            <ListItemText primary={"Font"} />
          </Grid>
          <Grid size={{ xs: 2 }}>
          <TextField
  label=""
  type="number"
  variant="standard"
  defaultValue={fontSize}
  fullWidth
  onChange={(e) => setFontSize(Number(e.target.value))}
  InputProps={{
    disableUnderline: false,
    inputProps: { style: { textAlign: 'center' } },
  }}
  sx={{
    '& .MuiInput-root': {
      borderBottom: '1px solid grey',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid grey',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '1px solid grey',
    },
    '& input': {
      padding: '4px 0',
    },
  }}
/>


          </Grid>
          <Grid size={{ xs: 6 }}>
          <TextField
  label=""
  select
  fullWidth
  defaultValue={font}
  onChange={(e) => setFont(e.target.value)}
  MenuProps={{
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    PaperProps: {
      style: {
        zIndex: 1400,
      },
    },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove the surrounding border
      },
      '&:hover fieldset': {
        border: 'none', // Remove hover border
      },
      '&.Mui-focused fieldset': {
        border: 'none', // Remove focused border
      },
      borderBottom: '2px solid grey', // Set the border thickness to 2px, same as number input
      borderRadius: 0, // Remove border radius to match the other input
    },
    '& .MuiSelect-select': {
      textAlign: 'center', // Center the text
      padding: '4px 0', // Match the padding of the number input
    },
  }}
>
  <MenuItem value="Arial Unicode MS">Arial Unicode MS</MenuItem>
  <MenuItem value="Alegreya">Alegreya</MenuItem>
  <MenuItem value="Alegreya SC">Alegreya SC</MenuItem>
  <MenuItem value="Asap">Asap</MenuItem>
  <MenuItem value="Barlow">Barlow</MenuItem>
  <MenuItem value="DIN Pro">DIN Pro</MenuItem>
  <MenuItem value="EB Garamond">EB Garamond</MenuItem>
  <MenuItem value="Faustina">Faustina</MenuItem>
  <MenuItem value="Frank Ruhl Libre">Frank Ruhl Libre</MenuItem>
  <MenuItem value="Heebo">Heebo</MenuItem>
  <MenuItem value="Inter">Inter</MenuItem>
  <MenuItem value="Lato">Lato</MenuItem>
  <MenuItem value="League Mono">League Mono</MenuItem>
  <MenuItem value="Montserrat">Montserrat</MenuItem>
  <MenuItem value="Manrope">Manrope</MenuItem>
  <MenuItem value="Noto Sans CJK JP">Noto Sans CJK JP</MenuItem>
  <MenuItem value="Open Sans">Open Sans</MenuItem>
  <MenuItem value="Poppins">Poppins</MenuItem>
  <MenuItem value="Raleway">Raleway</MenuItem>
  <MenuItem value="Roboto">Roboto</MenuItem>
  <MenuItem value="Roboto Mono">Roboto Mono</MenuItem>
  <MenuItem value="Rubik">Rubik</MenuItem>
  <MenuItem value="Source Code Pro">Source Code Pro</MenuItem>
  <MenuItem value="Source Sans Pro">Source Sans Pro</MenuItem>
  <MenuItem value="Spectral">Spectral</MenuItem>
  <MenuItem value="Ubuntu">Ubuntu</MenuItem>
</TextField>




          </Grid>
        </Grid>
      </>
    );
}