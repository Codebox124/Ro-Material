import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

type ChartProps = {
  title: string;
  chart: ReactNode;
};

const ChartCard: FC<ChartProps> = ({ title, chart }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <br />
        {title}
      </Typography>
      <Card>
        <CardContent
          sx={{
            height: {
              xs: 200,
              md: 300,
            },
          }}
        >
          {chart}
        </CardContent>
      </Card>
      <br />
    </>
  );
};

export default ChartCard;
