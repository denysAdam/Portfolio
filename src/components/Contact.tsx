import { Typography, Box, Grid, Link, TextField, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import UserIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useRef } from 'react';

export default function Contact() {
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const name = nameRef.current?.value || '';
        const email = emailRef.current?.value || '';
        const message = messageRef.current?.value || '';

        const mailtoLink = `mailto:dadamenkod@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <Box
            component="footer"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                boxSizing: 'border-box',
                backgroundColor: 'transparent',
                color: '#fff',
            }}
        >
            <Box
                sx={{
                    minHeight: '85vh',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: { sm: '50%' },
                        paddingRight: { sm: '50px' },
                    }}
                >
                    <Typography gutterBottom sx={{ fontWeight: '900', fontSize: { xs: '3.5rem', md: '5rem' } }}>
                        Contacts
                    </Typography>

                    <Box sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <EmailIcon sx={{ fontSize: 30, marginRight: '10px' }} />
                        <Typography variant="body1" component="span">
                            <Link href="mailto:dadamenkod@gmail.com" color="inherit" underline="none" sx={{ '&:hover': { color: '#ffb400' } }}>
                                dadamenkod@gmail.com
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon sx={{ fontSize: 30, marginRight: '10px' }} />
                        <Typography variant="body1" component="span">
                            <Link href="tel:+380675870339" color="inherit" underline="none" sx={{ '&:hover': { color: '#ffb400' } }}>
                                +380675870339
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '15px' }}>
                        <Link href="https://t.me/denys_ad4u" color="inherit" target="_blank">
                            <TelegramIcon sx={{ fontSize: 40, color: '#0088cc', '&:hover': { scale: '1.2' } }} />
                        </Link>
                        <Link href="https://github.com/denysAdam" color="inherit" target="_blank">
                            <GitHubIcon sx={{ fontSize: 40, color: '#ffb400', '&:hover': { scale: '1.2' } }} />
                        </Link>
                        <Link href="https://www.instagram.com/denys_ad4u" color="inherit" target="_blank">
                            <InstagramIcon sx={{ fontSize: 40, color: '#E1306C', '&:hover': { scale: '1.2' } }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/denys-adamenko-382206187" color="inherit" target="_blank">
                            <LinkedInIcon sx={{ fontSize: 40, color: '#0077b5', '&:hover': { scale: '1.2' } }} />
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <Box component="form" sx={{ mt: 3, maxWidth: '500px', width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={nameRef}
                                    placeholder="Name"
                                    InputProps={{
                                        startAdornment: <UserIcon sx={{ color: '#979696', marginRight: '20px' }} />,
                                    }}
                                    sx={{
                                        input: { color: '#fff' },
                                        backgroundColor: '#D9D9D91A',
                                        borderRadius: '15px',
                                        border: '2px #565656 solid',
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'transparent',
                                            },
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiOutlinedInput-root:focus-visible': {
                                            outline: 'none',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={emailRef}
                                    placeholder="Email"
                                    InputProps={{
                                        startAdornment: <EmailIcon sx={{ color: '#979696', marginRight: '20px' }} />,
                                    }}
                                    sx={{
                                        input: { color: '#fff' },
                                        backgroundColor: '#D9D9D91A',
                                        borderRadius: '15px',
                                        border: '2px #565656 solid',
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'transparent',
                                            },
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiOutlinedInput-root:focus-visible': {
                                            outline: 'none',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={messageRef}
                                    placeholder="Message"
                                    InputProps={{
                                        startAdornment: <MessageIcon sx={{ color: '#979696', marginRight: '20px' }} />,
                                    }}
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    maxRows={4}
                                    sx={{
                                        input: { color: '#fff' },
                                        '& .MuiInputBase-inputMultiline': {
                                            color: '#fff',
                                        },
                                        backgroundColor: '#D9D9D91A',
                                        borderRadius: '15px',
                                        border: '2px #565656 solid',
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'transparent',
                                            },
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiOutlinedInput-root:focus-visible': {
                                            outline: 'none',
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#fff', color: '#000', width: '150px', fontWeight: '700', '&:hover': { bgcolor: '#ffb400' } }}
                            onClick={handleSend}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2" sx={{ marginTop: '20px' }}>
                &copy; {new Date().getFullYear()} Denys Adamenko. All rights reserved.
            </Typography>
        </Box>
    );
}
