import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";
import { color } from "../constants/Color";
import { WINDSPEED_GRAPH_COLOR } from "../constants/Color.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";
import {
  directionUsingDegrees,
  getWindDirectionDegrees,
  getWindSpeed,
  getXAxisDataSet,
  getYAxisDataSet,
  gustRows,
} from "../utils/Winds";
import ChartCard from "./ChartCard";
import GenericLineChart from "./GenericLineChart";
import WindDirectionGauge from "./WindDirectionGauge";

type WindSpeedCardProps = {
  title: string;
  value: string;
  color: string;
  children: ReactNode;
};

const WindSpeedCard: FC<WindSpeedCardProps> = ({
  title,
  value,
  color,
  children,
}) => {
  const cardStyle = {
    display: "block",
    height: "80%",
    marginBottom: "10%",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="overline" color="textSecondary">
          {title}
        </Typography>
        <Typography color={color} variant={"h4"}>
          {value}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

interface Props {
  details: DeviceDetailsResponse;
}

export default function WindSpeedComp({ details }: Props) {
  const rows = gustRows(details);

  const windDirectionDegrees = getWindDirectionDegrees(details);
  const gridStyle = {
    marginBottom: "-5%",
  };
  return (
    <div>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Wind speed measurement
        <br />
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6} style={gridStyle}>
          <WindSpeedCard
            title="Sustained"
            value={getWindSpeed(details) + " MPH"}
            color={color.windSpeed(getWindSpeed(details))}
            children={<></>}
          />
        </Grid>
        <Grid size={6} style={gridStyle}>
          <WindSpeedCard
            title="Direction"
            value={
              windDirectionDegrees.toFixed(0) +
              "º (" +
              directionUsingDegrees(windDirectionDegrees) +
              ")"
            }
            color="white"
            children={
              <WindDirectionGauge
                direction={Number(windDirectionDegrees.toFixed(0))}
              />
            }
          />
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ mb: 1 }}>
        Gust
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Gust</TableCell>
                  <TableCell align="right">Wind Speed (MPH)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.speed1}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.speed1}
                    </TableCell>
                    <TableCell align="right">{row.speed2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <ChartCard
        title="Measurement Trends"
        chart={
          <GenericLineChart
            xDataset={getXAxisDataSet(details)}
            yDataset={getYAxisDataSet(details)}
            labelString="Wind speed MPH"
            color={WINDSPEED_GRAPH_COLOR}
          />
        }
      />
    </div>
  );
}
