import React, { Dispatch, SetStateAction } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/main.scss";

interface contextProps {
  shuffling: boolean;
  isSaved: boolean;
  time: string;
  colorMode: boolean;
  colorModeType: string;
  setColorMode: React.Dispatch<React.SetStateAction<boolean>>;
  setShuffling: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setColorModeType: React.Dispatch<React.SetStateAction<ColorMode>>;
}

export const ContextSetting = React.createContext<contextProps | null>(null);

export enum ColorMode {
  simple = "simple",
  flasher = "flasher",
}

export const Main = () => {
  const [colorMode, setColorMode] = React.useState(false);
  const [shuffling, setShuffling] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(true);
  const [time, setTime] = React.useState("60");
  const [colorModeType, setColorModeType] = React.useState<ColorMode>(
    ColorMode.simple
  );
  return (
    <div className="main">
      <ContextSetting.Provider
        value={{
          colorMode,
          setColorMode,
          shuffling,
          setShuffling,
          isSaved,
          setIsSaved,
          time,
          setTime,
          colorModeType,
          setColorModeType,
        }}
      >
        <Outlet />
      </ContextSetting.Provider>
    </div>
  );
};
