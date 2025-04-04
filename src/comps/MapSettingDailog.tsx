import { useState } from "react";
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { Close } from "@mui/icons-material";
import { Fade, IconButton, Paper, Stack } from "@mui/material";
import SimpleListItem from "./list/SimpleListItem.tsx";
import HyperlinkListItem from "./list/HyperlinkListItem.tsx";
import InfoAlertHeader from "./header/InfoAlertHeader.tsx";
import CitiesDetails from "./alerts/CitiesDetails.tsx";
import MapBorderDetails from "./alerts/MapBorderDetails.tsx";
import MapLayer from "./alerts/MapLayer.tsx";
import MapProjection from "./alerts/MapProjection.tsx";
import MapRoadNetworkDetails from "./alerts/MapRoadNetworkDetails.tsx";

interface props {
    onOpenChange: () => void;
}

export const MapSettingDailog: React.FC<props> = ({ onOpenChange }) => {
    const [bannerOpen, setBannerOpen] = useState(true);

    const closeBanner = () => {
        setBannerOpen(false);
    };

    const [showProjection, setShowProjection] = useState(false);
    const [showLayer, setShowLayers] = useState(false);
    const [showBorderDetails, setShowBorders] = useState(false);
    const [showCitiesDetails, setShowCities] = useState(false);
    const [showRoadNetworkDetails, setRoadNetwork] = useState(false);
    return <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={bannerOpen}>
            <Paper
                role="dialog"
                aria-modal="false"
                aria-label="Cookie banner"
                square
                variant="outlined"
                tabIndex={-1}
                sx={{
                    padding: "32px !important",
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    m: 0,
                    p: 2,
                    borderWidth: 0,
                    borderTopWidth: 1,
                }}
            >
                <Stack
                    flexDirection="column" gap={"22px"}
                >
                    <Stack direction="row" justifyContent={"space-between"}>
                        <Stack direction="row" gap="6px" alignItems={"center"}>
                            <InfoAlertHeader title={"Map Settings"} />
                        </Stack>
                        <IconButton size="small" onClick={closeBanner}>
                            <Close />
                        </IconButton>
                    </Stack>
                    <SimpleListItem
                        title={"Map Projection"}
                        buttonClicked={() => {
                            setShowProjection(true);
                        }}
                    />
                    <SimpleListItem
                        title={"Layers"}
                        buttonClicked={() => {
                            setShowLayers(true);
                        }}
                    />
                    <SimpleListItem
                        title={"Borders"}
                        buttonClicked={() => {
                            setShowBorders(true);
                        }}
                    />
                    <SimpleListItem
                        title={"Cities"}
                        buttonClicked={() => {
                            setShowCities(true);
                        }}
                    />
                    <SimpleListItem
                        title={"Road Network"}
                        buttonClicked={() => {
                            setRoadNetwork(true);
                        }}
                    />
                    <HyperlinkListItem
                        title={"Reset Map Settings"}
                        buttonClicked={() => console.log("Reset Map Settings")}
                    />
                    {showProjection && <MapProjection setShowAlert={setShowProjection} />}
                    {showLayer && <MapLayer setShowAlert={setShowLayers} />}
                    {showBorderDetails && (
                        <MapBorderDetails setShowAlert={setShowBorders} />
                    )}
                    {showCitiesDetails && (
                        <CitiesDetails setShowAlert={setShowCities} />
                    )}
                    {showRoadNetworkDetails && (
                        <MapRoadNetworkDetails setShowAlert={setRoadNetwork} />
                    )}
                </Stack>
            </Paper>
        </Fade>
    </TrapFocus>
}