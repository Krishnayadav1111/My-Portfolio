import React from "react";
import { Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function TowerTabs({
  activeTower,
  handleTabChange,
  towerData,
  isEdit,
  editTowerData,
  onTabClick,
  activeTowerId,
}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.tabheading}>
      {isEdit ? (
        <Tabs
          value={activeTowerId}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { background: "none" } }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="lab API tabs example"
          defaultValue={activeTowerId}
          sx={{
            "& button.Mui-selected": {
              backgroundColor: `${theme.palette.blue.light100}`,
              color: `${theme.palette.blue.main} !important`,
              fontWeight: "600 !important",
              borderRadius: "8px",
            },
          }}
        >
          {editTowerData?.map((tab, index) => (
            <Tab
              key={index}
              label={tab?.name}
              value={tab?.id}
              sx={{ textTransform: "none" }}
              className={classes.navigationtabs}
              onClick={() => onTabClick(tab?.id)}
            />
          ))}
        </Tabs>
      ) : (
        <Tabs
          value={activeTower - 1}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { background: "none" } }}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& button.Mui-selected": {
              backgroundColor: `${theme.palette.blue.light100}`,
              color: `${theme.palette.blue.main} !important`,
              fontWeight: "600 !important",
              borderRadius: "8px",
            },
          }}
        >
          {Array.from(
            { length: parseInt(towerData?.totalTowersCount) },
            (_, index) => {
              return (
                <Tab
                  key={index}
                  label={`Tower ${index + 1}`}
                  className={classes.navigationtabs}
                />
              );
            }
          )}
        </Tabs>
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  tabheading: {
    backgroundColor: `${theme.palette.blue.main}`,
    borderRadius: "6px",
    padding: "8px !important",
    height: "64px !important",
    marginBottom: "1.3rem",
  },
  navigationtabs: {
    width: "182px !important",
    color: `${theme.palette.common.white} !important`,
    height: "40px !important",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    textTransform: "capitalize !important",
    padding: "6px !important",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      display: "none",
      backgroundColor: "orange",
    },
  },
}));
