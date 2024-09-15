import { AppBar, Box, Toolbar, Typography,Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { scroller } from 'react-scroll';
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setActiveP } from '../store/slices/ActivePageSlice';
export default function Nav(){
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const dispatch = useDispatch();
    const activePage = useSelector((state: RootState) => state.activePage.activePage);
    const setActivePage = (page: string) => {
        dispatch(setActiveP(page));
    }
    const handleScroll = () => {
        scroller.scrollTo('contact-section', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    return (
        <>
                <AppBar position="static" sx={{ backgroundColor: activePage === 'main' ? 'transparent' : '#ffffff', boxShadow: 'none' }}>
                        <Toolbar sx={{ justifyContent: 'space-between'}}>
                            <Typography sx={{ fontSize: '16px',fontWeight: 'bold', color: activePage === 'main' ? '#ffffff': '#000000' , paddingRight: { xs: '0px', md: '11.5rem'}}}>
                                Denys Adamenko
                            </Typography>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
                                <Button
                                    onClick={() => setActivePage('main')}
                                    sx={{
                                        fontSize: '16px',
                                        color: activePage === 'main' ? '#979696' : '#000000',
                                        position: 'relative',
                                        fontWeight:  'bold',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '100%',
                                            height: '2px',
                                            bottom: '-4px',
                                            left: 0,
                                            backgroundColor: activePage === 'main' ? '#ffb400' : 'transparent',
                                            transition: 'background-color 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    Main
                                </Button>
                                <Button
                                    onClick={() => setActivePage('project')}
                                    sx={{
                                        fontSize: '16px',
                                        color: activePage === 'project' ? '#979696' : '#FFFFFF',
                                        position: 'relative',
                                        fontWeight: 'bold' ,
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '100%',
                                            height: '2px',
                                            bottom: '-4px',
                                            left: 0,
                                            backgroundColor: activePage === 'project' ? '#ffb400' : 'transparent',
                                            transition: 'background-color 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    Projects
                                </Button>
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
                                <Button
                                    startIcon={<FaGithub />}
                                    sx={{
                                        color: activePage === 'main' ? '#fff': '#000',
                                        textTransform: 'none',
                                        fontWeight: '700',
                                        fontSize: '1rem',
                                        '&:hover': {
                                            color: '#ffb400',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => window.open('https://github.com/denysAdam', '_blank')}
                                >
                                    My GitHub
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleScroll}
                                    sx={{
                                        backgroundColor: activePage === 'main' ? '#fff': '#000',
                                        color: activePage === 'main' ? '#000': '#fff',
                                        padding: '5px 35px',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        borderRadius: '5px',
                                        '&:hover': {
                                            backgroundColor: '#ffb400',
                                        },
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Box>
                            <IconButton
                                edge="end"
                                color = {activePage === 'main' ? 'inherit' : 'default'}
                                aria-label="menu"
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={toggleDrawer}
                        sx={{ '& .MuiDrawer-paper': { backgroundColor: '#000', color: '#fff' } }}
                    >
                        <Box
                            sx={{
                                width: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingTop: '20px',
                            }}
                        >
                            <IconButton
                                onClick={toggleDrawer}
                                sx={{ alignSelf: 'flex-end', marginRight: '10px', color: '#fff' }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                                Menu
                            </Typography>
                            <List>
                                <ListItem  onClick={() => { setActivePage('main'); toggleDrawer(); }}>
                                    <ListItemText primary="Main" sx={{ textAlign: 'center' }} />
                                </ListItem>
                                <ListItem onClick={() => { setActivePage('project'); toggleDrawer(); }}>
                                    <ListItemText primary="Projects" sx={{ textAlign: 'center' }} />
                                </ListItem>
                                <ListItem onClick={() => { handleScroll(); toggleDrawer(); }}>
                                    <ListItemText primary="Contacts" sx={{ textAlign: 'center' }} />
                                </ListItem>
                            </List>
                        </Box>
                </Drawer>
        </>
    )
}