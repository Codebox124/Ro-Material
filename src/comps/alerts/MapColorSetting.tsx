import { Slider, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

interface MapColorSettingProps {
  colorPickerTitle?: string;
  sliderTitle?: string;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
  opacity: string;
  setOpacity: (value: string | ((prevVar: string) => string)) => void;
}

export default function MapColorSetting({
  colorPickerTitle,
  sliderTitle,
  color,
  setColor,
  opacity,
  setOpacity,
}: MapColorSettingProps) {
  return (
    <Box margin={"10px"} borderRadius={"12px"}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 1, alignItems: "stretch" }}
      >
        <Grid size={{ xs: 12 }}>
          <Typography gutterBottom>
            {colorPickerTitle ? colorPickerTitle : "Color"}
          </Typography>
          <TextField
            label={""}
            type="color"
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography gutterBottom>
        {sliderTitle ? sliderTitle : "Width"}
      </Typography>
      <Slider
        value={parseFloat(opacity)}
        onChange={(_, value) => setOpacity(value.toString())}
        step={0.05}
        min={0.0}
        max={1.0}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
