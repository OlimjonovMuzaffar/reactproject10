import { space } from "postcss/lib/list";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function Icons() {
  const [icon, setIcon] = useState(true);
  const colors = ["#232D3F", "#0F0F0F", "#005B41", "#008170"];
  return (
    <ul className="ml-28 mt-10">
      <li>
        {icon && (
          <FaSun
            className="text-4xl"
            onClick={() => {
              setIcon(false);
            }}
          />
        )}
        {!icon && (
          <FaMoon
            className="text-4xl"
            onClick={() => {
              setIcon(true);
            }}
          />
        )}
      </li>
      <li>
        {colors.map((color) => {
          return (
            <span key={color}
              style={{ backgroundColor: color }}
              className="w-10 h-10 rounded-full "
            ></span>
          );
        })}
      </li>
    </ul>
  );
}

export default Icons;
