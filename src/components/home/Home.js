import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { info } from '../../info/Info';
import Pfp from './Pfp.png'; // Import the image
import Style from './Home.module.scss';
import EmojiBullet from './EmojiBullet';
import SocialIcons from './SocialIcons';
import Type from './Type';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const miniBio = [
  {
    emoji: '🏠',
    text: 'based in Sydney, NSW',
  },
  {
    emoji: '💼',
    text: 'looking for a full-stack/front-end development position',
  },
];

const socials = [
  {
    link: 'mailto:dipeshbaral2014@gmmail.com8',
    icon: 'fa fa-envelope',
    label: 'email',
  },
  {
    link: 'tel:+610433959821',
    icon: 'fa fa-phone',
    label: 'phone',
  },
  {
    link: 'https://www.facebook.com/dipesh.baral.770/',
    icon: 'fa fa-facebook',
    label: 'facebook',
  },
  {
    link: 'https://www.instagram.com/dipu_32/',
    icon: 'fa fa-instagram',
    label: 'instagram',
  },
  {
    link: 'https://github.com/LazyDB',
    icon: 'fa fa-github',
    label: 'github',
  },
  {
    link: 'https://linkedin.com/in/bfguo',
    icon: 'fa fa-linkedin',
    label: 'linkedin',
  },
];

export default function Home() {
  return (
    <Box
      component="main"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
    >
      <Zoom left>
        <Box
          className={classNames(Style.avatar, Style.shadowed)}
          alt="developer's photo"
          style={{ background: info.gradient }}
          component="img"
          src={Pfp} // Use the imported image here
          width={{ xs: '40vh', md: '45vh' }}
          height={{ xs: '40vh', md: '35vh' }}
          borderRadius="50%"
          p="0.75rem"
          mb={{ xs: '1rem', sm: 0 }}
          mr={{ xs: 0, md: '2rem' }}
        />
      </Zoom>
      <Fade delay={1000}>
        <Box>
          <h1>
            Hi, I'm{' '}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {info.firstName} {info.lastName}{' '}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>

          <h2 style={{ padding: "1.5rem", textAlign: 'left' }}>
            <Type />
          </h2>

          <Box component="ul" p="0.8rem" mb="2rem">
            {miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>

          <Box display="flex" gap="1.5rem" justifyContent="left" fontSize={{ xs: '2rem', md: '2.5rem' }}>
            {socials.map((social, index) => (
              <SocialIcons key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
