import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs(props) {
  const {tabs,showComponent = true,...restProps} = props
  const classes = useStyles();
  const theme = useTheme();
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
        setValue(newValue);
        props.handleTabChange(newValue)
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.tabheading}>
        <Tabs
          value={props.currentUnitTypeTab}
          onChange={handleChange}
          aria-label="basic tabs example"
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
          {...restProps}
        >
          {tabs.map(({ label }, i) => {
            return (
              <Tab label={label} key={i} value={i} className={classes.navigationtabs} />
            );
          })}
        </Tabs>
      </Box>

      { showComponent && tabs.map(({ Component }, i) => (
        <TabPanel value={props.currentUnitTypeTab} index={i} key={i}>
          {Component}
        </TabPanel>
      ))}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  tabheading: {
    backgroundColor: `${theme.palette.blue.main}`,
    borderRadius: "6px",
    padding: "8px !important",
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
