const Progress = ({
  currentQuestion,
  numberOfQuestions,
  points,
  maxPoints,
  answer,
}) => {
  return (
    <header className='progress'>
      <progress
        max={numberOfQuestions}
        value={currentQuestion + Number(answer !== null)}
      />

      <p>
        Question <strong>{currentQuestion + 1}</strong> / {numberOfQuestions}
      </p>

      <p>
        Points : {points} / {maxPoints}
      </p>
    </header>
  );
};

export { Progress };
