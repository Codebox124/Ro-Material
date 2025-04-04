import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import BackAlertHeader from "../header/BackAlertHeader.tsx";
import HyperlinkListItem from "../list/HyperlinkListItem.tsx";
import GenericSetting from "../reusable/GenericSetting.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
  isMobile?: boolean;
  moveBack?: () => void;
}

export default function MapRoadNetworkDetails({ setShowAlert, isMobile, moveBack }: Props) {
  const [admin2Boundary, setAdmin2Boundary] = React.useState(false);
  const [admin2BoundaryColor, setAdmin2BoundaryColor] =
    React.useState("#FF0000");
  const [admin2BoundaryWidth, setAdmin2BoundaryWidth] = useState("1");

  const [admin1Boundary, setAdmin1Boundary] = React.useState(false);
  const [admin1BoundaryColor, setAdmin1BoundaryColor] =
    React.useState("#FF0000");
  const [admin1BoundaryWidth, setAdmin1BoundaryWidth] = useState("1");

  const [admin0Boundary, setAdmin0Boundary] = React.useState(false);
  const [admin0BoundaryColor, setAdmin0BoundaryColor] =
    React.useState("#FF0000");
  const [admin0BoundaryWidth, setAdmin0BoundaryWidth] = useState("1");

  const handleClose = () => {
    setShowAlert(false);
  };
  if (isMobile)
    return <Box>
      <Box>
        <BackAlertHeader title={"Road Network"} action={() => { handleClose(); if (moveBack) moveBack(); }} />
      </Box>
      <Box sx={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden", paddingX: "10px", paddingRight: "20px" }}>
        <GenericSetting
          sectionTitle={"Interstates"}
          value={admin2Boundary}
          setValue={setAdmin2Boundary}
          switchTitle={"Show"}
          colorPickerTitle={"Color"}
          sliderTitle={"Thickness"}
          color={admin2BoundaryColor}
          setColor={setAdmin2BoundaryColor}
          width={admin2BoundaryWidth}
          setWidth={setAdmin2BoundaryWidth}
        />
        <GenericSetting
          sectionTitle={"Highways"}
          value={admin1Boundary}
          setValue={setAdmin1Boundary}
          switchTitle={"Show"}
          colorPickerTitle={"Color"}
          sliderTitle={"Thickness"}
          color={admin1BoundaryColor}
          setColor={setAdmin1BoundaryColor}
          width={admin1BoundaryWidth}
          setWidth={setAdmin1BoundaryWidth}
        />
        <GenericSetting
          sectionTitle={"Streets"}
          value={admin0Boundary}
          setValue={setAdmin0Boundary}
          switchTitle={"Show"}
          colorPickerTitle={"Color"}
          sliderTitle={"Thickness"}
          color={admin0BoundaryColor}
          setColor={setAdmin0BoundaryColor}
          width={admin0BoundaryWidth}
          setWidth={setAdmin0BoundaryWidth}
        />
        <Box paddingLeft={"20px"} paddingRight={"20px"}>
          <HyperlinkListItem title={"Reset Road Network Settings"} />
        </Box>
      </Box>
    </Box>
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
          <Box paddingBottom={"20px"}>
            <Box padding={"20px"}>
              <BackAlertHeader title={"Road Network"} action={handleClose} />
            </Box>

            <GenericSetting
              sectionTitle={"Interstates"}
              value={admin2Boundary}
              setValue={setAdmin2Boundary}
              switchTitle={"Show"}
              colorPickerTitle={"Color"}
              sliderTitle={"Thickness"}
              color={admin2BoundaryColor}
              setColor={setAdmin2BoundaryColor}
              width={admin2BoundaryWidth}
              setWidth={setAdmin2BoundaryWidth}
            />
            <GenericSetting
              sectionTitle={"Highways"}
              value={admin1Boundary}
              setValue={setAdmin1Boundary}
              switchTitle={"Show"}
              colorPickerTitle={"Color"}
              sliderTitle={"Thickness"}
              color={admin1BoundaryColor}
              setColor={setAdmin1BoundaryColor}
              width={admin1BoundaryWidth}
              setWidth={setAdmin1BoundaryWidth}
            />
            <GenericSetting
              sectionTitle={"Streets"}
              value={admin0Boundary}
              setValue={setAdmin0Boundary}
              switchTitle={"Show"}
              colorPickerTitle={"Color"}
              sliderTitle={"Thickness"}
              color={admin0BoundaryColor}
              setColor={setAdmin0BoundaryColor}
              width={admin0BoundaryWidth}
              setWidth={setAdmin0BoundaryWidth}
            />
            <Box paddingLeft={"20px"} paddingRight={"20px"}>
              <HyperlinkListItem title={"Reset Road Network Settings"} />
            </Box>
          </Box>
        </Dialog>
      </>
    );
}
