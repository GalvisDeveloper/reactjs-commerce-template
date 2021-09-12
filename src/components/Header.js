import React, { useContext } from "react";
import StyleContext from "../contexts/StyleContext";

const Header = () => {
  const { isDark } = useContext(StyleContext);
  console.log(isDark);
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
