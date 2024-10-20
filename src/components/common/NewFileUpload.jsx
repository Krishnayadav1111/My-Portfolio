import React, { useEffect, useState } from "react";
import { DropzoneArea } from "react-mui-dropzone";
import { makeStyles } from "@mui/styles";
import Stack from "./Stack";
import CloseIcon from "@mui/icons-material/Close";
import { InputLabel } from "@mui/material";
import images from "helpers/images";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDropzoneArea-root": {
      minHeight: 0,
    },
  },
  dropzone: {
    width: "100%",
    border: "1px dashed #A2A7AE",
    backgroundColor: theme.palette.grey.white,
    borderRadius: "8px",
    padding: "7px 14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    cursor: "pointer",
    minHeight: "38px",
    height: "38px",
  },
  file_dropzone: {
    width: "100%",
    border: "1px solid #A2A7AE",
    backgroundColor: theme.palette.grey.white,
    borderRadius: "8px",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "38px",
    height: "38px",
    fontSize: "14px",
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
  cancel: {
    width: "20px",
    height: "20px",
    padding: "3px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "17px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  customText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "0.875rem",
    color: theme.palette.grey.light,
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  spanText: {
    color: theme.palette.grey?.[600],
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    marginBottom: "10px",
  },
}));

const useStylesForDownload = makeStyles((theme) => ({
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
    downloadContainerMultiple: {
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
      margin: "5px 0 5px"
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
      backgroundColor: "#FFF",
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

  const toCamelCase = (str) => {
    return str
      ?.split(" ")
      ?.map((word) =>
        word === word?.toUpperCase()
          ? word
          : word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
      )
      ?.join(" ");
  };

function NewFileUpload({ handleChange, acceptedFileTypes, multipleFiles, label, name, group, value,canRemove=true , disabled}) {
  const classes = useStyles();
  const classesForDownload = useStylesForDownload();
  const [error, setError] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [multipleUpload, setMultipleUpload] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

  useEffect(() => {
    if (value?.name) {
      setSelectedFileName(value?.name);
    }
    if(typeof value != "string" && value?.length === 0 ) {
      setMultipleUpload(true)
    }
  }, [value]);
  const handleDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles?.length) {
      const unsupportedTypes = rejectedFiles?.map((file) => file?.file?.type).join(", ");
      setError(`Unsupported file types: ${unsupportedTypes}`);
    } else {
      setError("");
      setSelectedFiles(acceptedFiles);
      if (acceptedFiles?.length) {
        if (acceptedFiles?.length === 1) {
          setSelectedFileName(acceptedFiles[0]?.name);
          handleChange({ name, value: acceptedFiles[0], group });
        } else {
          const fileNames = acceptedFiles?.map((file) => file.name).join(", ");
          setSelectedFileName(fileNames);
          handleChange({ name, value: acceptedFiles, group });
        }
      }
    }
  };

  const handleFileRemove = () => {
    handleChange({ name, value: null, group });
    setSelectedFiles([]);
    setSelectedFileName("");
  };

  const minimizedSelectedFileName = (label) => {
    if (label?.length > 30) {
      return `${label?.substring(0, 29)}...`;
    }
    return label;
  };

  const renderFileInfo = (value) => {
    if (typeof value === "object" && value?.[0]?.hasOwnProperty("path") ||value?.hasOwnProperty("path")) {
      return (
        <>
          <InputLabel sx={{ marginBottom: "6px", fontSize: "0.875rem" }}>{label}</InputLabel>
          <div className={classes.file_dropzone}>
            <Stack direction="row" spacing={2} alignItems="center" title={selectedFileName}>
              <img src={images.file} alt="file" className={classes.file} />
              {selectedFileName && <span>{minimizedSelectedFileName(selectedFileName)}</span>}
            </Stack>
            <CloseIcon fontSize="small" className={classes.cancel} onClick={handleFileRemove} />
          </div>
        </>
      );
    }

    if (typeof value === "string") {
      const dynamicFileName = value?.split("documents/")[1];
      return (
        <>
          <InputLabel sx={{ marginBottom: "5px", fontSize: "0.875rem" }}>
            {label}
          </InputLabel>
          <div className={classesForDownload.downloadContainer}>
            <div className={classesForDownload.field} title={dynamicFileName}>
              <img src={images.file} alt="file" className={classesForDownload.file} />
              <div className={classesForDownload.label}>{minimizedSelectedFileName(dynamicFileName)}</div>
            </div>
            <div className={classesForDownload.btnContainer}>
              <a
                href={value}
                download={dynamicFileName}
                className={classesForDownload.downloadLink}
              >
                <span className={classesForDownload.download}>
                  <img
                    src={images.downloadIcon}
                    className={classesForDownload.downloadIcon}
                    alt="download"
                  />
                </span>
              </a>
              {canRemove ? (
                <span onClick={() => handleChange({ name, value: null, group })}>
                  <img src={images.closeIcon} alt="delete" />
                </span>
              ) : null}
            </div>
          </div>
        </>
      );
    }
    if (value?.length || multipleUpload) {
      const isMultiple = value.length > 1;
      return (
        <>
          <InputLabel sx={{ marginBottom: "5px", fontSize: "0.875rem" }}>
            {label}
          </InputLabel>
          <div
            style={{ display: isMultiple ? "flex" : "block", flexWrap: "wrap" }}
          >
            {value.map((fileUrl, index) => {
              const fileName = fileUrl.split("documents/")[1];
              return (
                <div className={classesForDownload.downloadContainerMultiple}>
                  <div
                    key={index}
                    className={classesForDownload.field}
                    title={fileName}
                  >
                    <img
                      src={images.file}
                      alt="file"
                      className={classesForDownload.file}
                    />
                    <div className={classesForDownload.label}>
                      {minimizedSelectedFileName(fileName)}
                    </div>
                    <div
                      className={classesForDownload.btnContainer}
                      style={{ paddingLeft: "132px" }}
                    >
                      <a
                        href={fileUrl}
                        download={fileName}
                        className={classesForDownload.downloadLink}
                      >
                        <span className={classesForDownload.download}>
                          <img
                            src={images.downloadIcon}
                            className={classesForDownload.downloadIcon}
                            alt="download"
                          />
                        </span>
                      </a>
                      {canRemove ? (
                        <span
                          onClick={() =>{
                            handleChange({
                              name,
                              value: value.filter((_, i) => i !== index),
                              group,
                            }),setMultipleUpload(true)
                          }
                          }
                        >
                          <img src={images.closeIcon} alt="delete" />
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {(multipleUpload) ? (
            <div className={classes.root}>
              {error && <p className={classes.errorText}>{error}</p>}
              <InputLabel sx={{ marginBottom: "6px", fontSize: "0.875rem" }}>
                {label}
              </InputLabel>
              <DropzoneArea
                dropzoneClass={classes.dropzone}
                dropzoneText=""
                filesLimit={multipleFiles ? 100 : 1}
                Icon={() => (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src="/assets/icons/solar_upload-square-broken.svg"
                      alt="solar_upload"
                      className={classes.icon}
                    />
                    <p className={classes.customText}>
                      Drag & drop to upload or{" "}
                      <span className={classes.spanText}>Browse</span>
                    </p>
                  </Stack>
                )}
                acceptedFiles={acceptedFileTypes}
                onChange={handleDrop}
              />
            </div>
          ) : null}
        </>
      );
    } 
    return null;
  };
  if (
    (typeof value === "string" && value?.length > 5) ||
    typeof value === "object" ||
    (value?.length && typeof value[0] !== "object")
  ) {
    return renderFileInfo(value);
  } else {
    return (
      <div className={classes.root}>
        {error && <p className={classes.errorText}>{error}</p>}
        <InputLabel sx={{ marginBottom: "6px", fontSize: "0.875rem" }}>
          {toCamelCase(label)}
        </InputLabel>
        <DropzoneArea
          dropzoneClass={classes.dropzone}
          dropzoneText=""
          filesLimit={multipleFiles ? 100 : 1}
          Icon={() => (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <img
                src="/assets/icons/solar_upload-square-broken.svg"
                alt="solar_upload"
                className={classes.icon}
              />
              <p className={classes.customText}>
                Drag & drop to upload or{" "}
                <span className={classes.spanText}>Browse</span>
              </p>
            </Stack>
          )}
          acceptedFiles={acceptedFileTypes}
          onChange={handleDrop}
          dropzoneProps={ { disabled: disabled} }
        />
      </div>
    );
  }
}
export default NewFileUpload;
