import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WeatherAlertsIcon from "@mui/icons-material/CrisisAlert";
import DataOverlaysIcon from "@mui/icons-material/TravelExplore";
import CustomLocationsIcon from "@mui/icons-material/WhereToVote";
import AddCustomLocationIcon from "@mui/icons-material/Add";
import CyclonePortNetworkIcon from "@mui/icons-material/Hub";

import Close from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import GeneralSettingsIcon from "@mui/icons-material/Settings";
import ManageSubscriptionsIcon from "@mui/icons-material/PolyLine";
import InfoAndSupportIcon from "@mui/icons-material/Help";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import {useColorScheme} from "@mui/material/styles";
import {Mode} from "@mui/system/cssVars/useCurrentColorScheme";
import RoModeSelector from "./RoModeSelector";
import {Collapse, Switch} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import Divider from "@mui/material/Divider";

export default function MenuBar() {

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState('');

  const {mode = 'system', setMode} = useColorScheme();

  return (

    <AppBar
      position="fixed"
      color="transparent"
      style={{boxShadow: 'none'}}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white'
            },
          }}

          onClick={() => setOpen(true)}
        >
          <MenuIcon/>
        </IconButton>

      </Toolbar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{
          width: 320,
        }} p={2}>
          <Grid container direction={'row'} sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}>
            <Grid>

              <Typography variant="h6" fontWeight={800}>RadarOmega</Typography>
            </Grid>
            <Grid>
              <Button onClick={() => setOpen(false)}>
                <Close color={'action'}/>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={'column'} spacing={2}>
            <TextField variant={'filled'} label={'Search'} fullWidth/>
            <RoModeSelector/>
          </Grid>
        </Box>
        <Box px={2}>
          <Typography fontWeight={400} color={'textSecondary'}>
            General
          </Typography>
        </Box>

        <List component="nav">
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenMenu(openMenu == 'weather-alerts' ? '' : 'weather-alerts')}>
              <ListItemIcon>
                <WeatherAlertsIcon/>
              </ListItemIcon>
              <ListItemText primary={'Weather Alerts'}/>
              {openMenu == 'weather-alerts' ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>

          <Collapse in={openMenu == 'weather-alerts'} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="United States"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Canada"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Germany"/>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider/>
          </Collapse>


          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenMenu(openMenu == 'data-overlays' ? '' : 'data-overlays')}>
              <ListItemIcon>
                <DataOverlaysIcon/>
              </ListItemIcon>
              <ListItemText primary={'Data Overlays'}/>
              {openMenu == 'data-overlays' ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openMenu == 'data-overlays'} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Mesoscale Discussions"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Severe Weather"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Tropical Weather"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Hydrological Outlooks"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Fire Weather"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Winter Weather"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Climatological Outlooks"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="METARS"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Marine Tools"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Surface Fronts"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Surface Fronts"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Storm Reports"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Lightning Detection"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Nexrad History"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Spotter Network"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Power Outages"/>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider/>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenMenu(openMenu == 'custom-locations' ? '' : 'custom-locations')}>
              <ListItemIcon>
                <CustomLocationsIcon/>
              </ListItemIcon>
              <ListItemText primary={'Custom Locations'}/>
              {openMenu == 'custom-locations' ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openMenu == 'custom-locations'} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Custom Location 1"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Custom Location 2"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Custom Location 3"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding color={'yellow'}>
                <ListItemButton color={'green'}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText color={'red'}>
                    <Grid container spacing={2} alignItems={'center'}>
                      <AddCustomLocationIcon sx={{ fontSize: 20 }} color={'primary'} />
                      <Typography color={'primary'}>
                        Add Location
                      </Typography>

                    </Grid>
                  </ListItemText>

                </ListItemButton>
              </ListItem>
            </List>
            <Divider/>
          </Collapse>


          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenMenu(openMenu == 'cyclone-port-network' ? '' : 'cyclone-port-network')}>
              <ListItemIcon>
                <CyclonePortNetworkIcon/>
              </ListItemIcon>
              <ListItemText primary={'cyclonePORT Network'}/>
              {openMenu == 'cyclone-port-network' ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={openMenu == 'cyclone-port-network'} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem>
                <ListItemIcon/>
                <ListItemText
                  primary="cyclonePORT"
                  secondary={'200 Active'}
                />
                <Switch />
              </ListItem>
              <ListItem>
                <ListItemIcon/>
                <ListItemText
                  primary="Project MesoVort"
                  secondary={'100 Active'}
                />
                <Switch />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon/>
                  <ListItemText primary="Device Settings"/>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider/>
          </Collapse>
        </List>
        <Box px={2}>
          <Typography fontWeight={400} color={'textSecondary'}>
            Settings
          </Typography>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GeneralSettingsIcon/>
              </ListItemIcon>
              <ListItemText primary={'General'}/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageSubscriptionsIcon/>
              </ListItemIcon>
              <ListItemText primary={'Manage Subscriptions'}/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoAndSupportIcon/>
              </ListItemIcon>
              <ListItemText primary={'Info & Support'}/>
            </ListItemButton>
          </ListItem>

        </List>
        <Grid container sx={{marginTop: 'auto'}} p={2} justifyContent={'end'}>
          <Grid>
            <Button onClick={() => {
              const modes = ['system', 'light', 'dark'];
              const index = modes.indexOf(mode);
              setMode(modes[(index + 1) % modes.length] as Mode);
            }}>{mode}</Button>
          </Grid>
        </Grid>
      </Drawer>
    </AppBar>
  );
}
