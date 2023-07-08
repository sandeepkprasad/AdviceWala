import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Advice = (props) => {
  const [advice, setAdvice] = useState();

  const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    const data = await fetch(url);
    const parseData = await data.json();
    console.log(parseData);
    setAdvice(parseData.slip.advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  const updateAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    const data = await fetch(url);
    const parsedData = await data.json();
    setAdvice(parsedData.slip.advice);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className={`card text-center text-${
          props.mode === "light" ? "black" : "white"
        } bg-${props.mode}`}
        style={{ width: "50rem", marginTop: "72px" }}
      >
        <div className="card-body">
          <h4 className="card-title">AdviceWala</h4>
          <p className="card-text" style={{ marginTop: "32px" }}>
            <strong>"{advice}"</strong>
          </p>
          <Link
            to="/"
            className="btn btn-warning btn-sm"
            onClick={updateAdvice}
            style={{ marginTop: "64px" }}
          >
            Get More Advice &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advice;
