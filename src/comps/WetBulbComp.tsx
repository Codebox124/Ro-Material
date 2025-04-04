import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { WETBULB_GRAPH_COLOR } from "../constants/Color.tsx";
import { DeviceDetailsResponse } from "../dto/DeviceDetailsResponse";
import {
  appendDegree,
  get15MinsAvg,
  get5MinsAvg,
  getWetbultLatest,
  getXAxisDataSet,
  getYAxisDataSet,
  threatLevel,
} from "../utils/Wetbulb.tsx";
import ChartCard from "./ChartCard";
import GenericLineChart from "./GenericLineChart";
import TagButton from "./TagButton.tsx";
import ThreatLevelIndicator from "./ThreatLevelIndicator.tsx";

interface Props {
  details: DeviceDetailsResponse;
}

export default function WetBulbComp({ details }: Props) {
  const [title, bgColor, tColor, threatLevelIndex] = threatLevel(details);

  return (
    <div>
      <Typography variant="h5" sx={{ mb: 1 }}>
        WetBulb Globe Assessment
        <br />
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Typography variant="h2" color={bgColor}>
            <strong>{getWetbultLatest(details).toFixed(1)}°</strong>
          </Typography>

          <TagButton title={"5 min: " + appendDegree(get5MinsAvg(details))} />
          <TagButton title={"15 min: " + appendDegree(get15MinsAvg(details))} />
        </Grid>
        <Grid size={6}>
          <Typography variant="h6" color="textprimary" align={"center"}>
            Threat Level
          </Typography>
          <br />
          <ThreatLevelIndicator level={threatLevelIndex} />
        </Grid>
      </Grid>
      <br />
      <Box textAlign="center">
        <Button
          variant="contained"
          style={{
            borderRadius: 5,
            backgroundColor: bgColor,
            padding: "3px 6px",
            fontSize: "18px",
            fontWeight: "700",
            textTransform: "none",
            color: tColor,
          }}
        >
          {title}
        </Button>
      </Box>

      <ChartCard
        title="Measurement Trends"
        chart={
          <GenericLineChart
            xDataset={getXAxisDataSet(details)}
            yDataset={getYAxisDataSet(details)}
            labelString="Pressure (mb)"
            color={WETBULB_GRAPH_COLOR}
          />
        }
      />
    </div>
  );
}
