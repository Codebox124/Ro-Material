import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  action?: () => void;
}

export default function BackAlertHeader({ title, action }: Props) {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        mb: 1,
        alignItems: "stretch",
        marginLeft: "-10px",
        marginRight: "-10px",
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Grid container alignItems={"center"} spacing={2}>
          <Button color="primary" onClick={action}>
            <NavigateBeforeIcon  />
          </Button>
          <Typography marginLeft={"-32px"} variant={"h6"} display={"inline"}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
