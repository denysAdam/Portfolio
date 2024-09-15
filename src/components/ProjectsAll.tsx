
import { Typography, Grid, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { showAllProjects, filterProjectsByTechnology } from '../store/slices/ProjectsSlice';
import { RootState } from '../store/store';

export default function ProjectsAll() {
    const dispatch = useDispatch();
    const filteredProjects = useSelector((state: RootState) => state.projects.filteredProjects);
    const selectedTechnologies = useSelector((state: RootState) => state.projects.selectedTechnologies);

  

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
                <Typography sx={{ fontWeight: '900', fontSize: { xs: '3rem', md: '6rem' } }}>
                    Projects
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '20px',
                    width: '78%',
                }}
            >
                        {/* Button to show all projects */}
                        <Button
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                                borderRadius: '20px',
                                backgroundColor: selectedTechnologies.length === 0 ? '#ffb400' : '#D9D9D9', 
                                '&:hover': {
                                    backgroundColor: '#ffb400',
                                    
                                },
                            }}
                            onClick={() => dispatch(showAllProjects())}
                        >
                            All
                        </Button>


                {/* Buttons to filter by technology */}
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'].map((tech) => (
                    <Button
                        key={tech}
                        sx={{
                            color: '#000',
                            fontWeight: '700',
                            borderRadius: '20px',
                            backgroundColor: selectedTechnologies.includes(tech) ? '#ffb400' : '#D9D9D9',
                            '&:hover': {
                                backgroundColor: '#ffb400',
                                
                            },
                        }}
                        
                        onClick={() => dispatch(filterProjectsByTechnology(tech))}
                    >
                        {tech}
                    </Button>
                ))}
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={4} sx={{ width: '80%' }}>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
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
                    ))
                ) : (
                    <Typography variant="h6" sx={{ color: '#ff0000', textAlign: 'center', width: '100%' }}>
                        No projects found.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}
