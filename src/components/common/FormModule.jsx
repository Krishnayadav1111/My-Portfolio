import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import CustomTextField from "./TextField";
import CommonDropzone from "./FileUpload";
import Radio from "./Radio";
import TextFieldChip from "./TextFieldChip";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommonFileDownload from "./FileDownload";
import Header from "components/common/Header";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import MultiSelect from "./MultiSelect";
import MultipleSelect from "./MultiSelect";
import DatePicker from "components/common/DatePicker";
import TimePickerComponent from "./TimePicker";
import CommonCheckFileDownload from "./CommonCheckFileDownload";
import NewFileUpload from "./NewFileUpload";

const FormModule = ({
  fieldsData,
  handleFileChange,
  handleChange,
  formData,
  options,
  handleDelete, 
  headerImage,
  headerLabel = "",
  onDelete,
  prefillItems
}) => {
  // const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const classes = useStyles();
  const textFieldStyle = {
    color: "var(--text-black, #101828)",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    marginTop: "5px",
  };

  const handleOnBlurEvents = ({ name, value, validations }) => {
    if (!validations || !validations.length) {
      return;
    }
    try {
      let newFormErrors = { ...formErrors };
  
      validations.forEach((fn) => {
        const result = fn(value);
        if (result) {
          newFormErrors = { ...newFormErrors, [name]: result };
          return;
        }
        delete newFormErrors[name];
      });
  
      setFormErrors(newFormErrors);
    } catch (error) {
      console.log("Validation", error);
    }
  };

  const handleTextChange = (data,field,formData) => {

    const {value} = data
    const validations =  field?.onFocus
    const {group,dropdownName,fieldId,name} = field 

    if (!validations || !validations.length) {
      handleChange({name,value,group,dropdownName,fieldId,index:""})
      return;
    }
    try {
      let newFormErrors = { ...formErrors };
  
      validations.forEach((fn) => {
        const result = fn(value);
        if (result) {
          newFormErrors = { ...newFormErrors, [name]: result };
          return;
        }
        handleChange({name,value,group,dropdownName,fieldId,index:""})
        delete newFormErrors[name];
      });
  
      setFormErrors(newFormErrors);
    } catch (error) {
      console.log("Validation", error);
    }
  };



  const OutputForm = () => {
    return (
      <Grid container spacing={2}>
        {fieldsData?.length && fieldsData?.map((field) => {
          const {visible = true} = field
          if(!visible){
            return null
          }
          if (field.type === "areaSelector") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <Grid sx={{ width: "80%" }}>
                    <CustomTextField
                      label={field.label}
                      type={field.type}
                      placeholder={field.placeholder}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={(value) => {
                        handleTextChange(value,field,formData);
                      }}
                      onBlur={()=> setFormErrors({})}
                      InputProps={{
                        //  style: { fontSize: 16 }
                         }}
                      InputLabelProps={{
                        style: {
                          fontSize: 16,
                          height: "56px",
                        },
                      }}
                      labelSx={{
                        marginBottom: "6px",
                        fontSize: "0.875rem",
                      }}
                      error={!!formErrors[field.name]}
                      helperText={formErrors[field.name] || ""}
                      group={field.group}
                    />
                  </Grid>
                  <Grid sx={{ width: "20%" }}>
                    <CustomTextField
                      group={field.group}
                      label={field.selectLabel}
                      select
                      placeholder={field.selectLabel}
                      dropdownName={field?.dropdownName}
                      id={field.dropdownName}
                      name={field.dropdownName}
                      value={formData[field.dropdownName] || ""}
                      onChange={handleChange}
                      InputProps={{
                        //  style: { fontSize: 16 }
                         }}
                      InputLabelProps={{
                        style: {
                          fontSize: 16,
                          height: "56px",
                        },
                      }}
                      labelSx={{
                        marginBottom: "6px",
                        fontSize: "0.875rem",
                      }}
                    >
                      {field.options.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          style={textFieldStyle}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  </Grid>
                </Grid>
              </Grid>
            );
          }

          if (field.type === "textfield") {
            return (
              <Grid item {...field.gridSize} key={field?.name}>
                <CustomTextField
                  label={field?.label}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  id={field?.name}
                  name={field?.name}
                  value={formData?.[field?.name] || ""}
                  onChange={(value) => {
                    handleTextChange(value,field,formData);
                  }}
                  fullWidth
                  // onBlur={(e) => {
                  //   handleOnBlurEvents({
                  //     name: field?.name,
                  //     value: formData?.[field.name],
                  //     validations: field?.onBlur,
                  //   });
                  // }}
                  onBlur={()=> setFormErrors({})}
                  InputProps={{ style: { fontSize: "14px" } }}
                  InputLabelProps={{
                    style: {
                      fontSize: 16,
                      height: "56px",
                    },
                  }}
                  labelSx={{
                    marginBottom: "6px",
                    fontSize: "0.875rem",
                  }}
                  error={!!formErrors?.[field?.name]}
                  helperText={formErrors?.[field?.name] || ""}
                  group={field?.group}
                  disabled={field?.disabled}
                  fieldId={formData?.fieldId || ""}
                />
              </Grid>
            );
          }
          if (field.type === "title") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
               <h1>{field.label}</h1>
              </Grid>
            );
          }

          if (field.type === "textfieldchip") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <TextFieldChip
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  onDelete={handleDelete}
                  prefillItems={prefillItems}
                  fullWidth
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{
                    style: {
                      fontSize: 16,
                      height: "56px",
                    },
                  }}
                  labelSx={{
                    marginBottom: "6px",
                    fontSize: "0.875rem",
                  }}
                  error={!!formErrors[field.name]}
                  helperText={formErrors[field.name] || ""}
                  group={field.group}
                  configForm={field.configForm}
                />
              </Grid>
            );
          }

          if (field.type === "radio") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <Radio
                  group={field.group}
                  label={field.label}
                  name={field.name}
                  value={formData?.[field.name] || ""}
                  options={field.options}
                  handleChange={handleChange}
                  labelSx={{
                    marginBottom: "6px",
                    fontSize: "0.875rem",
                    whiteSpace:"wrap"
                  }}
                />
              </Grid>
            );
          }

          if (field.type === "select") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <CustomTextField
                  group={field.group}
                  label={field.label}
                  select
                  placeholder={formData?.[field.name] ? "" : field.placeholder}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ 
                    // style: { fontSize: 16 }
                   }}
                  InputLabelProps={{
                    shrink : false,
                    style: {
                      fontSize: "14px",
                      height: "56px",
                    },
                  }}
                  labelSx={{
                    marginBottom: "6px",
                    // fontSize: "0.875rem",
                  }}
                >
                  {field?.options?.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      style={textFieldStyle}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
            );
          }
          if (field.type === "multipleSelect") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <MultipleSelect
                  group={field.group}
                  label={field.label}
                  placeholder={field.placeholder}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  fullWidth
                  options={field.options}
                />
              </Grid>
            );
          }
          if (field.type === "file") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <CommonDropzone
                  group={field.group}
                  name={field.name}
                  label={field?.label}
                  acceptedFileTypes={field.accept}
                  handleChange={handleChange}
                  multipleFiles={false}
                />
              </Grid>
            );
          }

          if (field.type === "file-download") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <CommonFileDownload
                  fileUrl={formData?.[field?.name] || ""}
                  fileName={field?.fileName || field?.name}
                  label={field?.label || field?.name}
                  onFileDelete={onDelete}
                  name={field.name}
                  group={field.group}
                />
              </Grid>
            );
          }

          if (field.type === "newFileUpload") {    
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <NewFileUpload
                  group={field.group}
                  name={field.name}
                  label={field?.label}
                  acceptedFileTypes={field?.accept}
                  handleChange={handleChange}
                  multipleFiles={field?.multipleFiles}
                  onChange={handleChange}
                  value={formData?.[field?.name] || field?.url}
                  canRemove={field?.canRemove}
                  disabled={field?.disable}
                />
              </Grid>
            );
          }

          if (field.type === "file-check-download") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <CommonCheckFileDownload
                  fileUrl={field.fileUrl || field.url}
                  fileName={field.fileName || field.name}
                  label={field?.label || field.name}
                  name={field.name}
                />
              </Grid>
            );
          }

          if (field.type === "date") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <DatePicker
                  name={field.name}
                  group={field.group}
                  label={field.label}
                  onChange={handleChange}
                  value={formData?.[field.name] || ""}
                />
              </Grid>
            );
          }
          if (field.type === "textArea") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <CustomTextField
                  group={field.group}
                  label={field.label}
                  placeholder={field.placeholder}
                  multiline
                  rows={4}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: textFieldStyle }}
                />
              </Grid>
            );
          }
          if (field.type === "time") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <TimePickerComponent
                  name={field.name}
                  group={field.group}
                  label={field.label}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                />
              </Grid>
            );
          }

          if (field.type === "addButton") {
            return (
              <Grid container>
                <Button
                  sx={{ mt: 3, ml: 2 }}
                  className={classes.addServiceButton}
                  onClick={() =>
                    handleChange({ name: field.name, value: field.value })
                  }
                >
                  <span className={classes.addSign}>+</span>
                  <span
                    className={classes.addProjectText}
                  >
                    {field.label}
                  </span>
                </Button>
              </Grid>
            );
          }
          if (field.type === "saveButton") {
            return (
              <Grid container  sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                height: "100%",
              }}>
                <Grid item sm={2} md={2.5}>
                    <Button
                      sx={{
                        mt: "26px",
                        height: "68px !important",
                        height: "39px !important",
                      }}
                      className={classes.addServiceButton}
                      onClick={() =>
                        handleChange({ name: field.name, value: field.value })
                      }
                    >
                      <span className={classes.addProjectText}>
                        {field.label}
                      </span>
                    </Button>
                </Grid>
              </Grid>
            );
          }

          if (field.type === "deleteButton") {
            return (
              <Grid item {...field.gridSize}>
                 <Grid item sm={10} md={10.6}></Grid>
                <Grid item sm={2} md={1.4}>
                <Button
                  sx={{
                    mt: "26px",
                    height: "68px !important",
                    height: "39px !important",
                  }}
                  className={classes.addServiceButton}
                  onClick={() =>
                    handleChange({ name: field.name, value: field.value })
                  }
                >
                  <img
                    src="/assets/icons/deleteicon.svg"
                    alt={field.label}
                    width="24"
                    height="24"
                  />
                </Button>
                </Grid>
              </Grid>
            );
          }

          if (field.type === "removeButton") {
            return (
              <Grid container>
                <Grid item sm={10} md={10.6}></Grid>
                <Grid item sm={2} md={1.4}>
                  <Button
                    sx={{ mt: 3.3, height: "68% !important" }}
                    className={classes.addServiceButton}
                    onClick={() =>
                      handleChange({ name: field.name, value: field.value })
                    }
                  >
                    <span
                      className={classes.deleteButtonText}
                    >
                      <img
                        src="/assets/icons/deleteicon.svg"
                        alt={field.label}
                        width="24"
                        height="24"
                        style={{ marginRight: "0.3rem" }}
                      />
                      <span>Remove</span>
                    </span>
                  </Button>
                </Grid>
              </Grid>
            );
          }
          if (field.type === "checkbox") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <FormControlLabel
                  group={field.group}
                  name={field.name}
                  label={<Typography variant="body5">{field.label}</Typography>}
                  size="small"
                  value={formData[field.name] || ""}
                  control={<Checkbox />}
                  onChange={handleChange}
                />
                <p>{field.sublabel}</p>
              </Grid>
            );
          }

          // return (
          //   <Grid item {...field.gridSize} key={field.name}>
          //     {/* You can add any custom content for other field types here */}
          //   </Grid>
          // );
          if (field.type === "text") {
            const labelStyle = field.labelStyle || {};
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <p style={labelStyle}>{field.label}</p>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  };

  return (
    <Grid>
      {headerLabel && <Header label={headerLabel} image={headerImage} />}
      {OutputForm()}
    </Grid>
  );
};

export default FormModule;

const useStyles = makeStyles((theme) => ({
  addServiceButton: {
    height: "36px !important",
    border: `1px solid ${theme.palette.blue.main} !important`,
    borderRadius: "8px !important",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize !important",
    padding: "8px 16px !important",
    color: `${theme.palette.blue.main}`,
    fontWeight: "600 !important",
    textDecoration: "none !important",
  },
  addSign: {
    width: "20px !important",
    height: "20px !important",
    lineHeight: "20px",
    fontSize: "17px",
  },
  addProjectText: {
    height: "20px !important",
    fontSize: "13px",
  },
  deleteButtonText: {
    height: "20px !important",
    fontSize: "13px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
