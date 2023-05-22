import { Stack} from "@mui/material"
import { NameAdresse } from "./NameAdresse"
import { Contrat } from "./Contrat"
import { PresentationText } from "./PresentationText"
import { Competence } from "./Competence"
function ProfileDetails () {
    return <Stack display='flex' gap='20px' flexWrap='wrap'>
        <NameAdresse />
        <Contrat flexWrap='wrap'/>
        <PresentationText />
        <Competence autonome='Autonome' consciencieux='consciencieux' ecoute="à l'écoute" pontuel="Ponctuel" calme="Calme" />
    </Stack>
}
export default ProfileDetails