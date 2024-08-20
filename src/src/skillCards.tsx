import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

interface SkillCardProps {
  Icon: React.ElementType;
  label: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, label, color }) => {
  const RowVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <Grid item xs={12} sm={4}>
      <motion.div initial="hidden" whileInView="visible" variants={RowVariants}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
            '& svg': {
              fontSize: 100,
              marginBottom: '10px',
              color: color,
            },
          }}
        >
          <Icon />
          <Typography>{label}</Typography>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default SkillCard;
