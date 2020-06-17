import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
interface Props {
  color: string;
}
export const ListItemContainer = styled(ListItem)<Props>`
  height: 150px;
  overflow: hidden;
  width: 150px !important;
  border: 1px solid black !important;
  margin: 10px !important;
  background-color: ${(props) => props.color}!important;
`;
