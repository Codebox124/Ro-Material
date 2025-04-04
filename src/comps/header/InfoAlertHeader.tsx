import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  action?: () => void;
}

export default function InfoAlertHeader({ title, action }: Props) {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      alignItems={"center"}
      sx={{
        mb: 1,
        paddingLeft: "15px",
        paddingRight: "5px",
      }}
    >
      <Grid size={{ xs: 10 }}>
        <Grid
          container
          alignItems={"center"}
          spacing={2}
        >
          <Typography variant={"h6"} display={"inline"}>
            {title}
          </Typography>
          <InfoIcon />
        </Grid>
      </Grid>
      <Grid size={{ xs: 2 }}>
        <Button color="primary" onClick={action}>
          <CloseIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
