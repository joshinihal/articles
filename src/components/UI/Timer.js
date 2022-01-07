import { useState, useEffect, useRef } from "react";

import classes from './Timer.module.css';

const Timer = (props) => {
  const [timer, setTimer] = useState(props.time);
  const [allowReset, setAllowReset] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [timer]);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      handleTimerStopped();
    }
  }, [timer]);

  const handleTimerStopped = () => {
    props.onTimerStopped();
    toggleResetButton();
  };

  const toggleResetButton = () => {
    setAllowReset(true);
  };

  const handleResetBtn = () => {
    setAllowReset(false);
    setTimer(props.time);
    // startTimer();
  };

  //   const startTimer = () => {
  //     const timerInterval = setInterval(() => {
  //       setTimer((prev) => {
  //         if (prev > 0) {
  //           return prev - 1;
  //         } else if (prev === 0) {
  //           clearInterval(timerInterval);
  //           handleTimerStopped();
  //           return null;
  //         }
  //       });
  //     }, 1000);
  //   };

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    return (
      hours.toString() + ":" + minutes.toString() + ":" + seconds.toString()
    );
  };

  return (
    <div>
      <div>{secondsToTime(timer)}</div>
      <div className={classes['btn-container']}>
        <button
          onClick={handleResetBtn}
          disabled={!allowReset}
          className={classes['reset-btn']}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
