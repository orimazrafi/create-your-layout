import React from "react";
import { FlexboxWrapper } from "../../Elements/FlexboxWrapper";
import { ConfigurationSection } from "../../Components/ConfigurationSection/ConfigurationSection";
import { ComponentsSection } from "../../Components/ComponentsSection/ComponentsSection";

export const Configuration = () => {
  return (
    <FlexboxWrapper>
      <ComponentsSection />
      <ConfigurationSection />
    </FlexboxWrapper>
  );
};
