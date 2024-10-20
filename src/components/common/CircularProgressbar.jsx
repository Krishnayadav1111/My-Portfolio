import React from "react";
import { CircularProgressbar as MyCircularProgressBar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/styles";

const CircularProgressbar = ({
  percentage,
  purposeText,
  backgroundColor,
}) => {
  const theme = useTheme();
  const circleSize = 129;
  return (
    <>
      <Box display="inline-block" alignItems="center" margin="20px">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Box width={circleSize} height={circleSize}>
              <MyCircularProgressBar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: backgroundColor,
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  textColor: theme.palette.common.black,
                  trailColor: theme.palette.grey?.[100],
                })}
              />
            </Box>
          </Grid>
          <Grid item>
            <Stack marginTop="1rem" width="10rem">
              <p>{purposeText}</p>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CircularProgressbar;