import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "components/common/Stack";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import CustomButton from "components/common/CustomButton";
import InputLabel from "@mui/material/InputLabel";

export default function TextFieldChip(props) {
  const {
    label = "",
    placeholder = "",
    labelFontSize = "14px",
    placeholderFontSize = "14.5px",
    variant = "outlined",
    size,
    fullWidth = true,
    inputSx,
    sx = {},
    labelSx = {},
    InputProps = {},
    onChange,
    name,
    prefillItems,
    group,
    onDelete,
    configForm,
    ...restprops
  } = props;
  const textFieldStyles = {
    small: {
      fontSize: 12,
    },
    medium: {
      fontSize: 14,
    },
    large: {
      fontSize: 16,
    },
  };

  const sizeStyle = textFieldStyles[size] || textFieldStyles.default;

  const finalSx = {
    ...sizeStyle,
    ...sx,
  };
  const classes = useStyles();
  const theme = useTheme();
  const [amenity, setAmenity] = useState("");
  const [val, setVal] = useState([]);
  useEffect(() => {
    setVal(prefillItems || []);
  }, [prefillItems]);
  const handleTextChange = (e) => {
    setAmenity(e.target.value);
  };

  const handleChange = () => {
    const newAmenities = amenity.split(",").map((item) => item.trim()).filter((item) => item);
    setVal([...val, ...newAmenities]);
    newAmenities.forEach((newAmenity, index) => {
      onChange({ name: `${name}_${val.length + index + 1}`, value: newAmenity, group });
    });
    setAmenity("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <InputLabel sx={{ ...labelSx, fontSize: labelFontSize }}>
        {label}
      </InputLabel>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          value={amenity}
          sx={finalSx}
          InputProps={{
            ...InputProps,
            inputProps: {
              ...InputProps.inputProps,
              style: { fontSize: placeholderFontSize },
            },
          }}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
        <CustomButton
          text="Add"
          size="large"
          color="secondary"
          variant="outlined"
          onClick={handleChange}
        />
      </Stack>
      <Stack
        direction="row"
        className="projectamenities"
        sx={{
          mt: 1,
          width: "auto",
          display: "flex",
          flexWrap: "wrap",
          height: "auto",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            width: "0rem !important",
          },
        }}
      >
        {val?.map((label, index) => {
          return (
            <Chip
              key={index}
              label={label}
              className={classes.amenitychip}
              sx={{
                mt: 2,
                mr: 2,
                "& .MuiChip-deleteIcon": {
                  color: `${theme.palette.primary.main}`,
                },
              }}
              onDelete={() => {
                setVal(val.filter((_, i) => i !== index));
                onDelete({ name, value: label, group, index });
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

const useStyles = makeStyles((theme) => ({
  amenitychip: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
  },
  projectamenities: {
    "&::-webkit-scrollbar": {
      width: "0rem !important",
    },
  },
}));
