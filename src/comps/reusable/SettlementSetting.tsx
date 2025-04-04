import {
  FormControlLabel,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

interface SettlementSettingProps {
  value: boolean;
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  title?: string;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
  haloColor: string;
  setHaloColor: (value: string | ((prevVar: string) => string)) => void;
  font: string;
  setFont: (value: string | ((prevVar: string) => string)) => void;
  fontWeight: string;
  setFontWeight: (value: string | ((prevVar: string) => string)) => void;
  fontSize: number;
  setFontSize: (value: number | ((prevVar: number) => number)) => void;
}

export default function SettlementSetting({
  value,
  setValue,
  title,
  color,
  setColor,
  haloColor,
  setHaloColor,
  font,
  setFont,
  fontWeight,
  setFontWeight,
  fontSize,
  setFontSize,
}: SettlementSettingProps) {
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
        <Grid size={{ xs: 8 }}>
          <Typography display="inline" marginRight={"15px"}>
            {title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormControlLabel
            control={
              <Switch
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
              />
            }
            label=""
          />
        </Grid>
      </Grid>

      <Stack spacing={2}>
        <TextField
          label="Font Family"
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
        <TextField
          label="Font Weight"
          select
          fullWidth
          defaultValue={fontWeight}
          onChange={(e) => setFontWeight(e.target.value)}
        >
          <MenuItem value="Regular">Regular</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Bold">Bold</MenuItem>
        </TextField>
        <TextField
          label="Font Size"
          type="number"
          defaultValue={fontSize}
          fullWidth
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
        <TextField
          label="Text Color"
          type="color"
          defaultValue={color}
          onChange={(e) => setColor(e.target.value)}
          fullWidth
        />
        <TextField
          label="Halo Color"
          type="color"
          defaultValue={haloColor}
          onChange={(e) => setHaloColor(e.target.value)}
          fullWidth
        />
      </Stack>
    </Box>
  );
}
