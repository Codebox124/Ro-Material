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
              style={{width: "100px"}}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
            <TextField
              label=""
              select
              fullWidth
              defaultValue={font}
              onChange={(e) => setFont(e.target.value)}
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
              defaultValue={fontSize}
              fullWidth
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label=""
              select
              fullWidth
              defaultValue={font}
              onChange={(e) => setFont(e.target.value)}
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
