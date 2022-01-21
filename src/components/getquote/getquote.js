import React, { useState, useEffect } from "react";
import "./getquote.css";

const GetQuote = () => {
  const colours = [
    "#9932CC",
    "#8FBC8F",
    "#8B0000",
    "#2F4F4F",
    "#DAA520",
    "#7CFC00",
    "#F08080",
    "#FF4500",
    "#4169E1",
    "#2E8B57",
    "#40E0D0",
    "#EE82EE",
    "#00FF7F",
  ];
  document.body.style.background = colours[getRandomInt(colours.length)];
  document.body.style.color = document.body.style.background;
  const [quoteArray, setQuoteArray] = useState([]);
  const URL =
    "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const newQuoteState = data.quotes.map((x) => {
          return x;
        });
        setQuoteArray(newQuoteState);
      })
      .catch((e) => console.log(e));
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let [quoteDisplayed, setQuoteDisplayed] = useState(
    quoteArray[getRandomInt(quoteArray.length)]
  );
  const handleClick = () => {
    setQuoteDisplayed(quoteArray[getRandomInt(quoteArray.length)]);
    document.body.style.background = colours[getRandomInt(colours.length)];
    document.body.style.color = document.body.style.background;
  };
  return (
    <div className="myDiv" id="quote-box">
      <h3 className="quote" id="text">
        {quoteDisplayed == undefined
          ? "The purpose of our lives is to be happy."
          : quoteDisplayed.quote}
      </h3>
      <h4 className="quote-author" id="author">
        {quoteDisplayed == undefined ? "Dalai Lama" : quoteDisplayed.author}
      </h4>
      <button className="button" onClick={handleClick}>
        New Quote
      </button>
      <a
        href={"https://twitter.com/intent/tweet?text={quoteDisplayed}"}
        target="blank"
        className="button"
        id="tweet-quote"
      >
        Tweet
      </a>
    </div>
  );
};
export default GetQuote;
