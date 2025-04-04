import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import cycloneportImage from "../assets/cycloneport.png";

export default function PoweredByFooterComp() {
  return (
    <div>
      <Grid container
            rowSpacing={1}
            columnSpacing={{xs: 1, sm: 2, md: 3}}
            justifyContent="center"
            alignItems="center" >
        <Grid size={6} >
          <Typography align="center">
            <strong>POWERED BY</strong>
            <br/>
          </Typography>
          <img
            src={cycloneportImage}
            alt="import"
            style={{width: "100%"}}
          ></img>
          <br/>
          <Typography align="center">
            To learn more visit our website
            www.cycloneport.com
            <br/>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
