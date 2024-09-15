import { Typography, Box } from "@mui/material";
import Scroll from "./Scroll";

export default function About() {

    return (
        <Box 
            sx={{
                backgroundColor: '#000000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '20px',
                minHeight: '100vh',
            }}
        >
        <Box
            sx={{
                padding: { xs: '20px 10px', md: '0px 20px' }, // Adjust padding for small screens
                paddingTop: '20px',
                backgroundColor: '#000000',
                minHeight: '85vh',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack in a column on small screens
                justifyContent: 'space-between',
                alignItems: { xs: 'center', md: 'flex-start' }, // Center align on small screens
                overflow: 'hidden',
                position: 'relative',
                
            }}
        >
            {/* Левый блок: About Me, фото и списочек */}
            <Box
                sx={{
                    width: { xs: '100%', md: '55%' }, // Full width on small screens
                    textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
                    marginBottom: '40px',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-end' }, // Center align on small screens
                    justifyContent: 'center',
                    gap: '5rem',
                    paddingTop: '30px',
                }}
            >
                {/* "About Me" title */}
                <Typography 
                    sx={{ 
                        fontFamily: 'Red Hat Display', 
                        fontSize: { xs: '3rem', md: '85px' }, // Smaller font size on small screens
                        fontWeight: '700',
                        textAlign: { xs: 'center', md: 'right' }, // Center text on small screens
                        paddingLeft: { md: '150px' }, // Adjust padding for large screens
                        lineHeight: '0.9',
                        paddingRight: { xs: '0px', md: '100px' }, // Adjust padding for large screens
                    }}
                >
                    About
                    <br />
                    Me
                </Typography>

                {/* Фото и списочек */}
                <Box
                    sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' }, // Stack items in a column on small screens
                        width: '100%', 
                        alignItems: 'center', // Center align on small screens
                        marginBottom: '20px',
                        textAlign: { xs: 'center', md: 'right' }, // Center text on small screens
                    }}
                >
                    <Box sx={{ flex: '1', marginRight: { xs: '0px', md: '20px' }, marginBottom: { xs: '20px', md: '0px' } }}>
                        <img 
                            src="../Portfolio/images/me.jpg" 
                            alt="Profile" 
                            style={{ 
                                width: '60%',
                                height: 'auto', 
                                borderRadius: '10px',
                                
                            }} 
                        />
                    </Box>
                    <Box sx={{ flex: '1.25', color: '#ffffff', textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                            <strong>Age:</strong> 20
                        </Typography>
                        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        <strong>Education:</strong> Computer Science
                        Petro Mohyla Black Sea National University.
                        </Typography>
                        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                            <strong>Languages:</strong> English (B2),
                                                    Russian (Native),
                                                    Ukrainian (Native).
                        </Typography>
                        <Typography variant="h6">
                            <strong>Soft skills:</strong> Communication and teamwork. Adaptability and problem-solving.
                        </Typography>
                    </Box>
                </Box>

            </Box>

            {/* Правый блок: Текстовое описание */}
            <Box
                sx={{
                    width: { xs: '100%', md: '35%' }, // Full width on small screens
                    color: '#ffffff',
                    textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'flex-start' }, // Center align on small screens
                    paddingTop: { xs: '10px', md: '12%' },
                }}
            >
                <Typography 
                    sx={{ 
                        lineHeight: '1.5',
                        position: 'relative',
                        maxWidth: '300px',
                        fontSize: { xs: '1rem', md: '1.2rem' }, // Adjust font size for responsiveness
                        fontWeight: '500',
                        paddingTop: '30px', 
                        margin: { xs: '0 auto', md: '0' }, // Center content on small screens
                        '&::before': {
                            content: '"\\201C"',
                            fontSize: { xs: '3rem', md: '4rem' }, // Adjust quotation size for responsiveness
                            color: 'white',
                            position: 'absolute',
                            left: { xs: '10px', md: '-50px' }, // Adjust position for responsiveness
                            top: '-20px',
                            fontWeight: '900',
                        },
                    }}
                >
                    I am a beginner frontend developer with a passion for creating beautiful and functional web applications. I enjoy learning new technologies and improving my skills every day.
                </Typography>
            </Box>

            
        </Box>
        {/* Кнопка для скролла вниз */}
        <Scroll section="skills-section"></Scroll>
        </Box>
    );
}
