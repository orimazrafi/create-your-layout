import styled from "styled-components";
import Box from "@material-ui/core/Box";

export const Flexbox = styled(Box)`
  flex: 1;
  margin: 10px;
  min-width: 300px;
  :hover {
    transform: scale(1.05);
    transition: 0.3s;
    opacity: 0.8;
    border: 1px solid grey;
    padding: 2px;
  }
`;
