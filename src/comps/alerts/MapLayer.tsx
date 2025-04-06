import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import BackAlertHeader from "../header/BackAlertHeader.tsx";
import ColorPickerListItem from "../list/ColorPickerListItem.tsx";
import HyperlinkListItem from "../list/HyperlinkListItem.tsx";
import SliderListItem from "../list/SliderListItem.tsx";
import SwitchListItem from "../list/SwitchListItem.tsx";
import { Stack } from "@mui/material";

interface Props {
  setShowAlert: (value: boolean) => void;
  isMobile?: boolean;
  moveBack?: () => void;
}

export default function MapLayer({ setShowAlert, isMobile, moveBack }: Props) {
  const [satelliteLayer, setSatelliteLayer] = React.useState(false);
  const [contourLayer, setContourLayer] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [opacity, setOpacity] = useState("1");

  const handleClose = () => {
    setShowAlert(false);
  };
  if (isMobile) return <Stack direction="column" flexGrow={"inherit"}>
    <BackAlertHeader title={"Layers"} action={() => { handleClose(); if (moveBack) moveBack(); }} />
    <Box sx={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden", paddingX: "30px", paddingTop: "10px"}}>
      <Stack direction={"column"} gap={2}>
        <ColorPickerListItem
          title={"Map Color"}
          value={backgroundColor}
          setValue={setBackgroundColor}
        />
        <SliderListItem
          title={"Map Opacity"}
          value={opacity}
          setValue={setOpacity}
        />
        <SwitchListItem
          title={"Satellite Layer"}
          value={satelliteLayer}
          setValue={setSatelliteLayer}
        />
        <SwitchListItem
          title={"Terrain Contours"}
          value={contourLayer}
          setValue={setContourLayer}
        />
        <HyperlinkListItem
          title={"Reset Layers Settings"}
          buttonClicked={() => console.log("Reset Map Settings")}
        />
      </Stack>
    </Box>

  </Stack>
  else
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
            <BackAlertHeader title={"Layers"} action={handleClose} />
            <ColorPickerListItem
              title={"Map Color"}
              value={backgroundColor}
              setValue={setBackgroundColor}
            />
            <SliderListItem
              title={"Map Opacity"}
              value={opacity}
              setValue={setOpacity}
            />
            <SwitchListItem
              title={"Satellite Layer"}
              value={satelliteLayer}
              setValue={setSatelliteLayer}
            />
            <SwitchListItem
              title={"Terrain Contours"}
              value={contourLayer}
              setValue={setContourLayer}
            />
            <HyperlinkListItem
              title={"Reset Layers Settings"}
              buttonClicked={() => console.log("Reset Map Settings")}
            />
          </Box>
        </Dialog>
      </>
    );
}
