import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import CustomTextField from "./TextField";
import dayjs from "dayjs";
import Text from "./Text";

function TimePickerComponent({placeholder="", label, value, name, onChange, group }) {
  const [defaultTime, setDefaultTime] = React.useState(dayjs());

  React.useEffect(() => {
    if (value) {
      setDefaultTime(dayjs(value));
    }
  }, [value]);

  const handleChange = (newValue) => {
    const formattedValue = newValue ? newValue.$d : null;
    onChange({ name, value: formattedValue, group });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Text variant="typo16" color="gray" style={{ paddingBottom: "5px" }}>
        {label}
      </Text>
      <TimePicker
        sx={{
          width: "100%",
          ".MuiInputLabel-root": {
            fontSize: "14px",
            lineHeight: "0.69em",
            marginTop: "-3px"
          },
          ".MuiInputBase-input": {
            fontSize: "14px",
          },
          ".MuiInputBase-root": {
            maxHeight: "37.2px",
          },
        }}
        label={placeholder}
        size="small"
        onChange={handleChange}
        renderInput={(params) => (
          <CustomTextField size="small" {...params} fullWidth />
        )}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        }}
      />
    </LocalizationProvider>
  );
}
export default TimePickerComponent;
