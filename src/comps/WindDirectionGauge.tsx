import GaugeComponent from "react-gauge-component";

interface Props {
  direction: number;
}

export default function WindDirectionGauge({ direction }: Props) {
  const upTick = (deg: number, upBy: number) => {
    return deg + upBy;
  };

  const downTick = (deg: number, lowerBy: number) => {
    return deg - lowerBy;
  };

  const directionUsingDegrees = (val: number): string => {
    if (val < 0) {
      val = val + 360;
    } else if (val > 360) {
      val = val % 360;
    }
    let windDir = "";
    if (val >= 0 && val < 22.5) {
      windDir = "N";
    } else if (val >= 22.5 && val < 45) {
      windDir = "NNE";
    } else if (val >= 45 && val < 67.5) {
      windDir = "NE";
    } else if (val >= 67.5 && val < 90) {
      windDir = "ENE";
    } else if (val >= 90 && val < 112.5) {
      windDir = "E";
    } else if (val >= 112.5 && val < 135) {
      windDir = "ESE";
    } else if (val >= 135 && val < 157.5) {
      windDir = "SE";
    } else if (val >= 157.5 && val < 180) {
      windDir = "SSE";
    } else if (val >= 180 && val < 202.5) {
      windDir = "S";
    } else if (val >= 202.5 && val < 225) {
      windDir = "SSW";
    } else if (val >= 225 && val < 247.5) {
      windDir = "SW";
    } else if (val >= 247.5 && val < 270) {
      windDir = "WSW";
    } else if (val >= 270 && val < 292.5) {
      windDir = "W";
    } else if (val >= 292.5 && val < 315) {
      windDir = "WNW";
    } else if (val >= 315 && val < 337.5) {
      windDir = "NW";
    } else if (val >= 337.5 && val < 360) {
      windDir = "NNW";
    }
    return windDir;
  };

  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        width: 0.3,
        padding: 0.05,
        cornerRadius: 1,
        subArcs: [
          {
            limit: downTick(direction, 45),
            color: "#f44336",
          },
          {
            limit: upTick(direction, 45),
            color: "#aa2e25",
          },
          {
            limit: upTick(direction, 90),
            color: "#f44336",
          },
        ],
      }}
      pointer={{
        color: "white",
        length: 1.0,
        width: 15,
        elastic: true,
      }}
      labels={{
        valueLabel: {
          formatTextValue: (value) => ""
        },
        tickLabels: {
          type: "outer",
          defaultTickValueConfig: {
            formatTextValue: (value: any) => directionUsingDegrees(value),
            style: { fontSize: 15 },
          },
          ticks: [
            {
              value: downTick(direction, 45),
            },
            { value: direction },
            { value: upTick(direction, 45) },
          ],
        },
      }}
      value={direction}
      minValue={downTick(direction, 90)}
      maxValue={upTick(direction, 90)}
    />
  );
}
