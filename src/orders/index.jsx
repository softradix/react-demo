import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import OrdersList from "./orders-list";

const useStyles = makeStyles(theme => ({
  mainSection: {
    backgroundColor: "transparent",
    height: "100vh"
  },
  paper: {
    backgroundColor: "transparent"
  },
  title: {
    textAlign: "center"
  },
  backIcon: {
    float: "left",
    fontSize: "18px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
function Orders() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.mainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.title}>
            <div className={classes.titleSection}>
              <Typography variant="h6" gutterBottom>
                <ArrowBackIosIcon className={classes.backIcon} />
                My Orders
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <OrdersList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Orders;
