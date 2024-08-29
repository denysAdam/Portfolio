import { Button, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { scroller } from 'react-scroll';
import About from './components/About';
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
    const handleScroll = (section: string): void => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Hello, my name is Denys. Beginner frontend developer
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleScroll('contact-section')}
                    sx={{
                        margin: '10px 0',
                        padding: '10px 20px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    Contact me
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => window.open('https://github.com/denysAdam', '_blank')}
                    sx={{
                        margin: '10px 0',
                        padding: '10px 20px',
                        borderColor: '#1976d2',
                        '&:hover': {
                            borderColor: '#115293',
                        },
                    }}
                >
                    See my Github
                </Button>
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
                    onClick={() => handleScroll('about-section')}
                >
                    <Typography variant="body1"> More info</Typography>
                    <KeyboardArrowDownIcon className="arrow" sx={{ fontSize: 70 }} />
                </Box>
            </Box>

            <Box id="about-section" sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <About />
            </Box>

            <Box id="projects-section" sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
                <Projects />
            </Box>

            <Box id="contact-section" sx={{ backgroundColor: '#333', color: '#fff' }}>
                <Contact />
            </Box>
        </>
    );
}
