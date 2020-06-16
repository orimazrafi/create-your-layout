import React from "react";
import { ComponentsWrapper } from "../../Elements/ComponentsWrapper";
import { PageHeadline } from "../../Elements/PageHeadline";
import { ComponentsListWrapper } from "../../Elements/ComponentsListWrapper";
import { List } from "@material-ui/core";
import { ListItemContainer } from "../../Elements/ListItemContainer";
// eslint-disable-next-line
const log = console.log;

export const ComponentsSection = () => {
  return (
    <ComponentsWrapper>
      <PageHeadline>Components Section</PageHeadline>
      <ComponentsListWrapper>
        <List>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
          <ListItemContainer button>ds;lsdml;ksmdafkl;md</ListItemContainer>
        </List>
      </ComponentsListWrapper>
    </ComponentsWrapper>
  );
};
