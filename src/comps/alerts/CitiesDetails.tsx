import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import BackAlertHeader from "../header/BackAlertHeader.tsx";
import HyperlinkListItem from "../list/HyperlinkListItem.tsx";
import CitiesSettings from "../reusable/CitiesSettings.tsx";
import { Stack } from "@mui/material";

interface Props {
  setShowAlert: (value: boolean) => void;
  isMobile?: boolean;
  moveBack?: () => void;
}

export default function CitiesDetails({ setShowAlert, isMobile, moveBack }: Props) {
  const [settlementMajorLabel, setSettlementMajorLabel] = React.useState(false);
  const [majorColorEnabled, setMajorColorEnabled] = React.useState(false);
  const [settlementMajorLabelColor, setSettlementMajorLabelColor] =
    React.useState("#FF0000");
  const [majorHaloColorEnabled, setMajorHaloColorEnabled] =
    React.useState(false);
  const [settlementMajorLabelHaloColor, setSettlementMajorLabelHaloColor] =
    useState("#00FF00");
  const [settlementMajorLabelFont, setSettlementMajorLabelFont] =
    React.useState("Arial Unicode MS");
  const [settlementMajorLabelFontWeight, setSettlementMajorLabelFontWeight] =
    React.useState(false);
  const [settlementMajorLabelFontSize, setSettlementMajorLabelFontSize] =
    useState(18);

  const [settlementMinorLabel, setSettlementMinorLabel] = React.useState(false);
  const [minorColorEnabled, setMinorColorEnabled] = React.useState(false);
  const [settlementMinorLabelColor, setSettlementMinorLabelColor] =
    React.useState("#FF0000");
  const [minorHaloColorEnabled, setMinorHaloColorEnabled] =
    React.useState(false);
  const [settlementMinorLabelHaloColor, setSettlementMinorLabelHaloColor] =
    useState("#00FF00");
  const [settlementMinorLabelFont, setSettlementMinorLabelFont] =
    React.useState("Arial Unicode MS");
  const [settlementMinorLabelFontWeight, setSettlementMinorLabelFontWeight] =
    React.useState(false);
  const [settlementMinorLabelFontSize, setSettlementMinorLabelFontSize] =
    useState(12);

  const handleClose = () => {
    setShowAlert(false);
  };

  if (isMobile) return <Box>
    <BackAlertHeader title={"Cities"} action={() => { handleClose(); if (moveBack) moveBack(); }} />
    <Box sx={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden", paddingX: "10px", paddingRight: "20px" }}>
      <Stack direction={"column"} gap={2}>
        <CitiesSettings
          enabled={settlementMajorLabel}
          setEnabled={setSettlementMajorLabel}
          title={"Major Cities"}
          colorEnabled={majorColorEnabled}
          setColorEnabled={setMajorColorEnabled}
          color={settlementMajorLabelColor}
          setColor={setSettlementMajorLabelColor}
          haloColorEnabled={majorHaloColorEnabled}
          setHaloColorEnabled={setMajorHaloColorEnabled}
          haloColor={settlementMajorLabelHaloColor}
          setHaloColor={setSettlementMajorLabelHaloColor}
          font={settlementMajorLabelFont}
          setFont={setSettlementMajorLabelFont}
          isBold={settlementMajorLabelFontWeight}
          setIsBold={setSettlementMajorLabelFontWeight}
          fontSize={settlementMajorLabelFontSize}
          setFontSize={setSettlementMajorLabelFontSize}
        />
        <CitiesSettings
          enabled={settlementMinorLabel}
          setEnabled={setSettlementMinorLabel}
          title={"Minor Cities"}
          colorEnabled={minorColorEnabled}
          setColorEnabled={setMinorColorEnabled}
          color={settlementMinorLabelColor}
          setColor={setSettlementMinorLabelColor}
          haloColorEnabled={minorHaloColorEnabled}
          setHaloColorEnabled={setMinorHaloColorEnabled}
          haloColor={settlementMinorLabelHaloColor}
          setHaloColor={setSettlementMinorLabelHaloColor}
          font={settlementMinorLabelFont}
          setFont={setSettlementMinorLabelFont}
          isBold={settlementMinorLabelFontWeight}
          setIsBold={setSettlementMinorLabelFontWeight}
          fontSize={settlementMinorLabelFontSize}
          setFontSize={setSettlementMinorLabelFontSize}
        />
        <HyperlinkListItem title={"Reset Cities Settings"} />
      </Stack>
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
          <Box padding={"20px"}>
            <BackAlertHeader title={"Cities"} action={handleClose} />

            <CitiesSettings
              enabled={settlementMajorLabel}
              setEnabled={setSettlementMajorLabel}
              title={"Major Cities"}
              colorEnabled={majorColorEnabled}
              setColorEnabled={setMajorColorEnabled}
              color={settlementMajorLabelColor}
              setColor={setSettlementMajorLabelColor}
              haloColorEnabled={majorHaloColorEnabled}
              setHaloColorEnabled={setMajorHaloColorEnabled}
              haloColor={settlementMajorLabelHaloColor}
              setHaloColor={setSettlementMajorLabelHaloColor}
              font={settlementMajorLabelFont}
              setFont={setSettlementMajorLabelFont}
              isBold={settlementMajorLabelFontWeight}
              setIsBold={setSettlementMajorLabelFontWeight}
              fontSize={settlementMajorLabelFontSize}
              setFontSize={setSettlementMajorLabelFontSize}
            />
            <CitiesSettings
              enabled={settlementMinorLabel}
              setEnabled={setSettlementMinorLabel}
              title={"Minor Cities"}
              colorEnabled={minorColorEnabled}
              setColorEnabled={setMinorColorEnabled}
              color={settlementMinorLabelColor}
              setColor={setSettlementMinorLabelColor}
              haloColorEnabled={minorHaloColorEnabled}
              setHaloColorEnabled={setMinorHaloColorEnabled}
              haloColor={settlementMinorLabelHaloColor}
              setHaloColor={setSettlementMinorLabelHaloColor}
              font={settlementMinorLabelFont}
              setFont={setSettlementMinorLabelFont}
              isBold={settlementMinorLabelFontWeight}
              setIsBold={setSettlementMinorLabelFontWeight}
              fontSize={settlementMinorLabelFontSize}
              setFontSize={setSettlementMinorLabelFontSize}
            />
            <HyperlinkListItem title={"Reset Cities Settings"} />
          </Box>
        </Dialog>
      </>
    );
}
