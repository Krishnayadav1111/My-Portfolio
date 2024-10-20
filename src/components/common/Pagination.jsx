import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Grid from "@mui/material/Grid";
import CustomButton from "./CustomButton";
import Typography from "@mui/material/Typography";

// Custom Previous Button Component
const CustomPreviousButton = ({ onClick }) => (
  <CustomButton
    startIcon={<img src="/assets/icons/previousicon.svg" alt="Previous Icon" />}
    text="Previous"
    color="secondary"
    onClick={onClick}
    style={{
      float: "left",
    }}
  />
);

// Custom Next Button Component
const CustomNextButton = ({ onClick }) => (
  <CustomButton
    text="Next"
    endIcon={<img src="/assets/icons/nexticon.svg" alt="Next Icon" />}
    color="secondary"
    onClick={onClick}
    style={{
      float: "right",
    }}
  />
);

export default function PaginationComponent({
  handleChange,
  page,
  totalPageCount,
  currentPageSize,
  totalRecord,
}) {
  return (
    <Grid container alignItems="center" spacing={2} p={2}>
      {currentPageSize?<Grid item xs={4}>
        <Typography
          variant="large"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {`1 to ${currentPageSize} of ${totalRecord}`}
        </Typography>
      </Grid>:null}
      <Grid item xs={4} container justifyContent="center">
        <Pagination
          count={totalPageCount}
          size="large"
          shape="rounded"
          page={page}
          onChange={(event, value) => handleChange(event, value)}
          renderItem={(item) => (
            <PaginationItem
              className={`pagination_${item.type}`}
              size="small"
              sx={{
                cursor: "pointer",
                position: "relative",
                fontSize: "14px !important",
                color: "#667085",
              }}
              onClick={(e) => {
                if (item.type === "previous") {
                  handleChange(e, page - 1); // Pass current page
                } else if (item.type === "next") {
                  handleChange(e, page + 1); // Pass current page
                } else {
                  handleChange(e, item.page); // Pass clicked page
                }
              }}
              slots={{
                previous: CustomPreviousButton,
                next: CustomNextButton,
              }}
              {...item}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
