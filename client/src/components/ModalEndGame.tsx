import React, { useContext } from "react";
import "../styles/modal-end-game.scss";
import { useNavigate } from "react-router-dom";
import { ContextSetting } from "./Main";

export const ModalEndGame: React.FC<{ start: () => void; score: number }> = ({
  start,
  score,
}) => {
  const navigate = useNavigate();
  return (
    <div className="modal-end-game">
      <div className="modal-end-game__body">
        <h2 className="modal-end-game__title">Finish Game</h2>
        <h2 className="modal-end-game__title">Your check {score}</h2>
        <button onClick={start} className="modal-end-game__btn">
          Start begin
        </button>
        <button onClick={() => navigate("/")} className="modal-end-game__btn">
          Back to menu
        </button>
      </div>
    </div>
  );
};
