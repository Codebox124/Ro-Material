import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React from "react";
import MapProjectionSetting from "../reusable/MapProjectionSetting.tsx";
import BackAlertHeader from "../header/BackAlertHeader.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
  isMobile?: boolean;
  moveBack?: () => void;
}

export default function MapProjection({ setShowAlert, isMobile, moveBack }: Props) {
  const [projection, setProjection] = React.useState("globe");
  const handleClose = () => {
    setShowAlert(false);
  };

  if (isMobile)
    return (
      <>
        <Box>
          <BackAlertHeader  title={"Map Projection"} action={() => { handleClose(); if (moveBack) moveBack(); }} />
          <Box maxHeight={"300px"} overflow={"auto"}>

            <MapProjectionSetting
              projection={projection}
              setProjection={setProjection}
            />
          </Box>
        </Box>
      </>
    );
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
            <BackAlertHeader title={"Map Projection"} action={handleClose} />

            <MapProjectionSetting
              projection={projection}
              setProjection={setProjection}
            />
          </Box>
        </Dialog>
      </>
    );
}

interface MapSettingsItemProps {
  title: string;
  isFooter?: boolean;
  onclick?: () => void;
}

function MapSettingsItem({ title, isFooter = false }: MapSettingsItemProps) {
  const color = isFooter ? "#8080FF" : "white";
  return (
    <Box sx={{ color: "white", margin: "10px" }}>
      <Typography variant={"body1"} display="inline" color={color}>
        {title}
      </Typography>
      {!isFooter && <NavigateNextIcon />}
    </Box>
  );
}
