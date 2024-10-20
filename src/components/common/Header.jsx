import React from "react";
import Stack from "components/common/Stack";
import Text from 'components/common/Text';
import { makeStyles } from "@mui/styles";
import CustomButton from "components/common/CustomButton";


const Header = (props) => {
  const { label, image,actionContainer=[],backgroundColor,...restProps } = props
  const classes = useStyles();
    return (
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.formheading}
        sx={restProps?.formheading ||{}}
        style={{ width: "100%", backgroundColor: backgroundColor || "#F2FAFE" }}
      >
        <div className={classes.leftContent}>
          <img
            src={image}
            alt={label}
            width="24"
            height="24"
            className={classes.image}
          />
          <Text variant="body2" className={classes.label}>
            {label}
          </Text>
        </div>
        <div className={classes.rightContent}>
          <div className={classes.buttonContainer}>
            {actionContainer.length
              ? actionContainer.map((item, i) => {
                  return (
                    <CustomButton
                      key={`index_${i}`}
                      variant="outlined"
                      text={item.label}
                      size="medium"
                      color={item.color || "secondary"}
                      endIcon=""
                      startIcon=""
                      onClick={item.action}
                      sx={{ mr: 2 }}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </Stack>
    );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  formheading: {
    backgroundColor: `${theme.palette.secondary.main}`,
    padding: "0.9rem 1.5rem",
    marginBottom: "0.5rem",
    borderRadius: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
  },
  leftContent: {
    display: "flex",
    
  },
  label: {
    marginRight: theme.spacing(1), 
  },

  rightContent: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    marginLeft: theme.spacing(2), 
  },
}));