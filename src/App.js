import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Loader from "./components/UI/Loader";
import Timer from "./components/UI/Timer";
import Articles from "./components/Articles/Articles";
import { fetchArticleData } from "./store/article-actions";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(60);
  const [articles, setArticles] = useState(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      setShowTimer(true);
    }, 5000);
  }, []);

  const handleTimerStopped = async () => {
    // when timer stops, fetch articles
    dispatch(fetchArticleData());
  };

  return (
    <div className="App">
      {showLoader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        ""
      )}
      {showTimer ? (
        <div className="timer">
          {" "}
          <Timer
            onTimerStopped={handleTimerStopped}
            time={timerDuration}
          />{" "}
        </div>
      ) : (
        ""
      )}
      <Articles articles={articles} />
    </div>
  );
}

export default App;
