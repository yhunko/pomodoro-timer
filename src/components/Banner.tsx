import React from "react";
import { Box } from "native-base";

const BORDER_RADIUS = 5;

const Banner: React.FC = ({ children }) => (
  <Box
    px={4}
    py={2}
    borderWidth={1}
    borderColor={"#bdbdbd"}
    borderTopLeftRadius={BORDER_RADIUS}
    borderTopRightRadius={BORDER_RADIUS}
    borderBottomLeftRadius={BORDER_RADIUS}
    borderBottomRightRadius={BORDER_RADIUS}
  >
    {children}
  </Box>
);

export default Banner;
