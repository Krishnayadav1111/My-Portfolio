import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Text from './Text';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme?.typography?.fontWeightRegular
        : theme?.typography?.fontWeightMedium,
    fontSize: "18px"
  };
}

export default function MultipleSelectPlaceholder(props) {

  const { group, label, placeholder, id, name, value = [], onChange, options, ...restProps } = props
  const theme = useTheme();
  const handleChange = (event) => {
    const {
      target: { value:data },
    } = event;
    onChange({
      name,
      value: Array.isArray(data) ? data : [data], // Ensure it's always an array
      group,
    });
  };
  
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

  const handleRenderValue = (selected) => {
    if (selected?.length === 0) {
      return (
        <p style={{ fontSize: "14px", opacity: 0.4 }}>
          {toCamelCase(placeholder)}
        </p>
      );
    }
    const selectedLabels = options
      ?.filter((item) => selected?.includes(item?.value))
      ?.map((item) => item?.label);

    return (
      <p style={{ fontSize: "15px", whiteSpace: "break-spaces" }}>
        {selectedLabels?.join(", ")}
      </p>
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Text variant="typo14" sx={{ marginBottom: "5px" }} color="text.secondary">
          {renderLabel(label)}
        </Text>
        <Select
          multiple
          displayEmpty
          value={value || []}
          onChange={handleChange}
          input={<OutlinedInput size='small'/>}
          renderValue={(selected) => handleRenderValue(selected)}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' , sx : {padding:"7.5px 14px"}}}
          sx={{fontSize: "15.4px"}}
        >
          {options?.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              style={getStyles(item?.value, value, theme)}
            >
              {item?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
