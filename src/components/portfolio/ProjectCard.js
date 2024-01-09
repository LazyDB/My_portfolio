import React from 'react';
import { Box } from "@mui/material";
import Stack from '@mui/joy/Stack';


export default function ProjectCard(props) {
   const { image, description, techStacks, title } = props;
   const [isHover, setIsHover] = React.useState(false);
   return (
      <Box
         display={'flex'}
         flexDirection={'column'}
         justifyContent={'center'}
         alignItems={'center'}
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
         style={{
            transform: isHover ? 'scale(1.1)' : 'scale(1)',
            backgroundColor: 'lightblue', 
            width: '100%',
            maxWidth: '500px', 
            height: '590px', 
            padding: '1rem',
            borderRadius: '8px',
         }}
         transition="transform 0.3s ease-in-out"
      >
         <Box component={'img'} src={image} alt={'projects'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <h1 style={{ fontSize: '1rem' }}>{description}</h1>
         <Stack
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               fontSize: '1rem',
            }}
            direction="row"
            spacing={5}
         >
            <ul style={{ margin: 1, padding: 1, display: 'flex', flexWrap: 'wrap' }}>
               {techStacks.map((techStack) => (
                  <li key={techStack} style={{
                     border: '1px solid green', borderRadius: '8px', padding: '5px', marginRight: '10px', marginBottom: '5px', cursor: 'pointer'
                  }}>{techStack}</li>
               ))}
            </ul>
         </Stack>
      </Box>
   );
}


