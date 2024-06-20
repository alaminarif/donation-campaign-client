"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

//
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import {} from "@emotion/react";
import { Avatar, colors, createTheme, Stack, ThemeProvider } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

type INavItems = {
  route: string | null | undefined;
  pathname: string;
};
const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Donation",
    pathname: "/donations",
  },
  {
    route: "Donation",
    pathname: "/donations",
  },
  {
    route: "Campaing",
    pathname: "/campaings",
  },
  {
    route: "blog",
    pathname: "/blogs",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "About",
    pathname: "/login",
  },
];

/**
 *
 * @param props
 * @returns
 */

const items = ["Home", "Donation", "Campaing", "Blog", "About", "Contact"];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "mx-auto" }}>
      <Toolbar>
        <Image src={logo} width={100} height={100} alt="logo" />
      </Toolbar>
      <Divider />
      <List sx={{ textAlign: "mx-auto" }}>
        <Box className="w-full text-right">
          {navItems.map((item, index) => (
            <Link key={index} href={item.pathname} className="font-bold">
              <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
                {item.route}
              </Typography>
            </Link>
          ))}
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
              N
            </Avatar>
            <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
              <AssignmentIcon />
            </Avatar>
          </Stack>
        </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="!shadow-none h-16">
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: " 0px 0px" }}
        className=" shadow-inner outline-none border-none static mt-6 !"
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Toolbar>
            {/* <Image src={logo} width={100} height={100} alt="logo" /> */}
            <Toolbar disableGutters>
              <Image src={logo} width={100} height={100} alt="logo" />
            </Toolbar>
          </Toolbar>

          <Box className="w-full text-right">
            {navItems.map((item, index) => (
              <Link key={index} href={item.pathname}>
                <Button>{item.route}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {/* {drawer} */}
        </Drawer>
      </nav>
    </Box>
  );
}
