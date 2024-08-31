import { Container, Typography, Box, Grid, Link } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    return (
            <Box
            component="footer"
            sx={{
                padding: '20px 0',
                backgroundColor: '#333',
                color: '#fff',
                textAlign: 'center',
                
            }}
            >
            <Container maxWidth="md">
                <Typography variant="h6" gutterBottom>
                Contact Me
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <EmailIcon sx={{ fontSize: 30 }} />
                    <Typography variant="body1">
                    <Link href="mailto:dadamenkod@gmail.com" color="inherit" underline="hover">
                        dadamenkod@gmail.com
                    </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <PhoneIcon sx={{ fontSize: 30 }} />
                    <Typography variant="body1">
                    <Link href="tel:+1234567890" color="inherit" underline="hover">
                        +380675870339
                    </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <GitHubIcon sx={{ fontSize: 30 }} />
                    <Typography variant="body1">
                    <Link href="https://github.com/denysAdam" color="inherit" underline="hover" target="_blank">
                        github.com/denysAdam
                    </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                    <Typography variant="body1">
                    <Link href="https://linkedin.com/in/denys-adamenko-382206187" color="inherit" underline="hover" target="_blank">
                        linkedin.com/in/denys-adamenko
                    </Link>
                    </Typography>
                </Grid>
                </Grid>
                <Typography variant="body2" sx={{ marginTop: '20px' }}>
                &copy; {new Date().getFullYear()} Denys Adamenko. All rights reserved.
                </Typography>
            </Container>
            </Box>
        );
}
