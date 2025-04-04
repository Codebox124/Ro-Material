import CloseIcon from "@mui/icons-material/Close";
import { Badge, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  action?: () => void;
}

export default function BadgedAlertHeader({ title, action }: Props) {
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
        <Grid container alignItems={"center"} spacing={2}>
          <Typography variant={"h6"} display={"inline"}>
            {title}
          </Typography>
          <Badge
            color="secondary"
            badgeContent={11}
            max={999}
            style={{ marginLeft: "20px" }}
          />
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
