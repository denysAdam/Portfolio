import About from './components/About';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";
import { RootState } from './store/store';
import ProjectsAll from './components/ProjectsAll';
import { Box } from "@mui/material";
import { useSelector } from 'react-redux';
import Nav from './components/Nav';

export default function App() {

    const activePage = useSelector((state: RootState) => state.activePage.activePage);


    return (
        <Box
            sx={{
                minHeight: '100vh',
                position: 'relative',
                overflow: 'auto',
                backgroundColor: '#000000',
                zIndex: 0,
            }}
        >


            <Box id="home-section" sx={{ minHeight: '100vh', backgroundColor: 'transparent', position: 'relative' }}>
                {activePage === 'main' && 
                <Box
                    component="video"
                    src={'/Portfolio/video/background.mp4'}
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                        zIndex: -1,
                        filter: 'brightness(0.5)',
                    }}
                />}
                {/* Шапка с навигацией */}
                <Nav></Nav>
                {activePage === 'main'? <Home />: 
                    <Box id="projects-section" sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0', paddingBottom: '70px' }}>
                        <ProjectsAll />
                    </Box> }
                
            </Box>

            {activePage === 'main' && (
                <>
                    <Box id="about-section" sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <About />
            </Box>
            <Box id="skills-section" sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0', borderTopRightRadius: { xs: '0', md: '17%' } }}>
                <Skills />
            </Box>
            <Box id="projects-section" sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0', paddingBottom: '70px', borderBottomLeftRadius: { xs: '0', md: '17%' } }}>
                <Projects />
            </Box>
                </>
            )}
            
            
            <Box id="contact-section" sx={{ backgroundColor: '#000000', color: '#fff' }}>
                <Contact />
            </Box>
        </Box>
    );
}
