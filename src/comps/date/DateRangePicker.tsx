import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";
import SimpleHeader from "../header/SimpleHeader.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
}

export default function DateRangePicker({ setShowAlert }: Props) {
  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Dialog
        fullScreen={false}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "515px",
            },
          },
        }}
      >
        <Box padding={"20px"}>
          <SimpleHeader title={"Radar History Mode"} action={handleClose} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["MobileDateTimePicker"]}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ mb: 1, alignItems: "stretch", paddingLeft: "20px" }}
              >
                <Grid size={{ xs: 6 }}>
                  <MobileDateTimePicker
                    defaultValue={dayjs("2022-04-17T15:30")}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <MobileDateTimePicker
                    defaultValue={dayjs("2024-04-17T15:30")}
                  />
                </Grid>
              </Grid>
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Dialog>
    </>
  );
}
