import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const bio = "Greetings! My name is Dipesh Baral, and I am based in the Sydney, Australia. I have a Bachelor's degree in Computer Science and have worked as a frontend developer for 6 months in cloud tech services, Nepal and been working as fullstack developer for around 3 years on my own projects. I got my bachelors degree from Kathmandu University, Nepal with Bachelors of Science in Computer Science. Please feel free to contact me if you require my services. I am excited to collaborate with innovative teams on exciting projects.";
const skills =
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'nodejs', 'bootstrap', 'html5', 'css3', 'tailwindcss', 'mangodb', 'mySQL', 'vs code', 'Vue js', 'Relational Databases', 'Webpack',  'Manual Testing', 'Express.js', 'jQuery', 'API'],
            learning: ['python', 'react native']
        };
const hobbies = [
        
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'poem writing',
            emoji: '✍️'
        },
        {
            label: 'board games',
            emoji: '♛'
        }

    ];

export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <Slide left>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                    about{firstName} </p>
            </Slide>
            <Slide right>
                <p><span style={{ color: info.baseColor }}>about{firstName} <span
                    className={Style.green}>(main)</span> $ </span>
                    {bio}
                </p>
            </Slide>
        </>;
    }

    function skillsText() {
        return <>
        
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <Slide left>
                <ul className={Style.skills}>
                    {skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                </ul>
            </Slide>
            <p style={{ color: info.baseColor }}> Learning</p>
            <Slide right>
                <ul className={Style.skills}>
                    {skills.learning.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </Slide>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <Slide left>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
            </Slide>
        </>;
    }

    return (
        
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'1rem'}>
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
                            About Me
                        </span>
                    </h1>
                </Zoom>
            </Box>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
        
    )
}