import { Container, Typography, Grid, Box } from "@mui/material";


export default function Projects() {
    return (
       <><Container
        sx={{
            height: '100vh',
            display: 'flex',
            marginTop: '70px',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: '20px'
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
            {/* Здесь будут ваши компоненты проектов */}
            <Grid item xs={12} sm={6} md={4}>
            <Box
                sx={{
                height: 200,
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography variant="h6">Project 1</Typography>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Box
                sx={{
                height: 200,
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography variant="h6">Project 2</Typography>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Box
                sx={{
                height: 200,
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography variant="h6">Project 3</Typography>
            </Box>
            </Grid>
        </Grid>
        
        </Container>
        
        </> 
    );
    }
