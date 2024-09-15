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
    <Grid item xs={12} sm={10}>
      <motion.div initial="hidden" whileInView="visible" variants={RowVariants}>
        <Box
          sx={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px', 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', 
            },
            '& svg': {
              fontSize: 60,
              marginBottom: '8px', 
              color: color,
            },
          }}
        >
          <Icon />
          <Typography variant="body2" sx={{ fontSize: '14px' }}>{label}</Typography> 
        </Box>
      </motion.div>
    </Grid>
  );
};

export default SkillCard;
