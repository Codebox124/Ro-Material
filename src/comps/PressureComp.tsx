import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { color } from "../constants/Color";
import { PRESSURE_GRAPH_COLOR } from "../constants/Color.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";
import ChartCard from "./ChartCard";
import GenericLineChart from "./GenericLineChart";

type PressureCardProps = {
  title: string;
  value: string;
  color: string;
  pressureDiff: string;
};

const PressureCard: FC<PressureCardProps> = ({
  title,
  value,
  color,
  pressureDiff,
}) => {
  const cardStyle = {
    display: "block",
    height: "90%",
    marginBottom: "10%",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="overline" color="textSecondary">
          {title}
        </Typography>
        <Typography color="white" variant={"h4"}>
          {value}
        </Typography>
        <Divider sx={{ borderBottomWidth: 7, bgcolor: color, width: "90%" }} />
        <Typography fontSize={22}>{pressureDiff}</Typography>
      </CardContent>
    </Card>
  );
};

interface Props {
  details: DeviceDetailsResponse;
}

export default function PressureComp({ details }: Props) {
  const getPressure = (): number => {
    const sensor = details.device?.primary_sensor_temp_key as string;
    const history = details.history;
    const array = history[sensor].PRESSURE;
    const arrayLength = array.length;
    return arrayLength > 0 ? parseFloat(array[arrayLength - 1].value) : 0;
  };

  const getSLP = (pressure: number, altitude: number) => {
    return pressure + altitude / 8;
  };

  const getSeaLevelPressure = () => {
    const altitude = details.device?.last_location_alt as number;
    const pressure = getPressure();
    const sensor = details.device?.primary_sensor_temp_key as string;
    const history = details.history;
    const array = history[sensor].PRESSURE;
    return array.length > 0 ? getSLP(pressure, altitude) : 0;
  };

  const getXAxisDataSet = () => {
    const sensor = details.device?.primary_sensor_temp_key as string;
    const history = details.history;
    const array = history[sensor].PRESSURE;
    return array.map((a: any) => new Date(a.telemetry_at));
  };

  const getYAxisDataSet = (): number[] => {
    const sensor = details.device?.primary_sensor_temp_key as string;
    const history = details.history;
    const array = history[sensor].PRESSURE;
    return array.map((a: any) => a.value);
  };

  const gridStyle = {
    marginBottom: "-8%",
  };

  return (
    <div>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Pressure Measurements
        <br />
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6} style={gridStyle}>
          <PressureCard
            title="Pressure"
            value={getPressure().toFixed(1) + " mb"}
            color={color.pressure(getPressure())}
            pressureDiff={(getPressure() / 33.864).toFixed(1) + " inHg"}
          />
        </Grid>
        <Grid size={6} style={gridStyle}>
          <PressureCard
            title="Sea Level Pressure"
            value={getSeaLevelPressure().toFixed(1) + " mb"}
            color={color.pressure(getSeaLevelPressure())}
            pressureDiff={(getSeaLevelPressure() / 33.864).toFixed(1) + " inHg"}
          />
        </Grid>
      </Grid>
      <br />

      <ChartCard
        title="Measurement Trends"
        chart={
          <GenericLineChart
            xDataset={getXAxisDataSet()}
            yDataset={getYAxisDataSet()}
            labelString="Pressure (mb)"
            color={PRESSURE_GRAPH_COLOR}
          />
        }
      />
    </div>
  );
}
