import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

interface Props {
  title: string;
  value: boolean;
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  expandComp?: React.JSX.Element;
}

export default function ExpandableListItem({
  title,
  value,
  setValue,
  expandComp,
}: Props) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setValue(!value)}>
          <ListItemText primary={title} />
          {value ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={value} timeout="auto" unmountOnExit>
        {expandComp}
      </Collapse>
    </>
  );
}
