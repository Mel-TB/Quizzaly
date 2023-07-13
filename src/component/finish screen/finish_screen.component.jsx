import { restart } from "../../utils/questions/questions.action";

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "👍🏻";
  if (percentage === 0) emoji = "☠️";

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored <strong>{points}</strong> on {maxPoints}{" "}
        points ({Math.ceil(percentage)}%)
      </p>

      <p className='highscore'>(HighScore {highscore} point)</p>

      <button
        className='btn btn-ui'
        onClick={() => dispatch(restart())}
      >
        Start Again{" "}
      </button>
    </>
  );
};

export { FinishScreen };
