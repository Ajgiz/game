import axios from "axios";
import React from "react";
import "../styles/records.scss";
import { ButtonBackMenu } from "./ButtonBackMenu";
import { Loaders } from "./Loaders";

export const Score = () => {
  const [score, setScore] = React.useState<{ result: number; data: string }[]>(
    []
  );
  const [error, setError] = React.useState("");
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const getFetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/" + localStorage.getItem("user")
        );
        setScore(res.data.score);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoaded(true);
      }
    };
    getFetch();
  }, []);
  return (
    <div className="score">
      <div className="score__body">
        <ButtonBackMenu />

        {loaded ? (
          score.map((elem) => {
            return (
              <div className="score__item">
                <p>Result: {elem.result}</p>
                <p>{elem.data}</p>
              </div>
            );
          })
        ) : (
          <div className="score__loaders">
            <Loaders />
          </div>
        )}
      </div>
    </div>
  );
};
