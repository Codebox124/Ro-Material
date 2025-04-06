import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch, {SwitchProps} from "@mui/material/Switch";
import { styled } from '@mui/material/styles';

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
      <IOSSwitch
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




const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(23px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#007bff',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));