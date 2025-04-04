import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Switch } from "@mui/material";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid2";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AlertItemsExpansionDetails from "../AlertItemsExpansionDetails.tsx";

interface Props {
  title: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));
export default function AlertItems({ title }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ backgroundColor: "#2E2E2E", color: "white" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 1, alignItems: "stretch" }}
      >
        <Grid size={{ xs: 10 }}>
          <Typography variant={"h5"} display="inline">
            {title}
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {expanded ? <ExpandLessIcon /> : <ChevronRightIcon />}
          </ExpandMore>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <Switch />
        </Grid>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AlertItemsExpansionDetails />
      </Collapse>
    </Card>
  );
}
