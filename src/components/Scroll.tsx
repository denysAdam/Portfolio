import { Box, Typography } from "@mui/material";
import { scroller } from 'react-scroll';
import ScrollSvg from "../icons/scroll.svg?react";
import { FC } from 'react';

interface ScrollProps {
  section: string;
}

const Scroll: FC<ScrollProps> = ({ section }) => {
  const handleScroll = () => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

    const myMap : Map<string, string> = new Map([
      ['about-section', 'About me'], 
      ['skills-section', 'Skills'],
      ['projects-section', 'Projects'],
      ['contact-section', 'Contact me'],
  ]);

  const text: string | undefined = myMap.get(section) ;
  
  return (
    <Box
      sx={{
        cursor: 'pointer',
        maxWidth: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fill: '#ffb400',
        '&:hover .arrow': {
          transform: 'translateY(10px)',
          fill: '#979696',
          transition: 'transform 0.3s ease-in-out, fill 0.3s ease-in-out',
        },
        '&:hover .text': {
          color: '#ffb400',
        },
        transition: 'transform 0.3s ease-in-out, fill 0.3s ease-in-out, color 0.3s ease-in-out',
      }}
      onClick={handleScroll}
    >
      <ScrollSvg className="arrow" style={{ width: '24px', height: 'auto' }} />
      <Typography 
        variant="body1" 
        className="text" 
        sx={{ 
          marginTop: '10px', 
          textAlign: 'center', 
          color: '#979696',
          fontWeight: '500',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default Scroll;
