import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";
const useStyles = makeStyles(theme => ({
  accordianItem: {
    margin: "16px 0",
    backgroundColor: "#1a2d47",
    borderRadius: "1rem !important",
    "& > div.MuiAccordionSummary-root": {
      paddingLeft: "0px"
    },
    "& .MuiAccordionSummary-content": {
      margin: "0px"
    },
    "& > .Mui-expanded": {
      boxShadow:
        "0px 3px 6px -3px var(--token-d8c673d1-b7f8-4b94-ae76-528c29586337, rgba(0, 0, 0, 0.7))",
      borderRadius: "1rem"
    }
  },
  accordianIcon: {
    padding: "25px",
    borderRadius: "1rem !important",
    backgroundColor: "#203b5c",
    "& svg": {
      stroke: "rgb(31, 229, 104)",
      fill: "chartreuse",
      strokeWidth: 0.1,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  },
  title: {
    padding: "16px 12px"
  },
  accordianDetail: {
    display: "block"
  },
  textMute: {
    color: "#8291a4 !important"
  },
  textRight: {
    textAlign: "right"
  },
  textBlue: {
    color: "#107dcb !important"
  },
  textBlueSvg: {
    stroke: "#107dcb !important"
  },
  iconPosition:{
    transform: "rotate(180deg)"
  }
}));
function OrderItems(props) {
  const classes = useStyles();
  return (
    <>
      <Accordion className={classes.accordianItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.textBlueSvg} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordianIcon}>
            {props.item.status == "Returned" ? (
              <SubdirectoryArrowRightIcon className={classes.iconPosition} />
            ) : (
              <CheckCircleOutlineOutlinedIcon />
            )}
          </div>
          <div className={classes.title}>
            <Typography className={classes.heading}>
              {props.item.status}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.textMute}
            >
              {props.item.date}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordianDetail}>
          <div>
            <Typography variant="caption" className={classes.textMute}>
              Order Amount:
            </Typography>
            &nbsp;
            <Typography variant="caption">{props.item.orderAmount}</Typography>
          </div>
          <div>
            <Typography variant="caption" className={classes.textMute}>
              Order Number:
            </Typography>
            &nbsp;
            <Typography variant="caption">{props.item.orderNumber}</Typography>
          </div>
          <div className={classes.textRight}>
            <Typography variant="caption" className={classes.textBlue}>
              DETAILS
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default OrderItems;
