import React from "react";
import Box from "./Box";
import Stack from "./Stack";
import Text from "./Text";
import CustomButton from "./CustomButton";
import CustomTextField from "./TextField";
import { InputAdornment } from "@mui/material";
import images from "helpers/images";

const DataHeaderCard = ({
  leadsCount,
  headerText,
  subheaderText,
  addLeadButtonText,
  importButtonText,
  filterButtonText,
  textFieldProps,
  onAddLeadClick,
  onImportClick,
  onFilterClick,
  handleChange,
  formFields,
  formData
}) => {
  
  return (
    <Box>
      <Stack
        sx={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={3}
        py={2}
        bgcolor="common.white"
      >
        <Box textAlign="left">
          <Box display="flex" flexDirection="row">
            <Text variant="typo18" color="text.primary">
              {headerText}
            </Text>
            <Text
              ml={1}
              p={1}
              sx={{ borderRadius: "16px" }}
              backgroundColor="#E5F7FF"
              variant="typo12"
              color="#104960"
            >
              {leadsCount} 
            </Text>
          </Box>
          <Text variant="typo14light" color="text.secondary">
            {subheaderText}
          </Text>
        </Box>
        <Box textAlign="right">
          {addLeadButtonText && (
            <CustomButton
              sx={{ padding: "10px,16px" }}
              color="primary"
              size="medium"
              startIcon={
                <img
                  src={images.addIcon}
                  alt="Add Lead icon"
                  width="24"
                  height="24"
                />
              }
              text={addLeadButtonText}
              onClick={onAddLeadClick}
            />
          )}
        </Box>
      </Stack>
      <Stack
        sx={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={3}
        py={2}
        bgcolor="common.white"
      >
        <Box textAlign="left" style={{margin:"-1.4rem 0 1.5rem 0"}}>
          {textFieldProps && (
            <CustomTextField
              size="medium"
              id={formFields?.name}
              name={formFields?.name}
              value={formData[formFields?.name] || ""}
              onChange={handleChange}
              group={formFields?.group}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={images.searchIcon}
                      alt="search-normal"
                      width={"20px"}
                      height={"20px"}
                    />
                  </InputAdornment>
                ),
                sx: { width: "452px", height: "44px", fontSize: "12px" },
              }}
              placeholder="Search"
            />
          )}
        </Box>
        <Box
          textAlign="right"
          flexDirection="row"
          justifyContent="space-between"
        >
          {importButtonText && (
            <CustomButton
              sx={{ marginRight: "26px", padding: "10px,16px" }}
              color="secondary"
              size="medium"
              startIcon={
                <img
                  src={images.importIcon}
                  alt="Import icon"
                  width="24"
                  height="24"
                />
              }
              text={importButtonText}
              onClick={onImportClick}
            />
          )}
          {filterButtonText && (
            <CustomButton
              sx={{ padding: "10px 16px" }}
              color="secondary"
              size="medium"
              startIcon={
                <img
                  src={images.filterIcon}
                  alt="Filter icon"
                  width="24"
                  height="24"
                />
              }
              text={filterButtonText}
              onClick={onFilterClick}
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default DataHeaderCard;
