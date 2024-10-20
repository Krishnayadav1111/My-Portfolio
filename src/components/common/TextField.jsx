import React from "react";
import MTextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useLocation } from "react-router-dom";

function CustomTextField(props) {
  const {
    label = "",
    placeholder = "",
    labelFontSize = "14px", // Add a default font size for the label
    placeholderFontSize = "14px", // Add a default font size for the placeholder
    variant = "outlined",
    size="small",
    fullWidth = true,
    inputSx,
    sx = {},
    labelSx = {},
    InputProps,
    onChange = () => {},
    name,
    group,
    dropdownName = "",
    index,
    disabled = false,
    fieldId="",
    ...restprops
  } = props;

  const location = useLocation();

  const textFieldStyles = {
    small: { fontSize: 14 },
    medium: { fontSize: 14 },
    large: { fontSize: 14 },
  };

  const sizeStyle = textFieldStyles[size] || textFieldStyles.default;

  const finalSx = {
    ...sizeStyle,
    ...sx,
  };

  const toCamelCase = (str) => {
    return str
      ?.split(" ")
      ?.map((word) =>
        word === word?.toUpperCase()
          ? word // Keep the word as is if it's fully capitalized
          : word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
      )
      ?.join(" ");
  };

  const renderLabel = (label) => {
    const title = label.split("*");
    const camelCasedLabel = toCamelCase(title[0]);

    return title.length > 1 ? (
      <span>
        {camelCasedLabel}
        <span style={{ color: "red" }}>*</span>
        {title.slice(1).join("*")}
      </span>
    ) : (
      toCamelCase(label)
    );
  };

  const conditionalInputSx = location.pathname === "/project/project-info"
    ? {
        "& .MuiInputBase-input": {
          cursor: "default !important",
        },
      }
    : {};

  return (
    <div>
      <InputLabel
        sx={{
          fontSize: labelFontSize,
          marginTop: label ? "0" : "20.3px",
          ...labelSx,
        }}
      >
        {renderLabel(label)}
      </InputLabel>
      <MTextField
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        sx={finalSx}
        placeholder={toCamelCase(placeholder)}
        label={props.select ? toCamelCase(placeholder) : null}
        InputProps={{
          ...InputProps,
          sx: {
            ...InputProps?.sx,
            ...sizeStyle,
            ...conditionalInputSx,
          },
        }}
        onChange={(e) =>
          onChange({
            name,
            value: e.target.value,
            group,
            dropdownName,
            index,
            dropdownName,
            fieldId,
          })
        }
        disabled={disabled}
        {...restprops}
      />
    </div>
  );
}

export default React.memo(CustomTextField);
