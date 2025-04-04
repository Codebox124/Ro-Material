import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  xDataset: Date[];
  yDataset: number[];
  labelString: string;
  color: string;
}

const GenericLineChart = ({
  xDataset,
  yDataset,
  labelString,
  color,
}: Props) => (
  <LineChart
    className="custom-y-padding-bottom"
    xAxis={[
      {
        data: xDataset,
      },
    ]}
    series={[
      {
        data: yDataset,
        showMark: false,
        color: color,
      },
    ]}
    yAxis={[{ label: labelString }]}
    {...customize}
  />
);

const customize = {
  margin: { top: 5, bottom: 6, left: 60, right: 0 },
};

export default GenericLineChart;
