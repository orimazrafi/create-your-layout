import styled from "styled-components";
import Box from "@material-ui/core/Box";

export const FlexboxWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  :hover {
    cursor: pointer;
  }
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;
