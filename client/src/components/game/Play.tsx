import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/play.scss";
import { ItemField } from "./ItemField";
import { ContextSetting } from "../Main";
import { TimerProgress } from "../TimerProgress";
import { ModalEndGame } from "../ModalEndGame";
import { shuffing } from "../helper";
import axios from "axios";
import moment from "moment";
import { ButtonBackMenu } from "../ButtonBackMenu";

export const Play = () => {
  const navigate = useNavigate();
  const [count, setCount] = React.useState(15);
  const setting = useContext(ContextSetting);
  const [currentBill, setCurrentBill] = React.useState(1);
  const [arrRandomNumbers, setArrRandomNumbers] = React.useState<number[]>([1]);
  const [startTimer, setStartTimer] = React.useState(5);
  const [timer, setTimer] = React.useState(0);
  const timeRef = React.useRef<any>(null);
  const [end, setEnd] = React.useState(false);
  const [check, setCheck] = React.useState(0);

  const handleSetStartTimer = () => {
    timeRef.current = setInterval(() => {
      console.log(2);
      setStartTimer((prev) => prev - 1);
    }, 1000);
  };

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
    "magenta",
    "mediumspringgreen",
    "moccasin",
    "orchid",
    "plum",
    "slategrey",
    "yellowgreen",
    "seagreen",
    "sienna",
    "palevioletred",
    "mediumvioletred",
    "lightcyan",
    "deeppink",
    "darkgreen",
    "azure",
  ]);

  React.useEffect(() => {
    handleSetStartTimer();
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (startTimer < 0) {
      clearInterval(timeRef.current);

      timeRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  }, [startTimer]);

  React.useEffect(() => {
    if (currentBill > count) {
      setCount((prev) => prev + 5);
      setCurrentBill(1);
    }

    if (setting?.shuffling) {
      setArrRandomNumbers((prev) => shuffing(prev));
    }
  }, [currentBill]);

  React.useEffect(() => {
    if (count > 15) {
      setCheck((prev) => prev + Math.round((count * 100) / timer));
    }
    setColor((prev) => shuffing(prev));

    setArrRandomNumbers(
      shuffing(new Array(count).fill(1).map((item, index) => index + 1))
    );
  }, [count]);

  const setScore = async () => {
    try {
      const res = await axios.post("http://localhost:3001/score", {
        name: localStorage.getItem("user"),
        score: {
          result: check,
          data: moment().format("MMMM Do YYYY, h:mm"),
        },
      });
    } catch (e: any) {}
  };

  React.useEffect(() => {
    if (startTimer < 1) {
      if (timer === +setting!.time) {
        clearInterval(timeRef.current);
        setEnd((prev) => true);
        if (localStorage.getItem("user")) {
          if (setting?.isSaved) setScore();
        }
      }
    }
  }, [timer]);

  const handleOnClick = () => {
    setCurrentBill((prev) => prev + 1);
  };

  const handleStartGame = () => {
    setEnd((pref) => false);
    setCount(15);
    setCurrentBill(1);
    setStartTimer(5);
    setTimer(0);
    handleSetStartTimer();
    setCheck(0);
  };

  return (
    <>
      <div className="back">
        <ButtonBackMenu />
      </div>
      <div className="game">
        {startTimer >= 0 && (
          <div className="game__start-timer">
            <div className="game__start-number">{startTimer}</div>
          </div>
        )}
        {end && <ModalEndGame start={handleStartGame} score={check} />}
        <TimerProgress timer={setting?.time || "60"} time={timer} />
        <div
          style={{ paddingTop: count === 15 ? "50px" : "10px" }}
          className="game__field"
        >
          {arrRandomNumbers.map((elem, index) => {
            return (
              <ItemField
                index={index}
                arrColor={color}
                size={count}
                currentVal={currentBill}
                onClick={handleOnClick}
                value={elem}
                clicked={currentBill > elem ? true : false}
                key={elem + Math.random()}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
