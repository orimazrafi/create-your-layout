import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

interface Props {
  height: string;
  color: string;
}
export const GridItem = styled(Paper)<Props>`
  padding: 1em;
  height: ${(props) => props.height};
  background: ${(props) => props.color}!important;
`;
