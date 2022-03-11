import type { NextComponentType } from "next";
import NavButtonCart from "./components/nav-button-cart/nav-button-cart";
import NavDecorationBar from "./components/nav-decoration-bar/nav-decoration-bar";
import NavLogo from "./components/nav-logo/nav-logo";
import NavWrapper from "./components/nav-wrapper/nav-wrapper";

const Nav: NextComponentType = () => {
  return (
    <NavWrapper>
      <NavLogo></NavLogo>
      <NavDecorationBar></NavDecorationBar>
      <NavButtonCart></NavButtonCart>
    </NavWrapper>
  );
};

export default Nav;
