import {FormControlLabel, Switch, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

interface MapLayerSettingProps {
  valueSatelliteLayer: boolean;
  setValueSatelliteLayer: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  valueSatelliteContours: boolean;
  setValueSatelliteContours: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}

export default function MapLayerSetting({
  valueSatelliteLayer,
  setValueSatelliteLayer,
  valueSatelliteContours,
  setValueSatelliteContours,
}: MapLayerSettingProps) {
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
        columnSpacing={{ xs: 1 }}
        sx={{ mb: 1, alignItems: "stretch" }}
      >
        <Grid size={{ xs: 6 }}>
          <Typography display="inline" marginRight={"5px"}>{"Satellite Layer"}</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={valueSatelliteLayer}
                onChange={(e) => setValueSatelliteLayer(e.target.checked)}
              />
            }
            label=""
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography display="inline" marginRight={"5px"}>{"Show Contours"}</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={valueSatelliteContours}
                onChange={(e) => setValueSatelliteContours(e.target.checked)}
              />
            }
            label=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
