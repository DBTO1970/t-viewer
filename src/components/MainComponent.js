import React from "react";
import Video from './VideoComponent';
import SocialPanel from './SocialComponent';
import ToolsPanel from './ToolsComponent';
import HeaderPanel from './HeaderComponent.js';
import FooterPanel from './FooterComponent';
import { Grid, Box } from '@mui/material';

function Main () {

    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={.1} >
                <Grid item xs={12}>
                    <HeaderPanel />
                </Grid>
                <Grid item xs={12} md={2}>
                    <SocialPanel />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Video />
                </Grid>
                <Grid item xs={12} md={2}>
                    <ToolsPanel />
                </Grid>
                <Grid item xs={12}>
                    <FooterPanel />
                </Grid>
            
            </Grid>
        </Box>
    )
}

export default Main;