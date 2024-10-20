import React from "react";
import Stack from "components/common/Stack";
import Box from "components/common/Box";
import Text from "components/common/Text";
import cx from "classnames";
import { makeStyles, createStyles } from "@mui/styles";

const HorizontalStepper = (props) => {
  const { currentStepsId, stepperData } = props;
  const classes = useStyles();


  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="start"
      sx={{ flex: 1 }}
    >
      {stepperData.map((item, index) => {
        let isInprogress = false;
        let isCompleted = false;

        if (currentStepsId > item.id) {
          isCompleted = true;
        } else if (currentStepsId === item.id) {
          isInprogress = true;
        }


        return (
          <React.Fragment key={`risk_stepper_index_${index}`}>
            {index !== 0 && (
              <Box sx={{ flex: 1, marginTop: "1rem" }}>
                <Box className={classes.dottedLine} />
              </Box>
            )}

            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={1.5}
              px={2}
            >
              <Box
                className={cx({
                  [classes.numBox]: true,
                  [classes.numBoxActive]: isInprogress,
                  [classes.numBoxComplete]: isCompleted,
                })}
              >
                <Text variant="small">{item.id}</Text>
              </Box>
              <Box>
                <Text variant="small">{item.label}</Text>
              </Box>
            </Stack>
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    dottedLine: {
      borderTop: "2px dashed #e5e5e5",
      width: "50%",
      height: 0,
    },
    dottedLineActive: {
      borderTop: "2px dashed #45AC70",
    },
    numBox: {
      color: "#A2A7AE",
      border: "1px solid #A2A7AE",
      borderRadius: "50%",
      height: "2rem !important",
      width: "2rem !important",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    numBoxActive: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      borderColor: "#f0f8ff",
      height: "2.3rem",
      width: "2.3rem",
    },
    numBoxComplete: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      borderColor: "#f0f8ff",
      height: "2.3rem",
      width: "2.3rem",
    },
    text: {
      color: "#fffff",
      whiteSpace: "noWrap",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    textActive: {
      color: theme.palette.primary.main,
    },
    textCompleted: {
      color: theme.palette.primary.main,
    },
  })
);

export default HorizontalStepper;
