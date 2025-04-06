import { Stack, Switch, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  title: string;
  value: boolean;
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
}

export default function SwitchWithColorPickerListItem({
  title,
  value,
  setValue,
  color,
  setColor,
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile)
    return (
      <>
        <Stack direction={"row"} alignItems={'center'} gap={2}>
          <Typography>{title}</Typography>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: value,
              border: "2px solid #ccc",
              cursor: "pointer"
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
        </Stack>
      </>
    );
  else
    return (
      <>
        <Grid
          container
          alignItems={"center"}
          spacing={2}
          style={{ marginLeft: "15px", marginRight: "15px", height: "56px",  width:"60%" }}
        >
          <Grid size={{ xs: 6 }}>
            <ListItemText primary={title} />
          </Grid>
          
          <Grid size={{ xs: 2 }}>
            {/*<TextField
              label={""}
              type="color"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ width: "100%", marginLeft:"-130px"}}
            />*/}

<div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: value,
              border: "2px solid #ccc",
              cursor: "pointer"
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
            
          </Grid>{/*
          <Grid size={{ xs: 2 }}></Grid>
          <Grid size={{ xs: 2 }}>
            {/*<Switch
              checked={value}
              onChange={(e) => setValue(e.target.checked)}
            />*
          </Grid>*/}
        </Grid>
      </>
    );
}
