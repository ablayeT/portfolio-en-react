import { Box, Typography } from "@mui/joy";
import Buttons from "../Utils/Buttons";

function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="35px"
      padding="26px"
      alignItems="center"
      
    >
      <Typography level="h6" fontSize="16px">
        Comment pouvez vous me contacter ?
      </Typography>
      <Buttons />
    </Box>
  );
}
export default Footer;
