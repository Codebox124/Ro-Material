import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

interface SectionHeaderProps {
  title: string;
  isChecked: boolean;
  onToggle: () => void;
}

export default function SectionHeaders({ title, isChecked, onToggle }: SectionHeaderProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={0}
      py={1}
      sx={{
       
        color: "white", 
        borderRadius: "8px", 
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Switch
        checked={isChecked}
        onChange={onToggle}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#fff",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#007bff", 
          },
        }}
      />
    </Box>
  );
}
