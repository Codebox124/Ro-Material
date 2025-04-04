import { Button } from "@mui/material";

interface Props {
  title: string;
}

export default function TagButton({ title }: Props) {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: 5,
        backgroundColor: "#007bff",
        padding: "0px 5px",
        fontSize: "14px",
        textTransform: "none",
        color: "white",
        fontWeight: "700",
        margin: "2px",
      }}
    >
      {title}
    </Button>
  );
}
