import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import SwitchExpandListItem from "../list/SwitchExpandListItem.tsx";
import AlertItemsExpansionDetails from "./AlertItemsExpansionDetails.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
}

export default function AlertDialog({ setShowAlert }: Props) {
  const [expandTornadoWarning, setExpandTornadoWarning] = React.useState(false);
  const [expandSevereThunderstormWarning, setExpandSevereThunderstormWarning] =
    React.useState(false);
  const [expandFlashFloodWarning, setExpandFlashFloodWarning] =
    React.useState(false);
  const [expandSpecialMarineWarning, setExpandSpecialMarineWarning] =
    React.useState(false);
  const [expandSpecialWeatherWarning, setExpandSpecialWeatherWarning] =
    React.useState(false);
  const [expandTornadoWatch, setExpandTornadoWatch] = React.useState(false);
  const [expandSevereThunderStormWatch, setExpandSevereThunderStormWatch] =
    React.useState(false);
  const [expandFlashFloodWatch, setExpandFlashFloodWatch] =
    React.useState(false);
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
              maxWidth: "505px",
            },
          },
        }}
      >
        <Box padding={"30px"}>
          <SwitchExpandListItem
            title={"Tornado Warning"}
            value={expandTornadoWarning}
            setValue={setExpandTornadoWarning}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Severe Thunderstorm Warning"}
            value={expandSevereThunderstormWarning}
            setValue={setExpandSevereThunderstormWarning}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Flash Flood Warning"}
            value={expandFlashFloodWarning}
            setValue={setExpandFlashFloodWarning}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Special Marine Warning"}
            value={expandSpecialMarineWarning}
            setValue={setExpandSpecialMarineWarning}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Special Weather Statement Warning"}
            value={expandSpecialWeatherWarning}
            setValue={setExpandSpecialWeatherWarning}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Tornado Watch"}
            value={expandTornadoWatch}
            setValue={setExpandTornadoWatch}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Severe Thunderstorm Watch"}
            value={expandSevereThunderStormWatch}
            setValue={setExpandSevereThunderStormWatch}
            expandComp={<AlertItemsExpansionDetails />}
          />
          <SwitchExpandListItem
            title={"Flash Flood Watch"}
            value={expandFlashFloodWatch}
            setValue={setExpandFlashFloodWatch}
            expandComp={<AlertItemsExpansionDetails />}
          />
        </Box>
      </Dialog>
    </>
  );
}
