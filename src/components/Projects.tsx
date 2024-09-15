import { Typography, Grid, Box, Button } from "@mui/material";
import projects from "../data/projects.json";
import RightIcon from '@mui/icons-material/ArrowCircleRight';
import { useDispatch  } from 'react-redux';
import { setActiveP } from '../store/slices/ActivePageSlice';
import Scroll from "./Scroll";
export default function Projects() {


    const dispatch = useDispatch();

    const setActivePage = (page: string) => {
        dispatch(setActiveP(page));
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                backgroundColor: 'transparent',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                paddingBottom: '50px',
                position: 'relative',
                gap: '20px',
            }}
        >
            {/* Section Title */}
            <Box sx={{ paddingBottom: '50px', display: 'flex', alignItems: 'center' }}>
                <Typography  sx={{ fontWeight: '900', fontSize:{ xs: '3rem', md: '6rem'} }}>
                    Projects
                </Typography>
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={4} sx={{ width: '80%' }}>
                {projects.projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                height: 200,  
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '8px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover .overlay': {
                                    opacity: 1,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',  
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                }}
                                className="overlay"
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#fff',
                                        marginBottom: '40px',
                                        fontWeight: '700',
                                        textAlign: 'center',
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, width: '100%', padding: '0 20px' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#12D700',
                                            textTransform: 'none', 
                                            textAlign: 'center',
                                            color: '#000000',
                                            fontWeight: '700',
                                            flex: 1,
                                            height: '40px', 
                                            '&:hover': {
                                                backgroundColor: '#ffffff', 
                                            },
                                        }}
                                        href={project.code}
                                        target="_blank"
                                    >
                                        View Code
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#FFBB00', 
                                            color: '#000000',
                                            textTransform: 'none',
                                            fontWeight: '700',
                                            flex: 1,
                                            height: '40px', 
                                            '&:hover': {
                                                backgroundColor: '#ffffff', 
                                            },
                                        }}
                                        href={project.preview}
                                        target="_blank"
                                    >
                                        Preview
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {/* View All Item */}
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Box 
                        onClick={() => setActivePage('project')}
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1, 
                            cursor: 'pointer',
                            '&:hover svg': {
                                transform: 'translateX(5px)', 
                                transition: 'transform 0.3s ease', 
                                fill: '#979696',
                            },
                            '&:hover .hover-text': { 
                                color: '#ffb400',
                            }
                        }}
                    >
                        <Typography 
                            className="hover-text" 
                            sx={{ fontWeight: '700', color: '#000' }}
                        >
                            View All
                        </Typography>
                        <RightIcon sx={{ width: '24px', height: '24px', fill: '#ffb400' }} />
                    </Box>
                </Grid>

            </Grid>

            {/* Scroll to Contact Section */}
            <Scroll section="contact-section"></Scroll>
        </Box>
    );
}
