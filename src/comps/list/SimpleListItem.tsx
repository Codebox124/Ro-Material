import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  title: string;
  buttonClicked?: () => void;
}

export default function SimpleListItem({ title, buttonClicked }: Props) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={buttonClicked}>
          <ListItemText primary={title} />
          <KeyboardArrowRightIcon />
        </ListItemButton>
      </ListItem>
    </>
  );
}
