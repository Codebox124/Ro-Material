import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

interface Props {
  title: string;
  action?: () => void;
}

export default function ColoredAlertHeader({ title, action }: Props) {
  return (
    <Card sx={{ backgroundColor: "#2E2E2E", color: "white" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 1, alignItems: "stretch", paddingLeft: "10px", backgroundColor: "#FF0000" }}
      >
        <Grid size={{ xs: 1 }}>
          <ArrowLeftIcon display={"inline"} />
        </Grid>
        <Grid size={{ xs: 9 }}>
          <Typography variant={"h6"}>{title}</Typography>
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
