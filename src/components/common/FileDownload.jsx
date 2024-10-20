import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { InputLabel } from "@mui/material";
import images from "helpers/images";

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
    // justifyContent: "center",
    alignItems: "center",
    gap: "5px",
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

  spanText: {
    color: theme.palette.grey?.[600],
  },
  downloadLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  download: {
    display: "flex",
    height: "24px",
    width: "24px",
    padding: "6.633px 6.63px 6.63px 6.633px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "14px",
    border: "1px solid var(--Text-black, #101828)",
    backgroundColor: "FFF",
  },
  downloadIcon: {
    fontSize: "24px",
    height: "14.737px",
    width: "14.737px",
  },
  btnContainer: {
    display: "flex",
    gap: "10px",
  },
}));

function CommonFileDownload({ fileUrl, fileName, label ,onFileDelete,name }) {
  const classes = useStyles();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  const dynamicFileName = fileUrl?.split("documents/")[1];
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
          <img
            src="/assets/icons/file.svg"
            alt="file"
            className={classes.file}
          />
          <div className={classes.label}>
            {fileUrl ? dynamicFileName : fileName}
          </div>
        </div>
        <div className={classes.btnContainer}>
          <a
            href={fileUrl}
            download={fileName}
            className={classes.downloadLink}
          >
            <span className={classes.download} onClick={handleDownload}>
              <img
                src={images.downloadIcon}
                className={classes.downloadIcon}
                alt="download"
              />
            </span>
          </a>
          <span onClick={()=>onFileDelete({name,group,value:"file-download"})}>
            <img src={images.closeIcon} alt="delete" />
          </span>
        </div>
      </div>
    </>
  );
}

export default CommonFileDownload;