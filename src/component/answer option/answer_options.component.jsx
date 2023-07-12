import { newAnswer } from "../../utils/questions/questions.action";

const AnswerOption = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, currentQuestion) => (
        <button
          className={`btn btn-option ${
            currentQuestion === answer ? "answer" : ""
          } ${
            hasAnswered
              ? currentQuestion === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch(newAnswer(currentQuestion))}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export { AnswerOption };
