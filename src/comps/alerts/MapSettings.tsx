import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import HyperlinkListItem from "../list/HyperlinkListItem.tsx";
import SimpleListItem from "../list/SimpleListItem.tsx";
import CitiesDetails from "./CitiesDetails.tsx";
import InfoAlertHeader from "../header/InfoAlertHeader.tsx";
import MapBorderDetails from "./MapBorderDetails.tsx";
import MapLayer from "./MapLayer.tsx";
import MapProjection from "./MapProjection.tsx";
import MapRoadNetworkDetails from "./MapRoadNetworkDetails.tsx";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { Sheet } from "react-modal-sheet";

interface Props {
  setShowAlert: (value: boolean) => void;
}

export default function MapSettings({ setShowAlert }: Props) {
  const [showProjection, setShowProjection] = useState(false);
  const [showLayer, setShowLayer] = useState(false);
  const [showBorderDetails, setShowBorderDetails] = useState(false);
  const [showCitiesDetails, setShowCitiesDetails] = useState(false);
  const [showRoadNetworkDetails, setShowRoadNetworkDetails] = useState(false);
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mode = theme.palette.mode; 

  const handleClose = () => {
    setShowAlert(false);
  };

  const menuContent = (
    <Box height={"345px"}>
      <Stack flexDirection="column" gap={"22px"}>
        <InfoAlertHeader title={"Map Settings"} action={handleClose} />
      </Stack>
      <SimpleListItem
        title={"Map Projection"}
        buttonClicked={() => {
          setIndex(1);
          setShowProjection(true);
        }}
      />
      <SimpleListItem
        title={"Layers"}
        buttonClicked={() => {
          setIndex(2);
          setShowLayer(true);
        }}
      />
      <SimpleListItem
        title={"Borders"}
        buttonClicked={() => {
          setIndex(3);
          setShowBorderDetails(true);
        }}
      />
      <SimpleListItem
        title={"Cities"}
        buttonClicked={() => {
          setIndex(4);
          setShowCitiesDetails(true);
        }}
      />
      <SimpleListItem
        title={"Road Network"}
        buttonClicked={() => {
          setIndex(5);
          setShowRoadNetworkDetails(true);
        }}
      />
      <HyperlinkListItem
        title={"Reset Map Settings"}
        buttonClicked={() => console.log("Reset Map Settings")}
      />
    </Box>
  );

  const moveBack = () => {
    setIndex(0);
  };

  const renderContent = () => {
    switch (index) {
      case 0:
        return menuContent;
      case 1:
        return <MapProjection setShowAlert={setShowProjection} isMobile moveBack={moveBack} />;
      case 2:
        return <MapLayer setShowAlert={setShowLayer} isMobile moveBack={moveBack} />;
      case 3:
        return <MapBorderDetails setShowAlert={setShowBorderDetails} isMobile moveBack={moveBack} />;
      case 4:
        return <CitiesDetails setShowAlert={setShowCitiesDetails} isMobile moveBack={moveBack} />;
      case 5:
        return <MapRoadNetworkDetails setShowAlert={setShowRoadNetworkDetails} isMobile moveBack={moveBack} />;
      default:
        return menuContent;
    }
  };

  return isMobile ? (
    <Sheet isOpen onClose={() => setShowAlert(false)} snapPoints={[400]}>
      <Sheet.Container
        style={{
          height: 579,
          backgroundColor: mode === "dark" ? "#141718" : "#ffffff",
        }}
      >
        <Sheet.Header />
        <Sheet.Content>
          <Box p={2} sx={{ backgroundColor: mode === "dark" ? "#141718" : "#ffffff", color: mode === "dark" ? "white" : "black" }}>
            {renderContent()}
          </Box>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  ) : (
    <Dialog open onClose={handleClose} maxWidth="sm" fullWidth>
      <Box
        p={2}
        sx={{
          backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        {renderContent()}
      </Box>
    </Dialog>
  );
}
