import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const but = (
    <Box sx={{ textAlign: "right" }}>
      <Button
        variant="contained"
        style={{ marginRight: 3, backgroundColor: "#1c003f" }}
      >
        Week
      </Button>
      <Button variant="contained" style={{ backgroundColor: "#1c003f" }}>
        Month
      </Button>
    </Box>
  );
  
const income = () => {
    return (
        <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1" }}>
          <Typography
            style={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Sales Value
          </Typography>
          <Typography variant="h5" component="div">
            <label style={{ fontSize: "30px" }}>Rs 458960.89</label>
          </Typography>
          <Typography style={{ mb: 1.5 }} color="text.secondary">
            Today
            <label
              style={{ fontSize: "20px", paddingLeft: "35%" }}
            ></label>
          </Typography>
        </div>

        <div style={{ flexGrow: "1" }}>
          <Typography
            style={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Cost of sales
          </Typography>
          <Typography variant="h5" component="div">
            <label style={{ fontSize: "30px" }}>Rs 400000.89</label>
          </Typography>
          <Typography style={{ mb: 1.5 }} color="text.secondary">
            Today
            <label
              style={{ fontSize: "20px", paddingLeft: "35%" }}
            ></label>
          </Typography>
        </div>

        <div style={{ flexGrow: "1" }}>
          <Typography
            style={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Sales Income
          </Typography>
          <Typography variant="h5" component="div">
            <label style={{ fontSize: "30px" }}>Rs 58960.89</label>
          </Typography>
          <Typography style={{ mb: 1.5 }} color="text.secondary">
            Today
            <label
              style={{ fontSize: "20px", paddingLeft: "35%" }}
            ></label>
          </Typography>
        </div>

        <div style={{ flexGrow: "1" }}>{but}</div>
      </div>
  
  )
};
export default income;