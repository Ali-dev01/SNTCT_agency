import Attachment from "@/icons/blog/Attachment";
import CommentIcon from "@/icons/blog/CommentIcon";
import EyeIcon from "@/icons/blog/EyeIcon";
import LikeIcon from "@/icons/blog/LikeIcon";
import ShareIcon from "@/icons/blog/ShareIcon";
import { Box, Typography } from "@mui/material";

const StatusBar = () => {
  return (
    <Box sx={styles.statusBar}>
      <Box sx={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <EyeIcon />
          <Typography color="#00336B" fontWeight={700} fontSize="16px">
            1.5k
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <CommentIcon />
          <Typography color="#00336B" fontWeight={700} fontSize="16px">
            500
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <LikeIcon />
          <Typography color="#00336B" fontWeight={700} fontSize="16px">
            700
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Attachment />
        <ShareIcon />
      </Box>
    </Box>
  );
};
export default StatusBar;

const styles = {
  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "50px",
    py: "16px",
    borderTop: "1px solid #3E5F82",
    borderBottom: "1px solid #3E5F82",
  },
};
