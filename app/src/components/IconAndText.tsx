import { ReactNode } from "react";
import { Box, SxProps, Typography } from "@mui/material";

export const IconAndText = ({
  text,
  children,
  sx,
}: {
  text: string;
  children: ReactNode;
  sx?: SxProps;
}) => (
  <Box
    sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", ...sx }}
  >
    {children}
    <Typography variant={"subtitle1"}>{text}</Typography>
  </Box>
);
