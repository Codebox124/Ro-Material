import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";

interface Props {
  setOpen: any;
  details: DeviceDetailsResponse;
}

export default function TitleHeaderComp({ setOpen, details }: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  function getTime(details: DeviceDetailsResponse): string {
    const date = new Date(details?.device?.last_telemetry_at as Date);
    return (
      "Last update: " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }

  function getCurrentTime(): string {
    const date = new Date();
    return (
      "🕗 " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  }

  return (
    <div>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={7}>
            <Typography fontSize={28} style={{ wordWrap: "break-word" }}>{details?.device?.name}</Typography>
          </Grid>
          <Grid size={5}>
            <Typography>{getCurrentTime()}</Typography>
            <Typography>{getTime(details)}</Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}
