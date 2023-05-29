import { Card, Typography, Stack, Box } from "@mui/joy";
import CardModulesCompetences from "./CardModulesCompetences";

function CardFormationExperience({ name, structure, date, description, tags }) {
  return (
    <Box display="flex" flexDirection="column" margin="auto" flexWrap="wrap">
      <Card
        variant="outlined"
        sx={{ width: "75%", margin: "auto", border: "1px solid whitesmoke" }}
      >
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {name}
        </Typography>

        <Typography level="body2">{structure}</Typography>

        <Typography
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        >
          <Typography>{date}</Typography>
        </Typography>
        <Stack sx={{ my: 3 }}>
          <Typography>{description}</Typography>
        </Stack>

        <Box>
          <Stack display="flex" flexDirection="row" flexWrap="wrap" gap="15px">
            {tags.map((tag, index) => {
              return <CardModulesCompetences key={index} tag={tag} />;
            })}
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
export default CardFormationExperience;
