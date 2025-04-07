import { MenuItem, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";
import Select from 'react-select';

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
  const fontOptions = [
    "Arial Unicode MS", "Alegreya", "Alegreya SC", "Asap", "Barlow",
    "DIN Pro", "EB Garamond", "Faustina", "Frank Ruhl Libre", "Heebo",
    "Inter", "Lato", "League Mono", "Montserrat", "Manrope",
    "Noto Sans CJK JP", "Open Sans", "Poppins", "Raleway", "Roboto",
    "Roboto Mono", "Rubik", "Source Code Pro", "Source Sans Pro",
    "Spectral", "Ubuntu"
  ].map((font) => ({
    value: font,
    label: font,
  }));

  if (isMobile)
    return (
      <>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >

          <Typography>Font</Typography>
          <Stack direction={"row"} gap={2}>
            <TextField
              label=""
              type="number"
              defaultValue={fontSize}
              fullWidth
              variant="standard"
              style={{ width: "100px" }}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />

            <Select
              value={fontOptions.find((f) => f.value === font)}
              onChange={(selected) => setFont(selected?.value ?? '')}
              options={fontOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  color: 'white',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderRadius: 0,
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  minHeight: '32px',
                  cursor: 'pointer',
                  padding: '0',
                  '&:hover': {
                    borderColor: 'white'
                  }
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  padding: '0',
                  paddingRight: '8px'
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'white',
                  margin: '0',
                  fontSize: '16px'
                }),
                menu: (provided) => ({
                  ...provided,
                  zIndex: 2000,
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  marginTop: '4px'
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: 'white',
                  backgroundColor: state.isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  padding: '8px 12px',
                  cursor: 'pointer'
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: 'white',
                  padding: '0 0 0 4px',
                  '&:hover': {
                    color: 'white'
                  }
                }),
                indicatorSeparator: () => ({
                  display: 'none'
                }),
                container: (provided) => ({
                  ...provided,
                  width: '100%'
                })
              }}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          
          
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
              select
              fullWidth
              value={font}
              onChange={(e) => setFont(e.target.value)}
              variant="standard"
              MenuProps={{
                PaperProps: {
                  style: {
                    zIndex: 1500,
                  },
                },
                disablePortal: false,
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