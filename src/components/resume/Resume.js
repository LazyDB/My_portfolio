import React from "react";
import { Box, Button } from '@mui/material';
import MyResume from './Dipesh_cv.pdf?raw';
import { FaDownload } from "react-icons/fa";

import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';
import Style from './Resume.module.scss';



export default function Resume() {


  return (
    <Box>
       
      <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} fontSize={'1.5rem'}>
        <Zoom top>
          <h1>
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience & Education
            </span>
          </h1>
        </Zoom>
      </Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          href={MyResume}
          download="Dipesh_cv.pdf"
          variant="outlined"
          className={Style.resumeButton}
          sx={{ borderColor: 'green' }}
        >
          <FaDownload />
          &nbsp;Download CV
        </Button>
      </Box>

      <Box display="flex" justifyContent="center">
        <embed src={`${MyResume}#page=1`} justifyContent="center" type="application/pdf" width="65%" height="1000px"></embed>
      </Box>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          href={MyResume}
          download="Dipesh_cv.pdf"
          variant="outlined"
          className={Style.resumeButton}
          sx={{ borderColor: 'green' }}
        >
          <FaDownload />
          &nbsp;Download CV
        </Button>
      </Box>
    </Box>
  );
}

