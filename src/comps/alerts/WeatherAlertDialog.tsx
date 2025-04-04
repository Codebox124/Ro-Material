import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import * as React from "react";
import BadgedListItem from "../list/BadgedListItem.tsx";
import SectionHeaders from "../list/SectionHeaders.tsx";
import AlertItemsExpansionDetails from "./AlertItemsExpansionDetails.tsx";

interface Props {
  setShowAlert: (value: boolean) => void;
}

export default function WeatherAlertDialog({ setShowAlert }: Props) {
  const [expandTornadoWarning, setExpandTornadoWarning] = React.useState(false);
  const [expandSevereThunderstormWarning, setExpandSevereThunderstormWarning] =
    React.useState(false);
  const [expandWinterStormWarning, setExpandWinterStormWarning] =
    React.useState(false);
  const [expandDenseFogAdvisory, setExpandDenseFogAdvisory] =
    React.useState(false);
  const [expandFloodAdvisory, setExpandFloodAdvisory] = React.useState(false);
  const [expandRedFlagWarning, setExpandRedFlagWarning] = React.useState(false);
  const [expandFireWeatherWatch, setExpandFireWeatherWatch] =
    React.useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };
  return (
    <>
      <Dialog
        fullScreen={false}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "515px",
            },
          },
        }}
      >
        <Box padding={"20px"}>
          <nav aria-label="Storm-Based">
            {/*Storm-Based*/}
            <SectionHeaders title={"Storm-Based"} />
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/*1. Tornado Warning*/}
              <BadgedListItem
                title={"Tornado Warning"}
                badgeValue={"12"}
                value={expandTornadoWarning}
                setValue={setExpandTornadoWarning}
                expandComp={<AlertItemsExpansionDetails />}
              />
              {/*2. Severe Thunderstorm Warning*/}
              <BadgedListItem
                title={"Severe Thunderstorm Warning"}
                badgeValue={"121"}
                value={expandSevereThunderstormWarning}
                setValue={setExpandSevereThunderstormWarning}
                expandComp={<AlertItemsExpansionDetails />}
              />
            </List>
          </nav>
          <nav aria-label="Winter Weather">
            {/*Winter Weather*/}
            <SectionHeaders title={"Winter Weather"} />
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/*1. Winter Storm Warning*/}
              <BadgedListItem
                title={"Winter Storm Warning"}
                badgeValue={"12"}
                value={expandWinterStormWarning}
                setValue={setExpandWinterStormWarning}
                expandComp={<AlertItemsExpansionDetails />}
              />
            </List>
          </nav>
          <nav aria-label="Non-Precip">
            {/*Non-Precip*/}
            <SectionHeaders title={"Non-Precip"} />
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/*1. Dense Fog Advisory*/}
              <BadgedListItem
                title={"Dense Fog Advisory"}
                badgeValue={"12"}
                value={expandDenseFogAdvisory}
                setValue={setExpandDenseFogAdvisory}
                expandComp={<AlertItemsExpansionDetails />}
              />
            </List>
          </nav>
          <nav aria-label="Hydro">
            {/*Hydro*/}
            <SectionHeaders title={"Hydro"} />
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/*1. Flood Advisory*/}
              <BadgedListItem
                title={"Flood Advisory"}
                badgeValue={"12"}
                value={expandFloodAdvisory}
                setValue={setExpandFloodAdvisory}
                expandComp={<AlertItemsExpansionDetails />}
              />
            </List>
          </nav>
          <nav aria-label="Fire Weather">
            {/*Fire Weather*/}
            <SectionHeaders title={"Fire Weather"} />
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/*1. Red Flag Warning*/}
              <BadgedListItem
                title={"Red Flag Warning"}
                badgeValue={"12"}
                value={expandRedFlagWarning}
                setValue={setExpandRedFlagWarning}
                expandComp={<AlertItemsExpansionDetails />}
              />

              {/*2. Fire Weather Watch*/}
              <BadgedListItem
                title={"Fire Weather Watch"}
                badgeValue={"12"}
                value={expandFireWeatherWatch}
                setValue={setExpandFireWeatherWatch}
                expandComp={<AlertItemsExpansionDetails />}
              />
            </List>
          </nav>
        </Box>
      </Dialog>
    </>
  );
}
