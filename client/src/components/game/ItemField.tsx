import React, { useContext } from "react";
import "../../styles/item-field.scss";
import { randomSelect } from "../helper";
import { ContextSetting } from "../Main";

interface ItemFieldProps {
  value: string | number;
  onClick: () => void;
  currentVal: number;
  clicked: boolean;
  size: number;
  arrColor: string[];
  index: number;
}

export const ItemField: React.FC<ItemFieldProps> = ({
  value,
  onClick,
  currentVal,
  clicked,
  size,
  arrColor,
  index,
}) => {
  const setting = useContext(ContextSetting);
  const [color, setColor] = React.useState([
    "black",
    "red",
    "yellow",
    "orange",
    "green",
    "purple",
    "pink",
    "brown",
    "grey",
    "silver",
    "blue",
    "aqua",
    "navy",
    "chocolate",
    "crimson",
    "darkmagenta",
    "gold",
    "greenyellow",
    "mediumturquoise",
  ]);

  const handleOnClick = () => {
    if (currentVal === value) {
      onClick();
    }
  };

  return (
    <div
      style={{
        color: setting?.colorMode
          ? setting.colorModeType === "flasher"
            ? `${color[randomSelect(18)]}`
            : "white"
          : "white",

        backgroundColor: `${
          setting?.colorMode
            ? arrColor[index > 32 ? index - 20 : index]
            : "rgb(0, 0, 0, 0.5)"
        }`,
      }}
      onClick={handleOnClick}
      className={`item ${clicked} score-${size}`}
    >
      {value}
    </div>
  );
};
