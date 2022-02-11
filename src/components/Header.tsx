import React from "react";
import { Box, Text } from "native-base";

type Props = {
  value: React.ReactNode;
};

const Header: React.FC<Props> = ({ value }) => (
  <Box mb={2}>
    <Text fontSize={"4xl"}>{value}</Text>
  </Box>
);

export default Header;
