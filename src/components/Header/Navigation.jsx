import React, {  useState } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuId = "main-menu";

  
  return (
    <nav className="navigation">
      <Burger open={isOpen} setOpen={setIsOpen} aria-controls={menuId} />
      <Menu open={isOpen} setOpen={setIsOpen} id={menuId} />
    </nav>
  );
};

export default Navigation;
