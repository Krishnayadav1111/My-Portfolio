import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "components/common/Stack";
import { Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Text from "components/common/Text";
import CustomButton from "components/common/CustomButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 448,
  bgcolor: "#fff",
  borderRadius: "12px",
  p: 4,
};

export default function CommonModal({
  open,
  secondaryAction,
  primaryAction,
  secondaryText = "",
  primaryText = "",
  profile,
  title,
  subtitle,
}) {
  const theme = useTheme();
  

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={"profile"}
              src={profile}
              sx={{ width: 56, height: 56 }}
            />
            <Text
              variant="typo20"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.grey?.[900],
                textAlign: "center", 
                width: "100%", 
              }}
            >
              {title}
            </Text>
            <Text
              sx={{
                fontSize: theme.typography.fontSize,
                color: theme.palette.grey?.[400],
                textAlign: "center",
              }}
            >
              {subtitle}
            </Text>
          </Stack>
          <Stack direction="row" spacing={1} mt={3.5}>
            {
              primaryText && (
              <CustomButton
                sx={{
                  width: !secondaryText ? "100%" : "50%", // Take full width if only one button
                }}
                variant="contained"
                text={primaryText}
                size="medium"
                onClick={primaryAction}
              />
              )
            }
            
            {
              secondaryText && (
                <CustomButton
                variant="outlined"
                text={secondaryText}
                size="medium"
                color="secondary"
                sx={{
                  width: !primaryText ? "100%" : "50%", // Take full width if only one button
                }}
                onClick={secondaryAction}
              />
              )
            }
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
