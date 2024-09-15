import { Typography, Grid, Box } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { motion } from 'framer-motion';
import SkillCard from "./skillCards";
import Scroll from "./Scroll";

export default function About() {

    const skills = [
        { Icon: FaHtml5, label: 'HTML', color: '#e34f26' },
        { Icon: FaCss3Alt, label: 'CSS', color: '#1572B6' },
        { Icon: FaJsSquare, label: 'JavaScript', color: '#f7df1e' },
        { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
        { Icon: FaReact, label: 'React', color: '#61dafb' },
        { Icon: MoreIcon, label: 'And much more', color: '#000' }
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                boxSizing: 'border-box',
                backgroundColor: 'transparent', 
            }}
        >
            {/* Блок с текстом и скиллами */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between', // Чтобы элементы занимали равное пространство
                    alignItems: 'center',
                    maxWidth: '1200px', // Максимальная ширина блока
                    width: '100%', // Ширина блока на всю доступную ширину
                }}
            >
                {/* Блок с текстом */}
                <Box
                    sx={{
                        maxWidth: { xs: '100%', md: '40%' },
                        textAlign: { xs: 'center', md: 'right' }, // Выровнять текст слева на больших экранах
                        marginBottom: { xs: '30px', md: '0' }, // Отступ снизу для мобильных устройств
                    }}
                >
                    <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        My <br/>Skills
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            textAlign: { xs: 'center', md: 'right' },
                            marginBottom: '20px',
                        }}
                    >
                        While I don't have professional business experience yet, I have dedicated time to creating several websites as part of my portfolio. This experience has allowed me to develop and refine my skills in frontend development. <b>Hard Skills:</b> HTML, CSS, JavaScript, React, TypeScript, Git, Redux, and more.
                        </Typography>
                </Box>

                {/* Блок с скиллами */}
                <Grid 
                    container 
                    spacing={3} // Промежуток между карточками
                    sx={{ maxWidth: '600px' }} // Максимальная ширина для сетки скиллов
                >
                    {skills.map(skill => (
                        <Grid item xs={6} key={skill.label} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <SkillCard Icon={skill.Icon} label={skill.label} color={skill.color}  />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Блок с кнопкой прокрутки */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
            >
                <Scroll section='projects-section' />
            </motion.div>
        </Box>
    );
}
