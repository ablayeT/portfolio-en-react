import React from "react";
import { Typography } from "@mui/joy";

const CardModulesCompetences = ({ tag }) => {
  return (
    <Typography
      level="body3"
      fontWeight="600"
      lineHeight="19px"
      fontSize="14px"
      padding="4px"
      border="1px solid none"
      borderRadius="5px"
      textColor="#EE5F36"
      backgroundColor="rgba(238, 95, 54, 0.1);"
    >
      {tag}
    </Typography>
  );
};

export default CardModulesCompetences;
