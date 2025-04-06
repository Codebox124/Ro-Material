import {
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  title: string;
  value: boolean;
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function CityListItem({ title, value, setValue }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{title}</Typography>
        
      </Stack>
    );
  }

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      marginLeft={{ xs: 0, sm: "15px" }}
      marginRight={{ xs: 0, sm: "15px" }}
      height={{ xs: "auto", sm: "56px" }}
    >
      <Grid xs={10}>
        <ListItemText primary={title} />
      </Grid>
      <Grid xs={2}>
        
      </Grid>
    </Grid>
  );
}
