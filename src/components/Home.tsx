import { Box, Typography } from "@mui/material";
import Scroll from "./Scroll";

export default function Home() {


    return (
        <Box
            sx={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
                color: '#fff',
            }}
        >
            {/* Основной контент */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'transparent',
                    padding: '0 20px',
                    width: '100%',
                    height: '80%',
                    paddingTop: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    
                }}
            >
                <Typography sx={{  fontSize: { xs: '3rem', sm: '6rem', md: '6rem'}, fontWeight: '200', marginBottom: '-20px' }}>
                    HELLO,
                </Typography>
                <Typography sx={{  fontSize: { xs: '3rem', sm: '6rem', md: '6rem'}, fontWeight: '200', marginBottom: '-40px' }}>
                    MY NAME IS
                </Typography>
                <Typography sx={{  fontSize: { xs: '5rem', sm: '9rem', md: '15rem'}, fontWeight: '900', marginBottom: '-30px' }}>
                    DENYS
                </Typography>
                <Typography sx={{ color: '#ffb400', fontSize: '1.5rem', margin: '0', paddingLeft: '10px'}}>
                    Beginner frontend developer
                </Typography>
            </Box>
            <Scroll section="about-section"></Scroll>
        </Box>
    );
}
