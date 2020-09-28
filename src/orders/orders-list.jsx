import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OrderItems from "./order-items";
import demo from "./demo.jsx";
const useStyles = makeStyles(theme => ({
  accordianList: {
    width: "70%",
    margin: "0 auto"
  }
}));
function OrdersList() {
  const classes = useStyles();
  const listItems = demo.map(item => <OrderItems item={item} />);
  return (
    <>
      <div className={classes.accordianList}>{listItems}</div>
    </>
  );
}
export default OrdersList;
