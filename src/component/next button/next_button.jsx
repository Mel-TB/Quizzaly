import { nextQuestion, finished } from "../../utils/questions/questions.action";

const NextButton = ({
  dispatch,
  answer,
  currentQuestion,
  numberOfQuestions,
}) => {
  if (answer === null) return;

  // Display button 'next question' until 15 questions
  if (currentQuestion < numberOfQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          dispatch(nextQuestion());
        }}
      >
        Next Question
      </button>
    );
  }

  //  Display button 'finish' at the last question

  if (currentQuestion === numberOfQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          dispatch(finished());
        }}
      >
        Finish
      </button>
    );
  }
};

export { NextButton };
