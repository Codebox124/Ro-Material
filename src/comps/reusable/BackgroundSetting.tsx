import { Slider, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

interface BackgroundSettingProps {
  colorPickerTitle?: string;
  sliderTitle?: string;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
  opacity: string;
  setOpacity: (value: string | ((prevVar: string) => string)) => void;
}

export default function BackgroundSetting({
  colorPickerTitle,
  sliderTitle,
  color,
  setColor,
  opacity,
  setOpacity,
}: BackgroundSettingProps) {
  return (
    <Box
      margin={"10px"}
      padding={"10px"}
      backgroundColor={"#2E2E2E"}
      borderRadius={"12px"}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 1, alignItems: "stretch" }}
      >
        <Grid size={{ xs: 12 }}>
          <TextField
            label={colorPickerTitle ? colorPickerTitle : "Color"}
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
        defaultValue={parseFloat(opacity)}
        onChange={(_, value) => setOpacity(value.toString())}
        step={0.05}
        min={0.0}
        max={1.0}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
