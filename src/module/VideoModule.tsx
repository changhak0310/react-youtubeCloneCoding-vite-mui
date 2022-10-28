import React from "react";
import Slider, { SliderProps } from '@mui/material/Slider';
import { Box } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

const style = {
    backgroundColor: '#f9f9f9',
} as const;

const VideoModuleWrapper = styled(Box)(({theme}) => ({
    padding: `${theme.spacing(3)}`,
}));

const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.palette.primary.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.primary.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary.main, 0.16)}`,
    },
  },
}));

export default function VideoModule () {
    return(
        <VideoModuleWrapper
            sx={style}>
            this is VideoModule
            <SuccessSlider defaultValue={30} />;
        </VideoModuleWrapper>
    )
}