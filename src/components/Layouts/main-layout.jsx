import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../SideBar/sidebar";
import Orders from "../../orders";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
const useStyles = makeStyles(theme => ({
  content: {
    marginLeft: "150px",
    paddingTop: "5%",
    backgroundColor: "#010c1c",
    "& *": {
      color: "#fff"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0"
    }
  }
}));
function MainLayout() {
  const classes = useStyles();
  return (
    <div className="MainLayout">
      <SideBar />
      <div className={classes.content}>
        <Switch>
          <Route path="/" component={Orders} />
        </Switch>
      </div>
    </div>
  );
}

export default MainLayout;
