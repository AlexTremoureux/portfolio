import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styles";

const Burger = ({ open, setOpen }) => {
    const isExpanded = open ? true : false;
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
