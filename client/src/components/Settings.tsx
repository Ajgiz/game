import React, { ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/setting.scss";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";

import { ColorMode, ContextSetting } from "./Main";
import { ButtonBackMenu } from "./ButtonBackMenu";

export const Settings = () => {
  const setting = useContext(ContextSetting);

  const navigate = useNavigate();

  const handleChangeTime = (event: ChangeEvent<HTMLInputElement>) => {
    setting!.setTime(event.target.value);
  };

  const handleChangeIsSaved = (event: ChangeEvent<HTMLInputElement>) => {
    setting!.setIsSaved(event.target.checked);
  };

  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setting!.setColorMode(event.target.checked);
  };

  const handleChangeColorModeType = (event: ChangeEvent<HTMLInputElement>) => {
    setting!.setColorModeType(
      event.target.value === "flasher" ? ColorMode.flasher : ColorMode.simple
    );
  };

  const handleChangeShuffing = (event: ChangeEvent<HTMLInputElement>) => {
    setting!.setShuffling(event.target.checked);
  };

  const controlTime = (item: string) => ({
    checked: setting!.time === item,
    onChange: handleChangeTime,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const controlColorModeType = (item: string) => ({
    checked: setting!.colorModeType === item,
    onChange: handleChangeColorModeType,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="setting">
      <div className="setting__body">
        <div className="setting__top">
          <h1 className="setting__title">Settings</h1>
          <ButtonBackMenu />
        </div>
        <div className="setting__items">
          <div className="setting__item">
            <p className="setting__label">Colorful mode</p>
            <Switch
              checked={setting!.colorMode}
              onChange={handleChangeColor}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          {setting?.colorMode && (
            <div className="setting__item color">
              <p className="setting__label sub-label">Simple</p>
              <Radio {...controlColorModeType("simple")} />
              <p className="setting__label sub-label">Flasher</p>
              <Radio {...controlColorModeType("flasher")} />
            </div>
          )}
        </div>

        <div className="setting__item">
          <p className="setting__label">Shuffling after every click</p>
          <Switch
            checked={setting!.shuffling}
            onChange={handleChangeShuffing}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="setting__item">
          <p className="setting__label">Save result</p>
          <Switch
            checked={setting!.isSaved}
            onChange={handleChangeIsSaved}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        <div className="setting__item">
          <p className="setting__label">Time</p>
          <Radio {...controlTime("30")} />
          <p className="setting__label">30</p>
          <Radio {...controlTime("60")} />
          <p className="setting__label">60</p>
          <Radio {...controlTime("90")} />
          <p className="setting__label">90</p>
        </div>
      </div>
    </div>
  );
};
