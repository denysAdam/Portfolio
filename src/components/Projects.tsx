import { Container, Typography, Grid, Box, Button } from "@mui/material";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <Container
            sx={{
                minHeight: '100vh',
                display: 'flex',
                marginTop: '70px',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                padding: '20px',
                paddingBottom: '50px',
            }}
        >
            {/* Заголовок секции */}
            <Box sx={{ paddingBottom: '50px', display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2" component="h2">
                    Projects
                </Typography>
            </Box>

            {/* Сетка для проектов */}
            <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                {projects.projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                height: 300,  // Установим фиксированную высоту для карточек
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
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Полупрозрачный оверлей для затемнения
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
                                        marginBottom: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.code}
                                        target="_blank"
                                    >
                                        View Code
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
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
            </Grid>
        </Container>
    );
}
