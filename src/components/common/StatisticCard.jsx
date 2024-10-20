import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "./Stack";
import Text from "components/common/Text";
import { useTheme } from "@mui/material/styles";

const StatisticCard = ({ data, style, isCardSelected }) => {
  const theme = useTheme();
  const cardStyle = style || {
    width: "auto",
    backgroundColor: "white",
    borderColor: "white",
    height: "auto",
    textColor: "black",
  };

  return (
    <Paper
      elevation={1}
      sx={{
        alignItems: "center",
        p: 3,
        width: `${cardStyle.width}`,
        backgroundColor: `${cardStyle.backgroundColor}`,
        border: `1px solid ${cardStyle.borderColor}`,
        height: `${cardStyle.height}`,
      }}
    >
      <Text
        variant="typo14light"
        color={cardStyle.textColor}
        sx={{
          marginBottom: 2,
        }}
      >
        {data?.name || data?.userName}
      </Text>
      <Stack direction="row" justifyContent={"space-between"}>
        <Text variant="typo24medium" color={cardStyle.textColor}>
          {data.value ? data.value : 0}
        </Text>
      </Stack>
    </Paper>
  );
};

export default StatisticCard;
