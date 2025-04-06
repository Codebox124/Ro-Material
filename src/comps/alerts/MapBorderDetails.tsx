import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import BackAlertHeader from "../header/BackAlertHeader.tsx";
import GenericSetting from "../reusable/GenericSetting.tsx";
import { Stack } from "@mui/material";
import HyperlinkListItem from "../list/HyperlinkListItem.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
  isMobile?: boolean;
  moveBack?: () => void;
}

export default function MapBorderDetails({ setShowAlert, isMobile, moveBack }: Props) {
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
        <BackAlertHeader title={"Borders"} action={() => { handleClose(); if (moveBack) moveBack(); }} />
      </Box>
      <Box sx={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden", paddingX: "30px", paddingTop: "10px" }}>
        <Stack direction={"column"} gap={2}>
          <GenericSetting
            sectionTitle={"County Border Settings"}
            value={admin2Boundary}
            setValue={setAdmin2Boundary}
            switchTitle={"Show"}
            colorPickerTitle={"County Borders"}
            sliderTitle={"County Border Thickness"}
            color={admin2BoundaryColor}
            setColor={setAdmin2BoundaryColor}
            width={admin2BoundaryWidth}
            setWidth={setAdmin2BoundaryWidth}
          />
          <GenericSetting
            sectionTitle={"State Border Settings"}
            value={admin1Boundary}
            setValue={setAdmin1Boundary}
            switchTitle={"Show"}
            colorPickerTitle={"State Borders"}
            sliderTitle={"State Border Thickness"}
            color={admin1BoundaryColor}
            setColor={setAdmin1BoundaryColor}
            width={admin1BoundaryWidth}
            setWidth={setAdmin1BoundaryWidth}
          />
          <GenericSetting
            sectionTitle={"Country Border Settings"}
            value={admin0Boundary}
            setValue={setAdmin0Boundary}
            switchTitle={"Show"}
            colorPickerTitle={"Country Borders"}
            sliderTitle={"State Border Thickness"}
            color={admin0BoundaryColor}
            setColor={setAdmin0BoundaryColor}
            width={admin0BoundaryWidth}
            setWidth={setAdmin0BoundaryWidth}
          />

          <HyperlinkListItem
            title={"Reset Borders Settings"}
            buttonClicked={() => console.log("Reset Map Settings")}
          />
        </Stack>
      </Box>
    </Box>;
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
              <BackAlertHeader title={"Borders"} action={handleClose} />
            </Box>

            <GenericSetting
              sectionTitle={"County Borders"}
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
              sectionTitle={"State Borders"}
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
              sectionTitle={"Country Borders"}
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
          </Box>
        </Dialog>
      </>
    );
}
