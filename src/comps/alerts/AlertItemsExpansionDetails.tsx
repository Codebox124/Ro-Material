import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AlertItemsExpansionDetails() {
  const [sound, setSound] = React.useState("Chime");

  const handleChange = (event: SelectChangeEvent) => {
    setSound(event.target.value as string);
  };

  return (
    <CardContent style={{ margin: "10px" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 1, alignItems: "stretch" }}
      >
        <Grid size={{ xs: 10 }}>
          <Typography sx={{ marginBottom: 2 }}>Polygon Color</Typography>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <TextField label="" type="color" defaultValue="#000000" fullWidth />
        </Grid>
      </Grid>
      <Typography sx={{ marginBottom: 2 }}>Polygon Fill Opacity</Typography>
      <Box paddingLeft={"30px"} paddingRight={"30px"}>
        <Slider
          value={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
      <Typography sx={{ marginBottom: 2 }}>Animation Speed</Typography>
      <Box paddingLeft={"30px"} paddingRight={"30px"}>
        <Slider
          value={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
      <Typography sx={{ marginBottom: 2 }}>Dash Length</Typography>
      <Box paddingLeft={"30px"} paddingRight={"30px"}>
        <Slider
          value={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
      <Typography sx={{ marginBottom: 2 }}>Gap Length</Typography>
      <Box paddingLeft={"30px"} paddingRight={"30px"}>
        <Slider
          value={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
      <Grid
        container
        rowSpacing={2}
        direction="row"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          mb: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 8 }}>
          <Typography>Sound</Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControl fullWidth>
            <Select
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sound}
              label=""
              onChange={handleChange}
            >
              <MenuItem value={"Chime"}>Chime</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </CardContent>
  );
}
