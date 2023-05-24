import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';


export const CustomSlider = styled(Slider)({
  color: 'var(--color)',
  '& .MuiSlider-thumb': {
    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: '0px 0px 0px 8px var(--box-shadow)',
    },
    [`&.Mui-active`]: {
      boxShadow: '0px 0px 0px 14px var(--box-shadow)',
    },
  },
});


const defaultVars = {
  '--color': '#F55F24',
  '--box-shadow': 'rgba(238, 95, 54, 0.1',
  'width' : '60%'
} ;

export default function DynamicCSSVariables() {
  return (
    <React.Fragment>
      <CustomSlider style={defaultVars}/>
    </React.Fragment>
  );
}
