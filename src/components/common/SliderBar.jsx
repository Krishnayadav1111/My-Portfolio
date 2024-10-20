import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Text from "components/common/Text";
import Stack from "components/common/Stack";
import { useTheme } from "@mui/material/styles";

export default function SliderBar(props) {
  const theme = useTheme();
  return (
    <Box sx={{ width: 450 }}>
      <Text variant="typo18" gutterBottom>
        {props.label}
      </Text>
      <Slider
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={10}
        min={10}
        max={100}
        value={props.value}
        onChange={props.onChange}
        style={{  color: `${theme.palette.primary.light}`, height: "8px", borderRadius: "4px" }}
      />
      <Stack direction="row" justifyContent="space-between">
        <Text variant="typo16" textALign="left"style={{ color: `${theme.palette.text.tertiary}` }}>
          Weak
        </Text>
        <Text variant="typo16" textALign="right" style={{ color: `${theme.status.completed}` }}>
          Strong
        </Text>
      </Stack>
    </Box>
  );
}
