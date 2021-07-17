import React, { useContext, useState } from "react";
import SideNavComp from "../Features/SideNav/SideNavComp";
import Container from "../Features/Container/Container";
import UserContext, { UserProvider } from "../Features/Context";

function MainContainer() {
  return (
    <>
      <Container />
    </>
  );
}

export default MainContainer;
