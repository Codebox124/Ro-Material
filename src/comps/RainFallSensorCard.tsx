import { CircularProgress, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { RainfallDataUrl } from "../constants/Constants.tsx";
import { RainfallResponse } from "../dto/RainfallResponse.tsx";
import { getEndDate, getStartDate } from "../utils/RainfallUtil.tsx";

type Props = {
  title: string;
  type: string;
  deviceId: string;
  delay: number;
};

export const RainFallSensorCard = ({ title, type, deviceId, delay }: Props) => {
  const [actualValue, setActualValue] = useState(0);
  const [roundedValue, setRoundedValue] = useState("NA");

  useEffect(() => {
    const nowUtc: string = moment.utc().format("YYYY-MM-DD HH:mm:ss");
    const startDate: string = getStartDate(type);
    const endDate: string = getEndDate(nowUtc, type);

    setTimeout(() => {
      axios
        .get<RainfallResponse>(RainfallDataUrl, {
          params: {
            device: deviceId,
            sensor: "RAINGAUGE",
            property: "FLIP",
            function: "SUM",
            key: type,
            start_date: startDate,
            end_date: endDate,
          },
        })
        .then((response) => {
          // console.log("RainFallSensorCard: "+JSON.stringify(response.data));
          setActualValue(response.data.answer.answer);
          setRoundedValue(actualValue.toFixed(2) + ' "');
        });
    }, delay);
    // return () => console.log("RainFallSensorCard cleanup");
  }, [delay, deviceId, type, actualValue]);

  const mouseEnter = () => {
    setRoundedValue(actualValue.toFixed(4) + ' "');
  };

  const mouseExit = () => {
    setRoundedValue(actualValue.toFixed(2) + ' "');
  };

  return (
    <Card onMouseOver={mouseEnter} onMouseOut={mouseExit}>
      <CardContent>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={16} color={"white"} align={"center"}>
            {title}
          </Typography>
          {roundedValue === "NA" ? (
            <CircularProgress
              sx={{
                color: "white",
              }}
              size="2rem"
            />
          ) : (
            <Typography fontSize={19} color={"white"} align={"center"}>
              {roundedValue}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
