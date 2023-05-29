import { Stack } from "@mui/material";
import { NameAdresse } from "./NameAdressAudio/Index";
import { Contrat } from "./contrat/Index";
import { PresentationText } from "./Presentation/Index";
import { Competence } from "./Competence/Index";
function ProfileDetails() {
  return (
    <Stack display="flex" gap="42px"  flexWrap="wrap">
      <NameAdresse />
      <Contrat flexWrap="wrap" />
      <PresentationText />
      <Competence
        autonome="Autonome"
        consciencieux="consciencieux"
        ecoute="à l'écoute"
        pontuel="Ponctuel"
        calme="Calme"
      />
    </Stack>
  );
}
export default ProfileDetails;
