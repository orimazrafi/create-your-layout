import React from "react";
import { FlexboxWrapper } from "../../Elements/FlexboxWrapper";
import { ConfigurationSection } from "../../Components/ConfigurationSection/ConfigurationSection";
import { ComponentsSection } from "../../Components/ComponentsSection/ComponentsSection";
// eslint-disable-next-line
const log = console.log;
export const Configuration = () => {
  return (
    <FlexboxWrapper>
      <ComponentsSection />
      <ConfigurationSection />
    </FlexboxWrapper>
  );
};
