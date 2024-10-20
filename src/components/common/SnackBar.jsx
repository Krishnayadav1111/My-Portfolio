import React from "react";

import { Snackbar as MSnackbar, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";
import images from "helpers/images";

const Snackbar = ({ open, message, onClose, autoHideDuration, children, success }) => {
    const [verticalAlign, setVertical] = React.useState("bottom");
    const [direction, setDirection] = React.useState("up");

    const classes =  useStyles()

    return (
      <MSnackbar
        open={open}
        onClose={onClose}
        message={
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "18px" }}
          >
            {success ? (
              <img
                src={images.checkWIcon}
                style={iconStyle}
              />
            ) : (
              <img
                src={images.infoWIcon}
                style={iconStyle}
              />
            )}
            {message ? message : !success ? "Some error occurred" : "Success"}
          </div>
        }
        autoHideDuration={autoHideDuration}
        children={children}
        TransitionComponent={(props) => (
          <Slide {...props} direction={direction} />
        )}
        severity="info"
        anchorOrigin={{ vertical: verticalAlign, horizontal: "right" }}
        className={classes.root}
        sx={{ display: open ? "block" : "none !important" }}
        ContentProps={{
          className: classes.root,
          style: { backgroundColor: success ? "#0D9276" : "#D04848" },
        }}
      />
    );
};

export default Snackbar;

const iconStyle = {
    width: "24px",
    height: "24px",
    marginRight: "8px",
  };

const useStyles = makeStyles((theme) => ({

    root : {
        "&. css-dhrjuf-MuiPaper-root-MuiSnackbarContent-root":{
            fontSize:"8px !important",
        }
    }
   
  }));