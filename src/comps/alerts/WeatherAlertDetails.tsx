import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import AlertDetailsItem from "./item/AlertDetailsItem.tsx";
import BadgedAlertHeader from "../header/BadgedAlertHeader.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
}

export default function WeatherAlertDetails({ setShowAlert }: Props) {
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
          <BadgedAlertHeader title={"Tornado Warning"} action={handleClose} />

          <Box>
            <AlertDetailsItem
              title={"Tornado Warning"}
              sectionTitle={"Storm-Based"}
              state={"AR, MO, IL"}
              hail={'2.5" (Tennis-Ball Sized)'}
              timestamp={"1 h, 33 mins."}
              tornado={"RADAR INDICATED"}
            />
            <AlertDetailsItem
              title={"Tornado Warning"}
              state={"AR, MO, IL"}
              hail={'2.5" (Tennis-Ball Sized)'}
              timestamp={"1 h, 33 mins."}
              tornado={"RADAR INDICATED"}
            />
            <AlertDetailsItem
              title={"Tornado Warning"}
              state={"AR, MO, IL"}
              hail={'4.5" (Grapefruit-Sized)'}
              timestamp={"1 h, 33 mins."}
              tornado={"OBSERVED"}
              isSevere={true}
            />
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
