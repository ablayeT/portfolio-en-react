import React from 'react';
import { Stack, Typography} from '@mui/joy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionIcon from '@mui/icons-material/Description';
import SmsIcon from '@mui/icons-material/Sms';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
function ContratCard( contratElem) {
    return (
        <Stack  key={contratElem.type} display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-between' alignContent='center'>
        <Stack>
        <Typography level="body3" textColor='#EE5F36'><Chip variant="outlined" sx={{border:'none', color: '#F55F24'}} avatar={<Typography sx={{background:'none'}}><DescriptionIcon sx={{color:'#F55F24'}} /></Typography>} label="Type de contrat" /></Typography>
        <Typography level="body2" alignSelf='center'>{contratElem.type}</Typography>
    </Stack>

    <Stack>
        <Typography level="body3" textColor='#EE5F36'><Chip variant="outlined" sx={{border:'none', color: '#F55F24'}} avatar={<Avatar sx={{background:'none'}}><EventAvailableIcon sx={{color:'#F55F24'}} /></Avatar>} label="Disponibilité" /></Typography>
        <Typography level="body2" alignSelf='center'>{contratElem.disponibilité}</Typography>
    </Stack>

    <Stack>
        <Typography level="body3" textColor='#EE5F36'><Chip variant="outlined" sx={{border:'none', color: '#F55F24'}} avatar={<Avatar sx={{background:'none'}}><SmsIcon sx={{color:'#F55F24'}} /></Avatar>} label="Langues parlées" /></Typography>
        <Typography level="body2" alignSelf='center'>{contratElem.langue}</Typography>
    </Stack>
    <Stack>
        <Typography level="body3" textColor='#EE5F36'><Chip variant="outlined" sx={{border:'none', color: '#F55F24'}} avatar={<Avatar sx={{background:'none'}}><DirectionsCarIcon sx={{color:'#F55F24'}} /></Avatar>} label="Mobilité" /></Typography>
        <Typography level="body2" alignSelf='center'>{contratElem.mobilité}</Typography>
    </Stack>
    </Stack>
    );
}

export default ContratCard;