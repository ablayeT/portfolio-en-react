import { Box } from "@mui/joy";
import React, { Component } from "react";
import Button from "@mui/material/Button";

class Buttons extends Component {
  render() {
    return (
      <Box>
        <Button sx={{ background: "#F55F24" }} variant="contained">
          CONTACT
        </Button>
      </Box>
    );
  }
}

export default Buttons;
