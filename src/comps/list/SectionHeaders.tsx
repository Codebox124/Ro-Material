import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeaders({ title }: SectionHeaderProps) {
  return (
    <Box px={2}>
      <Typography variant={"overline"} color={"textSecondary"} textAlign={"left"}>
        {title}
      </Typography>
    </Box>
  );
}
