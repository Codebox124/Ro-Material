import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  title: string;
  buttonClicked?: () => void;
}

export default function HyperlinkListItem({ title, buttonClicked }: Props) {
  return (
    <>
      <ListItem disablePadding >
        <ListItemButton style={{padding: "0px"}} onClick={buttonClicked}>
          <ListItemText primary={title} style={{ color: "#8080FF" }} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
