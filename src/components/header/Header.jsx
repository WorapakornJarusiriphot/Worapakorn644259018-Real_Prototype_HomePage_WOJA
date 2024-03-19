import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import DrawerMobileNavigation from "../DrawerMobileNavigation";

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div>
    <AppBar sx={{ background: "#FFFFFF" }}>
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="black"
          aria-label="menu"
          onClick={handleDrawerOpen}
          sx={{ mr: 2 }}
        >
    <DrawerMobileNavigation />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "left", color: "black" }}
        >
          DiceDreams
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "gray", color: "white", marginRight: "10px" }}
        >
          สมัครสมาชิก
        </Button>
        <Button
          variant="contained"
          sx={{ background: "red", color: "white", marginRight: "10px" }}
        >
          เข้าสู่ระบบ
        </Button>
        {/* <CircleNotificationsIcon sx={{ color: "black", size: "15" }} /> */}
      </Toolbar>
    </AppBar>

    </div>
  );
}

export default Header;
