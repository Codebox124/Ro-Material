import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  action?: () => void;
}

export default function AlertHeader({ title, action }: Props) {
  return (
    <Card sx={{ backgroundColor: "#2E2E2E", color: "white" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 1, alignItems: "stretch", paddingLeft: "10px" }}
      >
        <Grid size={{ xs: 10 }}>
          <Typography variant={"h6"}>
            {title}
            <SettingsIcon />
          </Typography>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Button color="primary" onClick={action}>
            <HighlightOffIcon />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
