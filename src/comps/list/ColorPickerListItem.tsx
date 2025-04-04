import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  title: string;
  value: string;
  setValue: (value: string | ((prevVar: string) => string)) => void;
}

export default function ColorPickerListItem({ title, value, setValue }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile)
    return (
      <>
        <Stack direction={"row"} alignItems={'center'} gap={2}>
          <Typography>{title}</Typography>
          <div
            style={{
              width: "30px",
              height: "30px",
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
          marginLeft={{ xs: 0, sm: "15px" }}
          marginRight={{ xs: 0, sm: "15px" }}
          height={{ xs: "auto", sm: "56px" }}
        >
          <Grid size={{ xs: 10 }}>
            <ListItemText primary={title} />
          </Grid>
          <Grid xs={2}>
            <div
              style={{
                width: "40px",
                height: "40px",
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
          </Grid>
        </Grid>
      </>
    );
}
