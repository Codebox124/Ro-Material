import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import BackgroundSetting from "./reusable/BackgroundSetting.tsx";
import IndividualSetting from "./reusable/IndividualSetting.tsx";
import MapLayerSetting from "./reusable/MapLayerSetting.tsx";
import MapProjectionSetting from "./reusable/MapProjectionSetting.tsx";
import SettlementSetting from "./reusable/SettlementSetting.tsx";

interface Props {
  projection: string;
  setProjection: (value: string | ((prevVar: string) => string)) => void;
  satelliteLayer: boolean;
  setSatelliteLayer: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  contourLayer: boolean;
  setContourLayer: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  admin2Boundary: boolean;
  setAdmin2Boundary: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  admin2BoundaryColor: string;
  setAdmin2BoundaryColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  admin2BoundaryWidth: string;
  setAdmin2BoundaryWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  admin1Boundary: boolean;
  setAdmin1Boundary: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  admin1BoundaryColor: string;
  setAdmin1BoundaryColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  admin1BoundaryWidth: string;
  setAdmin1BoundaryWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  admin0Boundary: boolean;
  setAdmin0Boundary: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  admin0BoundaryColor: string;
  setAdmin0BoundaryColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  admin0BoundaryWidth: string;
  setAdmin0BoundaryWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMajorLabel: boolean;
  setSettlementMajorLabel: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  settlementMajorLabelFont: string;
  setSettlementMajorLabelFont: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMajorLabelFontWeight: string;
  setSettlementMajorLabelFontWeight: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMajorLabelFontSize: number;
  setSettlementMajorLabelFontSize: (
    value: number | ((prevVar: number) => number)
  ) => void;
  settlementMajorLabelColor: string;
  setSettlementMajorLabelColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMajorLabelHaloColor: string;
  setSettlementMajorLabelHaloColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMinorLabel: boolean;
  setSettlementMinorLabel: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  settlementMinorLabelFont: string;
  setSettlementMinorLabelFont: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMinorLabelFontWeight: string;
  setSettlementMinorLabelFontWeight: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMinorLabelFontSize: number;
  setSettlementMinorLabelFontSize: (
    value: number | ((prevVar: number) => number)
  ) => void;
  settlementMinorLabelColor: string;
  setSettlementMinorLabelColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  settlementMinorLabelHaloColor: string;
  setSettlementMinorLabelHaloColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  primaryRoadNetwork: boolean;
  setPrimaryRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  primaryRoadNetworkColor: string;
  setPrimaryRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  primaryRoadNetworkWidth: string;
  setPrimaryRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  secondaryRoadNetwork: boolean;
  setSecondaryRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  secondaryRoadNetworkColor: string;
  setSecondaryRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  secondaryRoadNetworkWidth: string;
  setSecondaryRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  motorwayRoadNetwork: boolean;
  setMotorwayRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  motorwayRoadNetworkColor: string;
  setMotorwayRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  motorwayRoadNetworkWidth: string;
  setMotorwayRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  motorwayLinkRoadNetwork: boolean;
  setMotorwayLinkRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  motorwayLinkRoadNetworkColor: string;
  setMotorwayLinkRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  motorwayLinkRoadNetworkWidth: string;
  setMotorwayLinkRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  trunkRoadNetwork: boolean;
  setTrunkRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  trunkRoadNetworkColor: string;
  setTrunkRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  trunkRoadNetworkWidth: string;
  setTrunkRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  tertiaryRoadNetwork: boolean;
  setTertiaryRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  tertiaryRoadNetworkColor: string;
  setTertiaryRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  tertiaryRoadNetworkWidth: string;
  setTertiaryRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  streetRoadNetwork: boolean;
  setStreetRoadNetwork: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  streetRoadNetworkColor: string;
  setStreetRoadNetworkColor: (
    value: string | ((prevVar: string) => string)
  ) => void;
  streetRoadNetworkWidth: string;
  setStreetRoadNetworkWidth: (
    value: string | ((prevVar: string) => string)
  ) => void;
  backgroundColor: string;
  setBackgroundColor: (value: string | ((prevVar: string) => string)) => void;
  opacity: string;
  setOpacity: (value: string | ((prevVar: string) => string)) => void;
}

