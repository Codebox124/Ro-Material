import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid2";
import BackAlertHeader from "../header/BackAlertHeader.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
}

export default function WarningDetails({ setShowAlert }: Props) {
  const handleClose = () => {
    setShowAlert(false);
  };
  const address =
    "459\n" +
    "WUUS52 KJAX 191232\n" +
    "SVRJAX\n" +
    "FLC035-083-107-109-191300-/O.NEW.KJAX.SV.W.0005.250119T1232Z-\n" +
    "250119T1300Z/";
  const bulletin =
    "BULLETIN - IMMEDIATE BROADCAST REQUESTED\n" +
    "Severe Thunderstorm Warning\n" +
    "National Weather Service Jacksonville FL\n" +
    "732 AM EST Sun Jan 19 2025";
  const footer =
    "The National Weather Service in Jacksonville has issues a warning.";
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
          <BackAlertHeader title={"Tornado Warning"} action={handleClose} />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1 }}
            sx={{
              mb: 1,
              alignItems: "stretch",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Grid size={{ xs: 6 }}>
              <Typography variant={"subtitle2"} display="inline">
                {"Tornado: "}
              </Typography>
              <Typography
                variant={"subtitle2"}
                display="inline"
                color={"#FF6347"}
              >
                {"RADAR INDICATED"}
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography variant={"subtitle2"} display="inline">
                {"Hail: "}
              </Typography>
              <Typography
                variant={"subtitle2"}
                display="inline"
                color={"#DB7093"}
              >
                {'2.5" (Tennis-Ball Sized)'}
              </Typography>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }} style={{ margin: "15px", width: "92%" }}>
            <Card
              sx={{
                backgroundColor: "#444444",
                color: "white",
                paddingLeft: "5px",
                marginBottom: "5px",
              }}
            >
              <Typography variant={"subtitle2"} display="block" align="center">
                <strong>
                  {"Expires: " + "Sunday, January 19, 2025 at 08:00 PM EST"}
                </strong>
              </Typography>
            </Card>
          </Grid>
          <Box padding={"20px"}>
            <Typography sx={{ whiteSpace: "pre-line" }}>{address}</Typography>
            <br />
            <Typography sx={{ whiteSpace: "pre-line" }}>{bulletin}</Typography>
            <br />
            <Typography sx={{ whiteSpace: "pre-line" }}>{footer}</Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
