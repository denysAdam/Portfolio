import { Container, Typography, Grid, Box } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { scroller } from 'react-scroll';
import SkillCard from "../src/skillCards"; 

export default function About() {
    const handleScroll = () => {
        scroller.scrollTo('projects-section', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const skills = [
        { Icon: FaHtml5, label: 'HTML', color: '#e34f26' },
        { Icon: FaCss3Alt, label: 'CSS', color: '#1572B6' },
        { Icon: FaJsSquare, label: 'JavaScript', color: '#f7df1e' },
        { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
        { Icon: FaReact, label: 'React', color: '#61dafb' },
        { Icon: MoreIcon, label: 'And much more', color: '#000' }
    ];

    return (
        <Container
            sx={{
                padding: '50px 20px', 
                textAlign: 'center',
                backgroundColor: '#ffffff',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                overflow: 'hidden', 
            }}
        >
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '30px' }}>
                I am a beginner frontend developer with a passion for creating beautiful and functional web applications. I enjoy learning new technologies and improving my skills every day.
            </Typography>
            <Typography variant="h5" gutterBottom>
                My Skills
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {skills.map(skill => (
                    <SkillCard key={skill.label} Icon={skill.Icon} label={skill.label} color={skill.color} />
                ))}
            </Grid>
            <motion.div initial="hidden" whileInView="visible" variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}>
                <Box
                    sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '20px',
                        '&:hover .arrow': {
                            animation: 'bounce 2s infinite',
                        },
                        '@keyframes bounce': {
                            '0%, 20%, 50%, 80%, 100%': {
                                transform: 'translateY(0)',
                            },
                            '40%': {
                                transform: 'translateY(-10px)',
                            },
                            '60%': {
                                transform: 'translateY(-5px)',
                            },
                        },
                    }}
                    onClick={handleScroll}
                >
                    <Typography variant="body1">Projects</Typography>
                    <KeyboardArrowDownIcon className="arrow" sx={{ fontSize: 70 }} />
                </Box>
            </motion.div>
        </Container>
    );
}
