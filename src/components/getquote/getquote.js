import React, {useState, useEffect} from "react";

const GetQuote = () => {
    const [quoteArray,setQuoteArray] = useState([]);
    const URL ='https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    useEffect(() =>{
    fetch(URL)
    .then(res=>res.json())
    .then((data)=>{const newQuoteState = data.quotes.map((x)=>{return x})
    setQuoteArray(newQuoteState)
    })
    .catch((e)=> console.log(e))
  },[])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

    let quoteDisplayed = (quoteArray[getRandomInt(quoteArray.length)])

    return (<div>
        <h3>{(((quoteDisplayed == undefined ? "loading" : quoteDisplayed.quote)))}</h3>
        <h4>{(((quoteDisplayed == undefined ? "loading" : quoteDisplayed.author)))}</h4>
        </div>)
}
export default GetQuote;