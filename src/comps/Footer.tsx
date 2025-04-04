import {
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

import {
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Grid from "@mui/material/Grid2";
import logo from "../assets/cycloneport.png";

// Styled components
const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  color: "#999999",
  "& .MuiLink-root": {
    color: "inherit",
    "&:hover": {
      color: "#3498db",
    },
  },
}));

const SocialIcons = styled(Box)({
  display: "flex",
  gap: "1rem",
  marginTop: "1rem",
  justifyContent: "center",
});

const ContactLink = styled(Link)({
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#3498db",
  },
});

const Footer: React.FC = () => {
  const iconColor = { color: "green" };
  return (
    <FooterWrapper>
      <Box sx={{ py: 8, backgroundColor: "#1B416F" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* About Section */}
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 3 }}>
              <Box>
                <img src={logo} width={250} />
                <br />
                <br />
                <Typography
                  variant="body1"
                  sx={{ mb: 3 }}
                  color={"#FFFFFF"}
                  align={"left"}
                >
                  Our Mission: To provide a platform that will allow a wide
                  array of organizations to work together and share critical
                  real-time video and sensor data during severe weather
                  situations.
                </Typography>
                <SocialIcons>
                  <IconButton
                    sx={{ color: "#666666", "&:hover": { color: "#3498db" } }}
                  >
                    <FacebookRoundedIcon style={iconColor} fontSize={"large"} />
                  </IconButton>
                  <IconButton
                    sx={{ color: "#666666", "&:hover": { color: "#3498db" } }}
                  >
                    <TwitterIcon style={iconColor} fontSize={"large"} />
                  </IconButton>
                </SocialIcons>
              </Box>
            </Grid>

            {/* Quick Browse */}
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 3 }}>
              <Typography
                align={"left"}
                style={{ color: "white" }}
                variant="h5"
              >
                <strong>Quick Browse</strong>
              </Typography>
              <br />
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <KeyboardDoubleArrowRightIcon style={{ color: "green" }} />
                  <Link href="#" underline="none" style={{ color: "white" }}>
                    About Us
                  </Link>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <KeyboardDoubleArrowRightIcon style={{ color: "green" }} />
                  <Link href="#" underline="none" style={{ color: "white" }}>
                    Our Services
                  </Link>
                </ListItem>
              </List>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 3 }}>
              <Typography
                align={"left"}
                style={{ color: "white" }}
                variant="h5"
              >
                <strong>Contact Info</strong>
              </Typography>
              <br />

              <Typography
                variant="body2"
                sx={{ mb: 3 }}
                color={"#FFFFFF"}
                align={"left"}
              >
                Reach out to us to learn more about how you can get setup with
                the cyclonePORT weather surveillance system.
              </Typography>
              <List>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ContactLink href="#">
                    <LocationIcon fontSize="small" style={iconColor} />
                    <Typography variant="body2" style={{ color: "white" }}>
                      6805 Dahlonega Hwy, Cumming Georgia
                    </Typography>
                  </ContactLink>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ContactLink href="tel:+1844-737-9328">
                    <PhoneIcon fontSize="small" style={iconColor} />
                    <Typography variant="body2" style={{ color: "white" }}>
                      844-737-9328
                    </Typography>
                  </ContactLink>
                </ListItem>
                <ListItem disablePadding>
                  <ContactLink href="mailto:info@cycloneport.com">
                    <EmailIcon fontSize="small" style={iconColor} />
                    <Typography variant="body2" style={{ color: "white" }}>
                      info@cycloneport.com
                    </Typography>
                  </ContactLink>
                </ListItem>
              </List>
            </Grid>

            {/* Support Section */}
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 3 }}>
              <Typography
                align={"left"}
                style={{ color: "white" }}
                variant="h5"
              >
                <strong>
                  {" "}
                  Need Support?
                  <br />
                  Contact the cyclonePORT Support Team
                </strong>
              </Typography>
              <br />

              <Typography
                variant="body2"
                sx={{ mb: 3 }}
                color={"#FFFFFF"}
                align={"left"}
              >
                cyclonePORT Support Available Monday - Friday | 9AM - 5PM
                Eastern
                <br />
                (Exception of Federal Holidays)
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ContactLink href="mailto:support@cycloneport.com">
                    <EmailIcon fontSize="small" style={iconColor} />
                    <Typography variant="body2" style={{ color: "white" }}>
                      support@cycloneport.com
                    </Typography>
                  </ContactLink>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Copyright */}
      <Box
        sx={{
          bgcolor: "#141414",
          py: 3,
          textAlign: "center",
        }}
      >
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              {/*<Grid container justifyContent="space-between" alignItems="center">*/}
              {/*<Grid xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>*/}
              <Typography variant="body2" sx={{ color: "#666666" }}>
                © Copyright {new Date().getFullYear()}{" "}
                <Link href="#" underline="hover">
                  SDS Weather
                </Link>{" "}
                All Rights Reserved.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 3,
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#666666", "&:hover": { color: "#ffffff" } }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#666666", "&:hover": { color: "#ffffff" } }}
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "#666666", "&:hover": { color: "#ffffff" } }}
                >
                  Sitemap
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
