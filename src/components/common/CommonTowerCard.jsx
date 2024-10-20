import React from "react";
import { Paper } from "@mui/material";
import Text from "components/common/Text";
import { useTheme } from "@mui/material/styles";
import images from "helpers/images";

const CommonTowerCard = ({ data, height, onClick }) => {
  const theme = useTheme();
  return (
    <Paper
      variant="outlined"
      id="123123"
      sx={{
        alignItems: "center",
        backgroundColor: `${data?.backgroundColor}`,
        border: `1px solid ${data?.borderColor}`,
        height: `${height}`,
        p: 2,
      }}
    >
      <div>
        <img
          src={images?.towerImg}
          alt="tower"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            cursor: "pointer",
          }}
          onClick={onClick}
        />
        <Text
          variant="typo18"
          textAlign="center"
          sx={{ color: theme.palette.grey?.[900] }}
          mt={2}
          onClick={onClick}
        >
          {data?.name}
        </Text>
      </div>
    </Paper>
  );
};

export default CommonTowerCard;
