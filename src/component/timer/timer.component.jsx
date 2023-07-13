import { useEffect } from "react";

import {
  INTERVAL_DELAY,
  SECONDS_PER_MINUTE,
} from "../../utils/constants/numbers_constant";

import { timer } from "../../utils/questions reducer/questions.action";

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / SECONDS_PER_MINUTE);
  const seconds = secondsRemaining % SECONDS_PER_MINUTE;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(timer());
    }, INTERVAL_DELAY);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <p className='timer'>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </p>
    </div>
  );
};

export { Timer };
