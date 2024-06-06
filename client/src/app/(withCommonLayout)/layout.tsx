import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box className="min-h-screen">{children}</Box>
    </>
  );
};

export default CommonLayout;
