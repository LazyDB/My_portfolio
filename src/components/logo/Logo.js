import React from 'react';
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Style from './LogoPage.module.scss'; // Import your styling
import Logo1 from '../../assets/logomore_4.gif'; // Import your logo images
import Logo2 from '../../assets/Untitled-2.png';
import Logo3 from '../../assets/Weblogo.png';
import Logo4 from '../../assets/handshake.png';
import Logo5 from '../../assets/handshake.png';

const logos = [
    {
        name: "Logo 1",
        image: Logo1,
        description: "The Lazy Server Gaming channel animated Logo"
    },
    {
        name: "Logo 2",
        image: Logo2,
        description: "The Lazy Server official gamers logo"
    },
    {
        name: "Logo 3",
        image: Logo3,
        description: "Description for Logo 3"
    },
    {
        name: "Logo 4",
        image: Logo4,
        description: "Description for Logo 4"
    },
    {
        name: "Logo 5",
        image: Logo5,
        description: "Description for Logo 5"
    }
];

const LogoPage = () => {
    return (
        <Box mb={4}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} fontSize={'15px'}>
                <Zoom top>
                    <h1>
                        <span
                            style={{
                                background: info.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Logos
                        </span>
                    </h1>
                </Zoom>
            </Box>
            <Fade delay={1000}>
                <Grid container sx={{ gap: 4 }} justifyContent="center">
                    {logos.map((logo, index) => (
                        <Grid item xs={8} md={6} lg={4} key={index}>
                            <Box className={Style.logoCard}>
                                <img src={logo.image} alt={logo.name} className={Style.logoImage} />
                                <p className={Style.logoDescription}>{logo.description}</p>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Fade>
        </Box>
    );
};

export default LogoPage;
