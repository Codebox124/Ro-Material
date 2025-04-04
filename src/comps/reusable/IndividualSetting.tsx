import {
  FormControlLabel,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

interface IndividualSettingProps {
  value: boolean;
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  title?: string;
  hideSwitch?: boolean;
  colorPickerTitle?: string;
  sliderTitle?: string;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
  width: string;
  setWidth: (value: string | ((prevVar: string) => string)) => void;
}

export default function IndividualSetting({
  value,
  setValue,
  title,
  hideSwitch = false,
  colorPickerTitle,
  sliderTitle,
  color,
  setColor,
  width,
  setWidth,
}: IndividualSettingProps) {
  return (
    <Box
      margin={"10px"}
      padding={"10px"}
      backgroundColor={"#2E2E2E"}
      borderRadius={"12px"}
    >
      {hideSwitch ? null : (
        <>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ mb: 1, alignItems: "stretch" }}
          >
            <Grid size={{ xs: 6 }}>
              <Typography display="inline">{title}</Typography>
            </Grid>
            <Grid size={{ xs: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={value}
                    onChange={(e) => setValue(e.target.checked)}
                  />
                }
                label={""}
              />
            </Grid>
            <Grid size={{ xs: 3 }}>
              <TextField
                label={colorPickerTitle ? colorPickerTitle : "Color"}
                type="color"
                defaultValue={color}
                onChange={(e) => setColor(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}
      <Typography gutterBottom>
        {sliderTitle ? sliderTitle : "Width"}
      </Typography>
      <Slider
        value={parseFloat(width)}
        onChange={(_, value) => setWidth(value.toString())}
        step={0.1}
        min={0.1}
        max={5}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
