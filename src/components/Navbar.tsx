import { useNavigate } from "react-router-dom";
import NavbarProfile from "./NavbarProfile";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Button,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const links = [
  { title: "Home", to: "/" },
  { title: "News", to: "/news" },
  { title: "Profile", to: "/profile" },
  { title: "NotExists", to: "/notexists" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate(),
    handleNavigate = (to: string) => navigate(to);

  return (
    <AppBar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {links.map((link) => (
              <MenuItem
                key={link.to}
                onClick={() => {
                  handleCloseNavMenu();
                  handleNavigate(link.to);
                }}
              >
                <Typography textAlign="center">{link.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {links.map((link) => (
            <Button
              key={link.title}
              onClick={() => handleNavigate(link.to)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {link.title}
            </Button>
          ))}
        </Box>

        <NavbarProfile />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
