import React, { useState, useEffect  } from "react";
import Stack from "components/common/Stack";
import Text from "components/common/Text";
import { makeStyles } from "@mui/styles";
import images from "helpers/images";

const PlotPlan = ({ label, plotPlansData, handleEditClick, handleDeleteClick ,disableEdit = false }) => {
  const classes = useStyles();
  const [selectedPlotPlan, setSelectedPlotPlan] = useState(null);
  
  useEffect(() => {
    setSelectedPlotPlan(plotPlansData?.[0] || null);
  }, [plotPlansData]);

  const minimizedLabel = (label) => {
    if (label?.length > 6) {
      return `${label?.substring(0, 5)}...`;
    }
    return label;
  };

  const handlePlotPlanClick = (plotPlan) => {
    setSelectedPlotPlan(plotPlan);
    handleEditClick(plotPlan?.id)
  };

  return (
    <Stack spacing={2} className={classes.formheading}>
      <Text variant="small">{label}</Text>
      <Stack direction="row" spacing={3} className={classes.savedplanssection}>
        {plotPlansData?.length && plotPlansData?.map((plotPlan, i) => {
          const isSelected = selectedPlotPlan?.id === plotPlan.id;
          return (
            <Stack
              className={`${classes.planfield} ${isSelected ? classes.selected : ''}`}
              direction="row"
              alignItems="center"
              spacing={1}
              key={plotPlan?.label}
              onClick={() => handlePlotPlanClick(plotPlan)}
            >
              <Text variant="small">{minimizedLabel(plotPlan?.label)}</Text>
              {disableEdit !== true && (
              <img
                src={images.edit}
                alt={plotPlan?.label}
                width="20"
                height="20"
                onClick={() => handlePlotPlanClick(plotPlan, plotPlan?.id)}
              />)}
              <img
                src={images.deleteIcon}
                alt={plotPlan?.label}
                width="20"
                height="20"
                onClick={() => handleDeleteClick(plotPlan?.id)}
              />
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default PlotPlan;

const useStyles = makeStyles((theme) => ({
  formheading: {
    backgroundColor: `${theme.palette.blue.light100}`,
    padding: "0.9rem 1.5rem",
    marginTop: "1rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },
  savedplanssection: {
    width: 'auto !important',
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: "0rem",
    },
  },
  planfield: {
    width: "auto !important",
    height: "40px !important",
    backgroundColor: `${theme.palette.common.white}`,
    padding: "0px 20px",
    borderRadius: "8px",
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
    cursor: "pointer",
  },
  selected: {
    backgroundColor: `${theme.palette.blue.main}`,
    color: `${theme.palette.common.white}`,
  },
}));
