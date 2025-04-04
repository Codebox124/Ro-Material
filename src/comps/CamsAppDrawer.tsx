import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { CamsMarker } from "../dto/CamsMarker.tsx";
import { CamsBar } from "./CamsBar.tsx";

interface Props {
  drawerWidth: number;
  locations: CamsMarker[];
}

export default function CamsAppDrawer({ drawerWidth, locations }: Props) {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          marginTop: 80,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="right"
      >
        <Toolbar />
        <CamsBar
          locations={locations.length > 5 ? locations.slice(0, 5) : locations}
          drawerWidth={drawerWidth}
        />
      </Drawer>
    </div>
  );
}
