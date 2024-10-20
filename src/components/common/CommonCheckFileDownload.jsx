import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { InputLabel, Checkbox, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  downloadContainer: {
    border: "1px solid #A2A7AE",
    backgroundColor: theme.palette.grey.white,
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    height: "38px",
    flex: "1 0 0",
  },
  file: {
    width: "34px",
    height: "34px",
    padding: "8.5px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "17px",
    backgroundColor: theme.palette.grey?.[100],
  },
  field: {
    display: "flex",
    padding: "8.5px",
    justifyContent: "space-evenly",
    alignItems: "center",
    // gap: "12rem",
  },
  customText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "subtile1",
    color: theme.palette.grey.light,
  },
  label: {
    color: "#101828",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "24px",
  },
}));

function CommonCheckFileDownload({ fileUrl, fileName, label,name }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  
  const handleCheckboxToggle = () => {
    setChecked(!checked);
    const updatedFiles = !checked
      ? [...selectedFiles, { fileUrl, fileName }]
      : selectedFiles.filter((file) => file.fileName !== fileName);
    setSelectedFiles(updatedFiles);
    handleSend(updatedFiles); // Pass updated files to handleSend
  };

  const handleSend = () => {
    setSelectedFiles([]);
  };
  
  return (
    <>
      <InputLabel
        sx={{
          marginBottom: "5px",
          fontSize: "0.875rem",
        }}
      >
        {label}
      </InputLabel>
      <div className={classes.downloadContainer}>
        <div className={classes.field}>
        <div className={classes.label}>{fileName}</div>
          <Checkbox
            checked={checked}
            onChange={handleCheckboxToggle}
            inputProps={{ "aria-label": "primary checkbox" }}
          /> 
        </div>
      </div>
    </>
  );
}

export default CommonCheckFileDownload;
