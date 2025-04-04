import { ErrorBoundary } from "react-error-boundary";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse.tsx";
import PoweredByFooterComp from "./PoweredByFooterComp";
import PressureComp from "./PressureComp";
import TemperatureComp from "./PrimarySensorComp.tsx";
import RainfallComp from "./RainfallComp.tsx";
import WetBulbComp from "./WetBulbComp.tsx";
import WindSpeedComp from "./WindSpeedComp";

interface Props {
  details: DeviceDetailsResponse;
}

export default function TabbedData({ details }: Props) {
  return (
    <>
      <ErrorBoundary fallback={<div>Error loading the temperature details</div>}>
        <TemperatureComp details={details} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error loading the wind details</div>}>
        <WindSpeedComp details={details} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error loading the pressure details</div>}>
        <PressureComp details={details} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error loading the rainfall details</div>}>
        <RainfallComp details={details} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error loading the wet-bulb details</div>}>
        <WetBulbComp details={details} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error loading the footer</div>}>
        <PoweredByFooterComp />
      </ErrorBoundary>
    </>
  );
}
