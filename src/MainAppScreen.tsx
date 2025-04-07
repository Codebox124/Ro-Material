import MapIcon from "@mui/icons-material/Map";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Fab } from "@mui/material";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AlertDialog from "./comps/alerts/AlertDialog.tsx";
import MapSettings from "./comps/alerts/MapSettings.tsx";
import WarningDetails from "./comps/alerts/WarningDetails.tsx";
import WeatherAlertDetails from "./comps/alerts/WeatherAlertDetails.tsx";
import WeatherAlertDialog from "./comps/alerts/WeatherAlertDialog.tsx";
import CamsMapView from "./comps/CamsMapView.tsx";
import useMotorwayLinkRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/useMotorwayLinkRoadNetwork.tsx";
import useMotorwayRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/useMotorwayRoadNetwork.tsx";
import usePrimaryRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/usePrimaryRoadNetwork.tsx";
import useSecondaryRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/useSecondaryRoadNetwork.tsx";
import useStreetRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/useStreetRoadNetwork.tsx";
import useTertiaryRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/useTertiaryRoadNetwork.tsx";
import useTrunkRoadNetwork from "./comps/ControlCustomHooks/RoadNetwork/useTrunkRoadNetwork.tsx";
import useBackgroundColorNOpacity from "./comps/ControlCustomHooks/useBackgroundColorNOpacity.tsx";
import useContourLayer from "./comps/ControlCustomHooks/useContourLayer.tsx";
import useCountryBoundary from "./comps/ControlCustomHooks/useCountryBoundary.tsx";
import useCountyBoundary from "./comps/ControlCustomHooks/useCountyBoundary.tsx";
import useMajorSettlementLabel from "./comps/ControlCustomHooks/useMajorSettlementLabel.tsx";
import useMinorSettlementLabel from "./comps/ControlCustomHooks/useMinorSettlementLabel.tsx";
import useProjection from "./comps/ControlCustomHooks/useProjection.tsx";
import useSatelliteLayer from "./comps/ControlCustomHooks/useSatelliteLayer.tsx";
import useStateBoundary from "./comps/ControlCustomHooks/useStateBoundary.tsx";
import DateRangePicker from "./comps/date/DateRangePicker.tsx";
import MapControls from "./comps/MapControls.tsx";
import MenuBar from "./comps/MenuBar.tsx";
import { MapBoxPrivateKey } from "./constants/Secret.tsx";

