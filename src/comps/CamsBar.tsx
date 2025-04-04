import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { CamsMarker } from "../dto/CamsMarker.tsx";
import CamsDetailsDialog from "./CamsDetailsDialog.tsx";
import { DrawerItem } from "./DrawerItem.tsx";

interface Props {
  locations: CamsMarker[];
  drawerWidth: number;
}

export const CamsBar = ({ locations, drawerWidth }: Props) => {
  const [open, setOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");

  function handleClicked(marker: CamsMarker) {
    setDeviceId(marker.uuid);
    setOpen(true);
  }

  return (
    <>
      <Box sx={{ overflow: "auto" }} className={"bar-background"}>
        <List>
          {locations.map((marker) => (
            <ListItem
              key={marker.uuid}
              disablePadding
              className={"bar-background"}
              onClick={() => handleClicked(marker)}
            >
              <DrawerItem marker={marker} drawerWidth={drawerWidth} />
            </ListItem>
          ))}
        </List>
      </Box>
      {open ? (
        <CamsDetailsDialog setOpen={setOpen} deviceId={deviceId} />
      ) : null}
    </>
  );
};
