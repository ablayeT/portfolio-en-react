import { Box, Typography } from "@mui/joy"
import Buttons from "../utils/Buttons"

function Footer () {
    return( <Box display='flex' flexDirection='column' justifyContent="center" alignItems='center'>
                <Typography level="h6">Comment pouvez vous contacter Abdoulaye</Typography>
                <Buttons />
           </Box>
    )
}
export default Footer