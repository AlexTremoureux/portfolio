import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to={"/à-propos"} tabIndex={tabIndex}>
        A propos de moi
      </Link>
      <Link to={"/formation"} tabIndex={tabIndex}>
        Formation
      </Link>
      <Link to={"/projets"} tabIndex={tabIndex}>
        Projets
      </Link>
      <Link to={"/contact"} tabIndex={tabIndex}>
        Contact
      </Link>
      <Link to={"/CV"} tabIndex={tabIndex}>
        CV
        </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
