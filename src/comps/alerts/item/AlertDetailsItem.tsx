import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import SectionHeaders from "../../list/SectionHeaders.tsx";

interface Props {
  title: string;
  sectionTitle?: string;
  tornado: string;
  hail: string;
  timestamp: string;
  state: string;
  isSevere?: boolean;
}

export default function AlertDetailsItem({
  title,
  sectionTitle,
  tornado,
  hail,
  timestamp,
  state,
  isSevere = false,
}: Props) {
  return (
    <>
      {sectionTitle && sectionTitle !== "" ? (
        <>
          <SectionHeaders title={sectionTitle} />
        </>
      ) : null}

      <Card
        style={{
          borderColor: "black",
          borderWidth: "1px",
          borderStyle: "solid",
          marginLeft: "15px",
          width: "92%",
          paddingTop: "5px",
          marginBottom: "5px",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1 }}
          sx={{ mb: 1, alignItems: "stretch", paddingLeft: "15px" }}
        >
          <Grid size={{ xs: 7 }}>
            <Typography variant={"h6"} display="inline">
              {title}
            </Typography>
            <LocationOnIcon />
            <MenuBookIcon />
          </Grid>
          <Grid size={{ xs: 5 }}>
            <Typography variant={"subtitle2"} display="inline">
              {"Expires in " + timestamp}
            </Typography>
          </Grid>
          <Grid size={{ xs: 7 }}>
            <Typography variant={"subtitle2"} display="inline">
              {"Tornado: " + tornado.toUpperCase()}
            </Typography>
          </Grid>
          <Grid size={{ xs: 5 }}>
            <Typography variant={"subtitle2"} display="inline">
              {"States: " + state.toUpperCase()}
            </Typography>
          </Grid>
          <Grid size={{ xs: 7 }}>
            <Typography variant={"subtitle2"} display="inline">
              {"Hail: " + hail}
            </Typography>
          </Grid>
          <Grid size={{ xs: 5 }}></Grid>
        </Grid>
        {isSevere ? (
          <Grid size={{ xs: 12 }} style={{ margin: "15px", width: "92%" }}>
            <Card
              sx={{
                backgroundColor: "#f44336",
                color: "red",
                paddingLeft: "5px",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              <Typography
                variant={"caption"}
                display="block"
                color={"black"}
                align="center"
              >
                {"THIS IS A PARTICULARLY DANGEROUS SITUATION. TAKE COVER NOW!"}
              </Typography>
            </Card>
          </Grid>
        ) : null}
        <Grid size={{ xs: 12 }} style={{ margin: "15px", width: "92%" }}>
          <Card
            sx={{
              backgroundColor: "#444444",
              color: "white",
              paddingLeft: "5px",
              marginBottom: "5px",
            }}
          >
            <Typography
              variant={"subtitle2"}
              display="inline"
              style={{ width: "70%" }}
            >
              {state.toUpperCase()}
            </Typography>
          </Card>
        </Grid>
      </Card>
    </>
  );
}
