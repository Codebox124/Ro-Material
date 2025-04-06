import {
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
  SwitchProps
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";
import { styled } from '@mui/material/styles';
interface Props {
  title: string;
  value: boolean;
  setValue: (value: boolean | ((prev: boolean) => boolean)) => void;
  color: string;
  setColor: (value: string | ((prev: string) => string)) => void;
}

export default function SwitchWithColorPickerListItem({
  title,
  value,
  setValue,
  color,
  setColor,
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleColorClick = () => {
    const input = document.createElement("input");
    input.type = "color";
    input.value = color;
    input.style.visibility = "hidden";
    document.body.appendChild(input);
    input.click();
    input.addEventListener("input", (e) => {
      setColor((e.target as HTMLInputElement).value);
    });
    input.addEventListener("blur", () => {
      document.body.removeChild(input);
    });
  };

  const ColorCircle = (
    <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: value,
              border: "2px solid #ccc",
              cursor: "pointer",
            }}
            onClick={() => {

              const input = document.createElement('input');
              input.type = 'color';
              input.value = value;
              input.click();
              input.addEventListener('input', (e) => {
                setValue((e.target as HTMLInputElement).value);
              });
            }}
          />
  );

  const CustomSwitch = (
    <IOSSwitch
      checked={value}
      onChange={(e) => setValue(e.target.checked)}
      
    />
  );

  if (isMobile) {
    return (
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Typography>{title}</Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          {ColorCircle}
          {CustomSwitch}
        </Stack>
      </Stack>
    );
  }

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      marginLeft={{ xs: 0, sm: "15px" }}
      marginRight={{ xs: 0, sm: "15px" }}
      height={{ xs: "auto", sm: "56px" }}
    >
      <Grid xs={6}>
        <ListItemText primary={title} />
      </Grid>
      <Grid xs={2}>{ColorCircle}</Grid>
      <Grid xs={2}></Grid>
      <Grid xs={2}>{CustomSwitch}</Grid>
    </Grid>
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