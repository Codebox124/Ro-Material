import { Slider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  title: string;
  value: string;
  setValue: (value: string | ((prevVar: string) => string)) => void;
}

export default function SliderListItem({ title, value, setValue }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile)
    return (
      <>
        <Stack
          direction="column"
        >
          <Typography textAlign={"left"}>{title}</Typography>
          <Slider
            defaultValue={parseFloat(value)}
            onChange={(_, value) => setValue(value.toString())}
            step={0.05}
            min={0.0}
            max={1.0}
            valueLabelDisplay="auto"
            style={{ width: "100%" }}
          />
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
          marginLeft={{ xs: 0, sm: "15px" }}
          marginRight={{ xs: 0, sm: "15px" }}
          height={{ xs: "auto", sm: "56px" }}
        >
          <Grid size={{ xs: 5 }}>
            <ListItemText primary={title} />
          </Grid>
          <Grid size={{ xs: 7 }}>
            <Slider
              defaultValue={parseFloat(value)}
              onChange={(_, value) => setValue(value.toString())}
              step={0.05}
              min={0.0}
              max={1.0}
              valueLabelDisplay="auto"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </>
    );
}
