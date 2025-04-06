import { FormControl, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import Box from "@mui/material/Box";

interface MapProjectionSettingProps {
  projection: string;
  setProjection: (value: string | ((prevVar: string) => string)) => void;
}

export default function MapProjectionSetting({
  projection,
  setProjection,
}: MapProjectionSettingProps) {
  return (
    <Box margin={"10px"} padding={"10px"} borderRadius={"12px"}>
      <FormControl fullWidth>
        <span style={{fontSize: "17px", marginBottom: "10px", color:"grey"}} id="projection-label">Map Projection</span>
        <NativeSelect
        // labelId="projection-label"
          id="projection"
          value={projection}
          onChange={(e) => setProjection(e.target.value as string)}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option  value="mercator">Mercator</option >
          <option  value="globe">Globe</option >
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