const MapControls: React.FC<Props> = ({
  projection,
  setProjection,
  satelliteLayer,
  setSatelliteLayer,
  contourLayer,
  setContourLayer,
  admin2Boundary,
  setAdmin2Boundary,
  admin2BoundaryColor,
  setAdmin2BoundaryColor,
  admin2BoundaryWidth,
  setAdmin2BoundaryWidth,
  admin1Boundary,
  setAdmin1Boundary,
  admin1BoundaryColor,
  setAdmin1BoundaryColor,
  admin1BoundaryWidth,
  setAdmin1BoundaryWidth,
  admin0Boundary,
  setAdmin0Boundary,
  admin0BoundaryColor,
  setAdmin0BoundaryColor,
  admin0BoundaryWidth,
  setAdmin0BoundaryWidth,
  settlementMajorLabel,
  setSettlementMajorLabel,
  settlementMajorLabelFont,
  setSettlementMajorLabelFont,
  settlementMajorLabelFontWeight,
  setSettlementMajorLabelFontWeight,
  settlementMajorLabelFontSize,
  setSettlementMajorLabelFontSize,
  settlementMajorLabelColor,
  setSettlementMajorLabelColor,
  settlementMajorLabelHaloColor,
  setSettlementMajorLabelHaloColor,
  settlementMinorLabel,
  setSettlementMinorLabel,
  settlementMinorLabelFont,
  setSettlementMinorLabelFont,
  settlementMinorLabelFontWeight,
  setSettlementMinorLabelFontWeight,
  settlementMinorLabelFontSize,
  setSettlementMinorLabelFontSize,
  settlementMinorLabelColor,
  setSettlementMinorLabelColor,
  settlementMinorLabelHaloColor,
  setSettlementMinorLabelHaloColor,
  primaryRoadNetwork,
  setPrimaryRoadNetwork,
  primaryRoadNetworkColor,
  setPrimaryRoadNetworkColor,
  primaryRoadNetworkWidth,
  setPrimaryRoadNetworkWidth,
  secondaryRoadNetwork,
  setSecondaryRoadNetwork,
  secondaryRoadNetworkColor,
  setSecondaryRoadNetworkColor,
  secondaryRoadNetworkWidth,
  setSecondaryRoadNetworkWidth,
  motorwayRoadNetwork,
  setMotorwayRoadNetwork,
  motorwayRoadNetworkColor,
  setMotorwayRoadNetworkColor,
  motorwayRoadNetworkWidth,
  setMotorwayRoadNetworkWidth,
  motorwayLinkRoadNetwork,
  setMotorwayLinkRoadNetwork,
  motorwayLinkRoadNetworkColor,
  setMotorwayLinkRoadNetworkColor,
  motorwayLinkRoadNetworkWidth,
  setMotorwayLinkRoadNetworkWidth,
  trunkRoadNetwork,
  setTrunkRoadNetwork,
  trunkRoadNetworkColor,
  setTrunkRoadNetworkColor,
  trunkRoadNetworkWidth,
  setTrunkRoadNetworkWidth,
  tertiaryRoadNetwork,
  setTertiaryRoadNetwork,
  tertiaryRoadNetworkColor,
  setTertiaryRoadNetworkColor,
  tertiaryRoadNetworkWidth,
  setTertiaryRoadNetworkWidth,
  streetRoadNetwork,
  setStreetRoadNetwork,
  streetRoadNetworkColor,
  setStreetRoadNetworkColor,
  streetRoadNetworkWidth,
  setStreetRoadNetworkWidth,
  backgroundColor,
  setBackgroundColor,
  opacity,
  setOpacity,
}: Props) => {
  return (
    <Box className="map-state-control" maxWidth={"500px"}>
      <Box className="control-section" margin={"10px"} padding={"10px"}>
        <Typography variant="h6">Map Projection</Typography>
        <Divider />
        <MapProjectionSetting
          projection={projection}
          setProjection={setProjection}
        />
      </Box>

      <Box className="control-section" margin={"10px"} padding={"10px"}>
        <Typography variant="h6">Map Layers</Typography>
        <Divider />
        <MapLayerSetting
          valueSatelliteLayer={satelliteLayer}
          setValueSatelliteLayer={setSatelliteLayer}
          valueSatelliteContours={contourLayer}
          setValueSatelliteContours={setContourLayer}
        />
      </Box>

      <Box className="control-section" margin={"10px"} padding={"10px"}>
        <Typography variant="h6">Administrative Boundaries</Typography>
        <Divider />
        <IndividualSetting
          value={admin2Boundary}
          setValue={setAdmin2Boundary}
          title={"County Boundaries"}
          color={admin2BoundaryColor}
          setColor={setAdmin2BoundaryColor}
          width={admin2BoundaryWidth}
          setWidth={setAdmin2BoundaryWidth}
        />
        <IndividualSetting
          value={admin1Boundary}
          setValue={setAdmin1Boundary}
          title={"State Boundaries"}
          color={admin1BoundaryColor}
          setColor={setAdmin1BoundaryColor}
          width={admin1BoundaryWidth}
          setWidth={setAdmin1BoundaryWidth}
        />
        <IndividualSetting
          value={admin0Boundary}
          setValue={setAdmin0Boundary}
          title={"Country Boundaries"}
          color={admin0BoundaryColor}
          setColor={setAdmin0BoundaryColor}
          width={admin0BoundaryWidth}
          setWidth={setAdmin0BoundaryWidth}
        />
      </Box>

      <Box className="control-section" margin={"10px"} padding={"10px"}>
        <Typography variant="h6">Settlement Labels</Typography>
        <Divider />
        <SettlementSetting
          value={settlementMajorLabel}
          setValue={setSettlementMajorLabel}
          title={"Major Settlement Labels"}
          color={settlementMajorLabelColor}
          setColor={setSettlementMajorLabelColor}
          haloColor={settlementMajorLabelHaloColor}
          setHaloColor={setSettlementMajorLabelHaloColor}
          font={settlementMajorLabelFont}
          setFont={setSettlementMajorLabelFont}
          fontWeight={settlementMajorLabelFontWeight}
          setFontWeight={setSettlementMajorLabelFontWeight}
          fontSize={settlementMajorLabelFontSize}
          setFontSize={setSettlementMajorLabelFontSize}
        />
        <SettlementSetting
          value={settlementMinorLabel}
          setValue={setSettlementMinorLabel}
          title={"Minor Settlement Labels"}
          color={settlementMinorLabelColor}
          setColor={setSettlementMinorLabelColor}
          haloColor={settlementMinorLabelHaloColor}
          setHaloColor={setSettlementMinorLabelHaloColor}
          font={settlementMinorLabelFont}
          setFont={setSettlementMinorLabelFont}
          fontWeight={settlementMinorLabelFontWeight}
          setFontWeight={setSettlementMinorLabelFontWeight}
          fontSize={settlementMinorLabelFontSize}
          setFontSize={setSettlementMinorLabelFontSize}
        />
      </Box>

      <Box className="control-section" margin={"10px"} padding={"10px"}>
        <Typography variant="h6">Road Network</Typography>
        <Divider />
        <IndividualSetting
          value={primaryRoadNetwork}
          setValue={setPrimaryRoadNetwork}
          title={"Primary Road Network"}
          color={primaryRoadNetworkColor}
          setColor={setPrimaryRoadNetworkColor}
          width={primaryRoadNetworkWidth}
          setWidth={setPrimaryRoadNetworkWidth}
        />
        <IndividualSetting
          value={secondaryRoadNetwork}
          setValue={setSecondaryRoadNetwork}
          title={"Secondary Road Network"}
          color={secondaryRoadNetworkColor}
          setColor={setSecondaryRoadNetworkColor}
          width={secondaryRoadNetworkWidth}
          setWidth={setSecondaryRoadNetworkWidth}
        />
        <IndividualSetting
          value={motorwayRoadNetwork}
          setValue={setMotorwayRoadNetwork}
          title={"Motorway Road Network"}
          color={motorwayRoadNetworkColor}
          setColor={setMotorwayRoadNetworkColor}
          width={motorwayRoadNetworkWidth}
          setWidth={setMotorwayRoadNetworkWidth}
        />
        <IndividualSetting
          value={motorwayLinkRoadNetwork}
          setValue={setMotorwayLinkRoadNetwork}
          title={"Motorway Link Road Network"}
          color={motorwayLinkRoadNetworkColor}
          setColor={setMotorwayLinkRoadNetworkColor}
          width={motorwayLinkRoadNetworkWidth}
          setWidth={setMotorwayLinkRoadNetworkWidth}
        />
        <IndividualSetting
          value={trunkRoadNetwork}
          setValue={setTrunkRoadNetwork}
          title={"Motorway Trunk Road Network"}
          color={trunkRoadNetworkColor}
          setColor={setTrunkRoadNetworkColor}
          width={trunkRoadNetworkWidth}
          setWidth={setTrunkRoadNetworkWidth}
        />
        <IndividualSetting
          value={tertiaryRoadNetwork}
          setValue={setTertiaryRoadNetwork}
          title={"Tertiary Road Network"}
          color={tertiaryRoadNetworkColor}
          setColor={setTertiaryRoadNetworkColor}
          width={tertiaryRoadNetworkWidth}
          setWidth={setTertiaryRoadNetworkWidth}
        />
        <IndividualSetting
          value={streetRoadNetwork}
          setValue={setStreetRoadNetwork}
          title={"Street Road Network"}
          color={streetRoadNetworkColor}
          setColor={setStreetRoadNetworkColor}
          width={streetRoadNetworkWidth}
          setWidth={setStreetRoadNetworkWidth}
        />
      </Box>

      <Box className="control-section" margin={"10px"} padding={"10px"}>
        <Typography variant="h6">Background Design Settings</Typography>
        <Divider />
        <BackgroundSetting
          colorPickerTitle={"Background Color"}
          sliderTitle={"Background Opacity"}
          color={backgroundColor}
          setColor={setBackgroundColor}
          opacity={opacity}
          setOpacity={setOpacity}
        />
      </Box>
    </Box>
  );
};

export default MapControls;
