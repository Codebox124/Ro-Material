import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Badge, Collapse} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

interface Props {
  title: string,
  badgeValue: string,
  value: boolean,
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void,
  expandComp?: React.JSX.Element
}

export default function BadgedListItem({
                                         title,
                                         badgeValue,
                                         value,
                                         setValue,
                                         expandComp
                                       }: Props) {
  const badgeStyle = {marginLeft: "30px"};

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setValue(!value)}>
          <ListItemText primary={title}/>
          {value ? <ExpandLess/> : <ExpandMore/>}
          <Badge
            color="secondary"
            badgeContent={badgeValue}
            max={999}
            style={badgeStyle}
          />
        </ListItemButton>
      </ListItem>
      <Collapse in={value} timeout="auto" unmountOnExit>
        {expandComp}
      </Collapse>
    </>
  );
}