export default function MainAppScreen() {
  const fabStyle = {
    position: "absolute",
    right: 16,
    bottom: 16,
  };
  const alertFabStyle = {
    position: "absolute",
    right: 16,
    bottom: 86,
  };
  const weatherAlertFabStyle = {
    position: "absolute",
    right: 16,
    bottom: 186,
  };
  const weatherAlertDetailsFabStyle = {
    position: "absolute",
    right: 16,
    bottom: 286,
  };
  const warningAlertDetailsFabStyle = {
    position: "absolute",
    right: 16,
    bottom: 386,
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showWeatherAlert, setShowWeatherAlert] = useState(false);
  const [showAlertDetails, setShowAlertDetails] = useState(false);
  const [showWarningDetails, setShowWarningDetails] = useState(false);
  const [openMapSettings, setOpenMapSettings] = useState(false);
  const [openDateRangePicker, setOpenDateRangePicker] = useState(false);

  const mapRef = useRef(null);
  const mapboxInstance = useRef<mapboxgl.Map | null>(null);

  const [projection, setProjection] = useState("mercator");
  const [satelliteLayer, setSatelliteLayer] = useState(false);
  const [contourLayer, setContourLayer] = useState(false);
  const [admin2Boundary, setAdmin2Boundary] = useState(true);
  const [admin1Boundary, setAdmin1Boundary] = useState(true);
  const [admin0Boundary, setAdmin0Boundary] = useState(true);
  const [settlementMajorLabel, setSettlementMajorLabel] = useState(true);
  const [settlementMajorLabelFont, setSettlementMajorLabelFont] =
    useState("Arial Unicode MS");
  const [settlementMajorLabelFontWeight, setSettlementMajorLabelFontWeight] =
    useState("Regular");
  const [settlementMajorLabelFontSize, setSettlementMajorLabelFontSize] =
    useState(18);
  const [settlementMinorLabel, setSettlementMinorLabel] = useState(true);
  const [settlementMinorLabelFont, setSettlementMinorLabelFont] =
    useState("Arial Unicode MS");
  const [settlementMinorLabelFontWeight, setSettlementMinorLabelFontWeight] =
    useState("Regular");
  const [settlementMinorLabelFontSize, setSettlementMinorLabelFontSize] =
    useState(12);

  const [primaryRoadNetwork, setPrimaryRoadNetwork] = useState(false);
  const [secondaryRoadNetwork, setSecondaryRoadNetwork] = useState(false);
  const [motorwayRoadNetwork, setMotorwayRoadNetwork] = useState(false);
  const [motorwayLinkRoadNetwork, setMotorwayLinkRoadNetwork] = useState(false);
  const [trunkRoadNetwork, setTrunkRoadNetwork] = useState(false);
  const [tertiaryRoadNetwork, setTertiaryRoadNetwork] = useState(false);
  const [streetRoadNetwork, setStreetRoadNetwork] = useState(false);

  const [admin2BoundaryColor, setAdmin2BoundaryColor] = useState("#FFFFFF");
  const [admin1BoundaryColor, setAdmin1BoundaryColor] = useState("#00FF00");
  const [admin0BoundaryColor, setAdmin0BoundaryColor] = useState("#FFFFFF");
  const [settlementMajorLabelColor, setSettlementMajorLabelColor] =
    useState("#FF0000");
  const [settlementMajorLabelHaloColor, setSettlementMajorLabelHaloColor] =
    useState("#000000");
  const [settlementMinorLabelColor, setSettlementMinorLabelColor] =
    useState("#FFFFFF");
  const [settlementMinorLabelHaloColor, setSettlementMinorLabelHaloColor] =
    useState("#000000");
  const [primaryRoadNetworkColor, setPrimaryRoadNetworkColor] =
    useState("#FFFFFF");
  const [secondaryRoadNetworkColor, setSecondaryRoadNetworkColor] =
    useState("#FFFFFF");
  const [motorwayRoadNetworkColor, setMotorwayRoadNetworkColor] =
    useState("#FFFFFF");
  const [motorwayLinkRoadNetworkColor, setMotorwayLinkRoadNetworkColor] =
    useState("#FFFFFF");
  const [trunkRoadNetworkColor, setTrunkRoadNetworkColor] = useState("#FFFFFF");
  const [tertiaryRoadNetworkColor, setTertiaryRoadNetworkColor] =
    useState("#FFFFFF");
  const [streetRoadNetworkColor, setStreetRoadNetworkColor] =
    useState("#FFFFFF");

  const [admin2BoundaryWidth, setAdmin2BoundaryWidth] = useState("1");
  const [admin1BoundaryWidth, setAdmin1BoundaryWidth] = useState("1");
  const [admin0BoundaryWidth, setAdmin0BoundaryWidth] = useState("1");
  const [primaryRoadNetworkWidth, setPrimaryRoadNetworkWidth] = useState("1");
  const [secondaryRoadNetworkWidth, setSecondaryRoadNetworkWidth] =
    useState("1");
  const [motorwayRoadNetworkWidth, setMotorwayRoadNetworkWidth] = useState("1");
  const [motorwayLinkRoadNetworkWidth, setMotorwayLinkRoadNetworkWidth] =
    useState("1");
  const [trunkRoadNetworkWidth, setTrunkRoadNetworkWidth] = useState("1");
  const [tertiaryRoadNetworkWidth, setTertiaryRoadNetworkWidth] = useState("1");
  const [streetRoadNetworkWidth, setStreetRoadNetworkWidth] = useState("1");

  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [opacity, setOpacity] = useState("1");

  useEffect(() => {
    mapboxgl.accessToken = MapBoxPrivateKey;

    if (mapRef.current) {
      console.log("EFFECT", mapRef.current);

      mapboxInstance.current = new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/meteodon/cm4r1cny4000h01s89x0p8wm3",

        center: [-74.5, 40],
        zoom: 6,
        projection: projection,
      });
    }

    return () => mapboxInstance.current?.remove();
  }, []);

  useEffect(() => {
    if (mapboxInstance.current) {
      mapboxInstance.current?.on("load", () => {
        console.log("map loaded");
      });
      // Commented out because it throws an exception
      // mapLayers(mapRef.current);
    }
  }, [mapRef]);

  useProjection(mapboxInstance, projection);
  useSatelliteLayer(mapboxInstance, satelliteLayer);
  useContourLayer(mapboxInstance, contourLayer);
  useCountyBoundary(
    mapboxInstance,
    admin2Boundary,
    admin2BoundaryColor,
    admin2BoundaryWidth
  );
  useStateBoundary(
    mapboxInstance,
    admin1Boundary,
    admin1BoundaryColor,
    admin1BoundaryWidth
  );
  useCountryBoundary(
    mapboxInstance,
    admin0Boundary,
    admin0BoundaryColor,
    admin0BoundaryWidth
  );

  useMajorSettlementLabel(
    mapboxInstance,
    settlementMajorLabel,
    settlementMajorLabelColor,
    settlementMajorLabelHaloColor,
    settlementMajorLabelFont,
    settlementMajorLabelFontWeight,
    settlementMajorLabelFontSize
  );
  useMinorSettlementLabel(
    mapboxInstance,
    settlementMinorLabel,
    settlementMinorLabelColor,
    settlementMinorLabelHaloColor,
    settlementMinorLabelFont,
    settlementMinorLabelFontWeight,
    settlementMinorLabelFontSize
  );

  usePrimaryRoadNetwork(
    mapboxInstance,
    primaryRoadNetwork,
    primaryRoadNetworkColor,
    primaryRoadNetworkWidth
  );
  useSecondaryRoadNetwork(
    mapboxInstance,
    secondaryRoadNetwork,
    secondaryRoadNetworkColor,
    secondaryRoadNetworkWidth
  );
  useMotorwayRoadNetwork(
    mapboxInstance,
    motorwayRoadNetwork,
    motorwayRoadNetworkColor,
    motorwayRoadNetworkWidth
  );
  useMotorwayLinkRoadNetwork(
    mapboxInstance,
    motorwayLinkRoadNetwork,
    motorwayLinkRoadNetworkColor,
    motorwayLinkRoadNetworkWidth
  );
  useTrunkRoadNetwork(
    mapboxInstance,
    trunkRoadNetwork,
    trunkRoadNetworkColor,
    trunkRoadNetworkWidth
  );
  useTertiaryRoadNetwork(
    mapboxInstance,
    tertiaryRoadNetwork,
    tertiaryRoadNetworkColor,
    tertiaryRoadNetworkWidth
  );
  useStreetRoadNetwork(
    mapboxInstance,
    streetRoadNetwork,
    streetRoadNetworkColor,
    streetRoadNetworkWidth
  );

  useBackgroundColorNOpacity(mapboxInstance, backgroundColor, opacity);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const showAlertClicked = () => {
    setShowAlert(!showAlert);
  };
  const showWeatherAlertClicked = () => {
    setShowWeatherAlert(!showWeatherAlert);
  };

  const showAlertDetailsClicked = () => {
    setShowAlertDetails(!showAlertDetails);
  };
  const showWarningDetailsClicked = () => {
    setShowWarningDetails(!showWarningDetails);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box style={{ zIndex: 'unset' }} sx={{ display: "flex" }}>
      <ErrorBoundary fallback={<div>Failed to load the Menu bar</div>}>
        <MenuBar />
      </ErrorBoundary>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <ErrorBoundary fallback={<div>Failed to load the Map</div>}>
          {/*<Footer />*/}
          <CamsMapView drawerWidth={0} ref={mapRef} />
        </ErrorBoundary>
      </Box>

      <Fab variant="extended" sx={fabStyle} onClick={handleClick}>
        <MapIcon />
      </Fab>
      <Popover
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MapControls
          projection={projection}
          setProjection={setProjection}
          satelliteLayer={satelliteLayer}
          setSatelliteLayer={setSatelliteLayer}
          contourLayer={contourLayer}
          setContourLayer={setContourLayer}
          admin2Boundary={admin2Boundary}
          setAdmin2Boundary={setAdmin2Boundary}
          admin2BoundaryColor={admin2BoundaryColor}
          setAdmin2BoundaryColor={setAdmin2BoundaryColor}
          admin2BoundaryWidth={admin2BoundaryWidth}
          setAdmin2BoundaryWidth={setAdmin2BoundaryWidth}
          admin1Boundary={admin1Boundary}
          setAdmin1Boundary={setAdmin1Boundary}
          admin1BoundaryColor={admin1BoundaryColor}
          setAdmin1BoundaryColor={setAdmin1BoundaryColor}
          admin1BoundaryWidth={admin1BoundaryWidth}
          setAdmin1BoundaryWidth={setAdmin1BoundaryWidth}
          admin0Boundary={admin0Boundary}
          setAdmin0Boundary={setAdmin0Boundary}
          admin0BoundaryColor={admin0BoundaryColor}
          setAdmin0BoundaryColor={setAdmin0BoundaryColor}
          admin0BoundaryWidth={admin0BoundaryWidth}
          setAdmin0BoundaryWidth={setAdmin0BoundaryWidth}
          settlementMajorLabel={settlementMajorLabel}
          setSettlementMajorLabel={setSettlementMajorLabel}
          settlementMajorLabelFont={settlementMajorLabelFont}
          setSettlementMajorLabelFont={setSettlementMajorLabelFont}
          settlementMajorLabelFontWeight={settlementMajorLabelFontWeight}
          setSettlementMajorLabelFontWeight={setSettlementMajorLabelFontWeight}
          settlementMajorLabelFontSize={settlementMajorLabelFontSize}
          setSettlementMajorLabelFontSize={setSettlementMajorLabelFontSize}
          settlementMajorLabelColor={settlementMajorLabelColor}
          setSettlementMajorLabelColor={setSettlementMajorLabelColor}
          settlementMajorLabelHaloColor={settlementMajorLabelHaloColor}
          setSettlementMajorLabelHaloColor={setSettlementMajorLabelHaloColor}
          settlementMinorLabel={settlementMinorLabel}
          setSettlementMinorLabel={setSettlementMinorLabel}
          settlementMinorLabelFont={settlementMinorLabelFont}
          setSettlementMinorLabelFont={setSettlementMinorLabelFont}
          settlementMinorLabelFontWeight={settlementMinorLabelFontWeight}
          setSettlementMinorLabelFontWeight={setSettlementMinorLabelFontWeight}
          settlementMinorLabelFontSize={settlementMinorLabelFontSize}
          setSettlementMinorLabelFontSize={setSettlementMinorLabelFontSize}
          settlementMinorLabelColor={settlementMinorLabelColor}
          setSettlementMinorLabelColor={setSettlementMinorLabelColor}
          settlementMinorLabelHaloColor={settlementMinorLabelHaloColor}
          setSettlementMinorLabelHaloColor={setSettlementMinorLabelHaloColor}
          primaryRoadNetwork={primaryRoadNetwork}
          setPrimaryRoadNetwork={setPrimaryRoadNetwork}
          primaryRoadNetworkColor={primaryRoadNetworkColor}
          setPrimaryRoadNetworkColor={setPrimaryRoadNetworkColor}
          primaryRoadNetworkWidth={primaryRoadNetworkWidth}
          setPrimaryRoadNetworkWidth={setPrimaryRoadNetworkWidth}
          secondaryRoadNetwork={secondaryRoadNetwork}
          setSecondaryRoadNetwork={setSecondaryRoadNetwork}
          secondaryRoadNetworkColor={secondaryRoadNetworkColor}
          setSecondaryRoadNetworkColor={setSecondaryRoadNetworkColor}
          secondaryRoadNetworkWidth={secondaryRoadNetworkWidth}
          setSecondaryRoadNetworkWidth={setSecondaryRoadNetworkWidth}
          motorwayRoadNetwork={motorwayRoadNetwork}
          setMotorwayRoadNetwork={setMotorwayRoadNetwork}
          motorwayRoadNetworkColor={motorwayRoadNetworkColor}
          setMotorwayRoadNetworkColor={setMotorwayRoadNetworkColor}
          motorwayRoadNetworkWidth={motorwayRoadNetworkWidth}
          setMotorwayRoadNetworkWidth={setMotorwayRoadNetworkWidth}
          motorwayLinkRoadNetwork={motorwayLinkRoadNetwork}
          setMotorwayLinkRoadNetwork={setMotorwayLinkRoadNetwork}
          motorwayLinkRoadNetworkColor={motorwayLinkRoadNetworkColor}
          setMotorwayLinkRoadNetworkColor={setMotorwayLinkRoadNetworkColor}
          motorwayLinkRoadNetworkWidth={motorwayLinkRoadNetworkWidth}
          setMotorwayLinkRoadNetworkWidth={setMotorwayLinkRoadNetworkWidth}
          trunkRoadNetwork={trunkRoadNetwork}
          setTrunkRoadNetwork={setTrunkRoadNetwork}
          trunkRoadNetworkColor={trunkRoadNetworkColor}
          setTrunkRoadNetworkColor={setTrunkRoadNetworkColor}
          trunkRoadNetworkWidth={trunkRoadNetworkWidth}
          setTrunkRoadNetworkWidth={setTrunkRoadNetworkWidth}
          tertiaryRoadNetwork={tertiaryRoadNetwork}
          setTertiaryRoadNetwork={setTertiaryRoadNetwork}
          tertiaryRoadNetworkColor={tertiaryRoadNetworkColor}
          setTertiaryRoadNetworkColor={setTertiaryRoadNetworkColor}
          tertiaryRoadNetworkWidth={tertiaryRoadNetworkWidth}
          setTertiaryRoadNetworkWidth={setTertiaryRoadNetworkWidth}
          streetRoadNetwork={streetRoadNetwork}
          setStreetRoadNetwork={setStreetRoadNetwork}
          streetRoadNetworkColor={streetRoadNetworkColor}
          setStreetRoadNetworkColor={setStreetRoadNetworkColor}
          streetRoadNetworkWidth={streetRoadNetworkWidth}
          setStreetRoadNetworkWidth={setStreetRoadNetworkWidth}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          opacity={opacity}
          setOpacity={setOpacity}
        />
      </Popover>
      <Fab variant="extended" sx={alertFabStyle} onClick={showAlertClicked}>
        <ReportProblemIcon />
      </Fab>
      {showAlert ? <AlertDialog setShowAlert={setShowAlert} /> : null}
      <Fab
        variant="extended"
        sx={weatherAlertFabStyle}
        onClick={showWeatherAlertClicked}
      >
        <ReportProblemIcon />
      </Fab>
      {showWeatherAlert ? (
        <WeatherAlertDialog setShowAlert={setShowWeatherAlert} />
      ) : null}
      <Fab
        variant="extended"
        sx={weatherAlertDetailsFabStyle}
        onClick={showAlertDetailsClicked}
      >
        <ReportProblemIcon />
      </Fab>
      {showAlertDetails ? (
        <WeatherAlertDetails setShowAlert={setShowAlertDetails} />
      ) : null}

      <Fab
        variant="extended"
        sx={warningAlertDetailsFabStyle}
        onClick={showWarningDetailsClicked}
      >
        <ReportProblemIcon />
      </Fab>
      {showWarningDetails ? (
        <WarningDetails setShowAlert={setShowWarningDetails} />
      ) : null}

      <Fab
        variant="extended"
        sx={{
          position: "absolute",
          right: 16,
          bottom: 486,
        }}
        onClick={() => setOpenMapSettings(true)}
      >
        Map Settings
      </Fab>
      {openMapSettings ? (
        <MapSettings setShowAlert={setOpenMapSettings} />
      ) : null}

      <Fab
        variant="extended"
        sx={{
          position: "absolute",
          right: 16,
          bottom: 536,
        }}
        onClick={() => setOpenDateRangePicker(true)}
      >
        Date
      </Fab>
      {openDateRangePicker ? (
        <DateRangePicker setShowAlert={setOpenDateRangePicker} />
      ) : null}
    </Box>
  );
}
