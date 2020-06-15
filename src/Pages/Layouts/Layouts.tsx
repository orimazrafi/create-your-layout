import React from "react";
import { PageHeadline } from "../../Elements/PageHeadline";
import { FlexLayoutWrapper } from "../../Elements/FlexLayoutWrapper";
import { FlexboxWrapper } from "../../Elements/FlexboxWrapper";
import { FirstLayout } from "../../Components/FirstLayout/FirstLayout";
import { SecondLayout } from "../../Components/SecondLayout/SecondLayout";

export const Layouts = () => {
  return (
    <>
      <PageHeadline>Layouts Screen</PageHeadline>
      <FlexLayoutWrapper>
        <FlexboxWrapper>
          <FirstLayout />
          <SecondLayout />
        </FlexboxWrapper>
      </FlexLayoutWrapper>
    </>
  );
};
