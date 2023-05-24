import { Stack} from "@mui/material"
import { NameAdresse } from "./NameAdress/NameAdresse"
import { Contrat } from "./contrat/Contrat"
import { PresentationText } from "./Presentation/PresentationText"
import { Competence } from "./Competence/Competence"
function ProfileDetails () {
    return <Stack display='flex' gap='42px' flexWrap='wrap'>
        <NameAdresse />
        <Contrat flexWrap='wrap'/>
        <PresentationText />
        <Competence autonome='Autonome' consciencieux='consciencieux' ecoute="à l'écoute" pontuel="Ponctuel" calme="Calme" />
    </Stack>
}
export default ProfileDetails