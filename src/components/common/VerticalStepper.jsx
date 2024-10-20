import React from "react";
import Stack from "components/common/Stack";
import Box from "components/common/Box";
import Text from "components/common/Text";
import cx from "classnames";
import { makeStyles, createStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const VerticalStepper = (props) => {
  const { stepperData, onSelectStep, selectedStep, onSelectCard } = props;
  const classes = useStyles();
  const theme = useTheme();

  const cardStyle = (stepId) => ({
    backgroundColor: selectedStep === stepId ?`${theme.palette.primary.light}` : `${theme.palette.common.white}`,
    cursor: "pointer",
    borderRadius: "50%",
    padding: selectedStep === stepId ? "11.1px 13px 10px 12px" : "10px",
    color: selectedStep === stepId ? `${theme.palette.common.white}` : `${theme.palette.primary.light}`,
  });

  return (
    <Stack margin="50px 0 50px 0" direction="column" sx={{ flex: 1 }}>
      {stepperData.map((item, index) => {
        return (
          <Box
            key={`vertical_stepper_index_${index}`}
            onClick={() => {
              onSelectStep(index);
              onSelectCard(index);
            }}
          >
            {index !== 0 && (
              <Box sx={{ flex: 1 }}>
                <Box className={classes.stepsLine} />
              </Box>
            )}

            <Stack direction="column" marginLeft="15px" spacing={1.5} px={2}>
              <Box
                className={cx({
                  [classes.numBox]: true,
                  [classes.selectedStep]: selectedStep === index,
                })}
                onClick={() => {
                  onSelectCard(index);
                  onSelectStep(index);
                }}
              >
                <Text style={cardStyle(index)} variant="small">
                  {item.id}
                </Text>
              </Box>
              <Box>
                <Text variant="small">{item.label}</Text>
              </Box>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    stepsLine: {
      borderLeft:`2px solid ${theme.palette.grey?.[90]}`,
      width: "50%",
      height: "64px",
      alignItems: "center",
      marginLeft: "50px",
    },
    numBox: {
      color: `${theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.light}`,
      borderRadius: "50%",
      padding: "20px",
      height: "2rem !important",
      width: "2rem !important",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: `${theme.palette.common.white}`,
      whiteSpace: "noWrap",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    textActive: {
      color: theme.palette.primary.main,
    },
  })
);

export default VerticalStepper;
