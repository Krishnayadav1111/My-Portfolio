import React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Text from "./Text";

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

const DatePicker = (props) => {
  const { onChange, group, name, value, label, InputProps } = props;
  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    onChange({ name, value: formattedDate, group });
  };
  const dayjsValue = value ? dayjs(value) : null;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {" "}
      <Text variant="typo14" color="gray" sx={{marginTop:"-1px"}}>
        {toCamelCase(label)}
      </Text>
      <DemoContainer sx={{overflow:"hidden"}}  components={["DatePicker"]}>
        {" "}
        <MuiDatePicker
          sx={{
            width: "100%",
            ".MuiInputLabel-root": {
              fontSize: "14px",
            },
            ".MuiInputBase-input": {
              fontSize: "14px",
            },
            ".MuiPickersCalendarHeader-root .MuiPickersCalendarHeader-label": {
              fontSize: "12px", // Adjust the font size here
            },
          }}
          label={!value ? "Select Date" : null}
          format="DD-MM-YYYY"
          onChange={handleDateChange}
          value={dayjsValue}
          slotProps={{ textField: { size: 'small' } }} 
        />{" "}
      </DemoContainer>{" "}
    </LocalizationProvider>
  );
};

export default DatePicker;