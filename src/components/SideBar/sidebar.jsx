import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import navbar from "./../../navbar";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    "& > div": {
      backgroundColor: "#01132e",
      color: "#8291a4"
    },
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "& svg": {
      stroke: "#fff"
    },
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  },
  sideBarBg: {
    backgroundColor: "#01132e"
  },
  drawerWeb: {
    "& > div": {
      backgroundColor: "#01132e",
      color: "#8291a4"
    }
  },
  iconStyle: {
    fontSize: "20px"
  },
  menuText: {
    marginTop: "18px",
    "& span": {
      fontSize: "12px"
    }
  },
  navMenu: {
    flexShrink: 0,
    userSelect: "none",
    width: "110px",
    height: "110px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%",
    overflow: "visible",
    borderRadius: "32px",
    transform: "none",
    textAlign: "center",
    backgroundColor: "#010c1c",
    marginBottom: "10px",
    boxShadow: "5px 1px 8px 0px #010c1c",
    "&:hover": {
      background: "#1a2d47"
    }
  },
  navMenuList: {
    padding: "20px"
  },
  closeMenuButton:{
      color:"#fff"
  }
}));
function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
    const drawer = (
      <div classes={classes.sideBarBg}>
        <List className={classes.navMenuList}>
          {navbar.map((menu, index) => (
            <ListItem button key={index} className={classes.navMenu}>
              <div className={classes.iconStyle}>
                <i className={menu.icon}></i>
              </div>
              <ListItemText primary={menu.name} className={classes.menuText} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <>
        <nav className={classes.drawer}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true
              }}
              className={classes.drawerWeb}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer className={classes.drawer} variant="permanent">
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </>
    );
}

export default SideBar;
